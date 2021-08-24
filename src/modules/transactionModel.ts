import { formatDate } from "../utils/formatters/date.js";
import { formatPrice } from "../utils/formatters/price.js";
import { ITransaction } from "./transactions.js";

export function createTransactionModel(transaction: ITransaction): string {
  return `
    <tr>
      <td>${transaction.title}</td>
      <td>${transaction.description}</td>
      <td>${formatPrice(transaction.amount)}</td>
      <td>${formatDate(transaction.created_at)}</td>
    </tr>
  `;
}
