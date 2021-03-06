import { formatDate } from "../../utils/formatters/date.js";
import { formatPrice } from "../../utils/formatters/price.js";
export function createTransactionModel(transaction) {
    return `
    <tr>
      <td>${transaction.title}</td>
      <td>${transaction.description}</td>
      <td style=${transaction.type === "income" ? "color:green" : "color:red"}>${formatPrice(transaction.amount)}</td>
      <td>${formatDate(transaction.created_at)}</td>
    </tr>
  `;
}
//# sourceMappingURL=model.js.map