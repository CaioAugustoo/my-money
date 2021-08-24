import { formatDate } from "../utils/formatters/date.js";
import { formatPrice } from "../utils/formatters/price.js";
export function createTransactionModel(transaction) {
    return `
    <tr>
      <td>${transaction.description}</td>
      <td>${formatPrice(transaction.amount)}</td>
      <td>${formatDate(transaction.date)}</td>
    </tr>
  `;
}
//# sourceMappingURL=transactionModel.js.map