// Helpers And Formatters

export function formatCurrency(amt, currency) {
  return Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(amt);
}

export function generateOptions(options) {
  return Object.entries(options)
    .map(([currencyCode, currencyName]) => {
      return `
      <option value="${currencyCode}">${currencyCode} - ${currencyName}</option>
    `;
    })
    .join("");
}
