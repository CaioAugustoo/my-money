import { formatDate } from "../utils/formatters/date.js";
import { formatPrice } from "../utils/formatters/price.js";
export function createTransactionModel(transaction) {
    const wrapper = document.createElement("tr");
    const title = document.createElement("td");
    const description = document.createElement("td");
    const amount = document.createElement("td");
    const date = document.createElement("td");
    title.innerText = transaction.title;
    description.innerText = transaction.description;
    amount.innerText = formatPrice(transaction.amount);
    date.innerText = formatDate(transaction.created_at);
    amount.style.color = transaction.type === "income" ? "green" : "red";
    wrapper.appendChild(title);
    wrapper.appendChild(description);
    wrapper.appendChild(amount);
    wrapper.appendChild(date);
    return wrapper;
}
//# sourceMappingURL=transactionModel.js.map