export function formatDate(date) {
  const currentDate = new Intl.DateTimeFormat('ru-RU', {
    dateStyle: 'medium',
  }).format(date);

  return currentDate;
}
