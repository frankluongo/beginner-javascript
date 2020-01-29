// Core Functionality To Our Application

const endpoint = "https://api.exchangeratesapi.io/latest";
const ratesByBase = {};

export async function convert(amt, from, to) {
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

export async function fetchRates(base = "USD") {
  const res = await fetch(`${endpoint}?base=${base}`);
  const rates = await res.json();
  return rates;
}
