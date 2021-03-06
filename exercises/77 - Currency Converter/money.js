import 'babel-polyfill'

const currencies = {
  USD: "United States Dollar",
  AUD: "Australian Dollar",
  BGN: "Bulgarian Lev",
  BRL: "Brazilian Real",
  CAD: "Canadian Dollar",
  CHF: "Swiss Franc",
  CNY: "Chinese Yuan",
  CZK: "Czech Republic Koruna",
  DKK: "Danish Krone",
  GBP: "British Pound Sterling",
  HKD: "Hong Kong Dollar",
  HRK: "Croatian Kuna",
  HUF: "Hungarian Forint",
  IDR: "Indonesian Rupiah",
  ILS: "Israeli New Sheqel",
  INR: "Indian Rupee",
  JPY: "Japanese Yen",
  KRW: "South Korean Won",
  MXN: "Mexican Peso",
  MYR: "Malaysian Ringgit",
  NOK: "Norwegian Krone",
  NZD: "New Zealand Dollar",
  PHP: "Philippine Peso",
  PLN: "Polish Zloty",
  RON: "Romanian Leu",
  RUB: "Russian Ruble",
  SEK: "Swedish Krona",
  SGD: "Singapore Dollar",
  THB: "Thai Baht",
  TRY: "Turkish Lira",
  ZAR: "South African Rand",
  EUR: "Euro"
};
//
// Variables
//
const endpoint = "https://api.exchangeratesapi.io/latest";
const form = document.querySelector('[data-ref="currencyForm"]');
const fromInput = document.querySelector('[name="from_amount"]');
const fromSelect = document.querySelector('[name="from_currency"]');
const optionsHTML = generateOptions(currencies);
const ratesByBase = {};
const toEl = document.querySelector('[data-ref="currencyForm.toAmount"]');
const toSelect = document.querySelector('[name="to_currency"]');
//
// Actions
//
async function convert(amt, from, to) {
  // First Check if we have the rates to convert from that currency
  if (!ratesByBase[from]) {
    const rates = await fetchRates(from);
    ratesByBase[from] = rates;
  }
  // Convert The Amount They Passed In
  const rate = ratesByBase[from].rates[to];
  const convertedAmount = rate * amt;
  return convertedAmount;
}
async function fetchRates(base = "USD") {
  const res = await fetch(`${endpoint}?base=${base}`);
  const rates = await res.json();
  return rates;
}
function formatCurrency(amt, currency) {
  return Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(amt);
}
function generateOptions(options) {
  return Object.entries(options)
    .map(([currencyCode, currencyName]) => {
      return `
      <option value="${currencyCode}">${currencyCode} - ${currencyName}</option>
    `;
    })
    .join("");
}
//
// Handlers
//
async function handleInput() {
  const rawAmount = await convert(fromInput.value, fromSelect.value, toSelect.value);
  toEl.textContent = formatCurrency(rawAmount, toSelect.value);

}
//
// On Page Load Functions
//
fromSelect.innerHTML = optionsHTML;
toSelect.innerHTML = optionsHTML;
//
// Listeners
//
form.addEventListener('input', handleInput);
