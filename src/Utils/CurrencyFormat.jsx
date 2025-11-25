export function formatCurrency(amount, currency = "INR", locale = "en-IN") {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
  }).format(amount);
}
