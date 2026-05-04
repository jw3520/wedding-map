export function getIsoDateAfter(days: number) {
  const date = new Date();
  date.setDate(date.getDate() + days);

  return date.toISOString().slice(0, 10);
}

export function getDueDate(weddingDate: string, offsetDays: number) {
  const dueDate = new Date(`${weddingDate}T00:00:00`);
  dueDate.setDate(dueDate.getDate() - offsetDays);

  return dueDate;
}

export function formatShortDate(date: Date) {
  return new Intl.DateTimeFormat('ko-KR', {
    month: 'long',
    day: 'numeric',
  }).format(date);
}

export function getDaysUntil(date: Date) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const target = new Date(date);
  target.setHours(0, 0, 0, 0);

  return Math.ceil((target.getTime() - today.getTime()) / 86_400_000);
}
