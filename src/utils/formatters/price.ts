export function formatPrice(value: number): string {
  return new Intl.NumberFormat("ja-JP", {
    style: "currency",
    currency: "BRL",
  }).format(value);
}
