export function formatPrice(value) {
    return new Intl.NumberFormat("ja-JP", {
        style: "currency",
        currency: "BRL",
    }).format(value);
}
//# sourceMappingURL=price.js.map