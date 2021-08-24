export function formatDate(date: number | Date): string {
  return new Intl.DateTimeFormat("pt-BR").format(date);
}
