import { formatDate } from "../utils/formatters/date.js";
import { formatPrice } from "../utils/formatters/price.js";
import { ITransaction } from "./transactions.js";

export function createTransactionModel(transaction: ITransaction): string {
  return `
      <tr>
        <td>${transaction.description}</td>
        <td>${formatPrice(transaction.amount)}</td>
        <td>${formatDate(transaction.date)}</td>
      </tr>
    `;
}
