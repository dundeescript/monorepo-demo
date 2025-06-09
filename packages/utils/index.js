export function formatCurrency(amount) {
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
  }).format(amount);
}

export function formatDate(date) {
  return new Intl.DateTimeFormat('en-GB').format(new Date(date));
}