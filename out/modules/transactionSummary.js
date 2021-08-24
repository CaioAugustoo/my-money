import { formatPrice } from "../utils/formatters/price.js";
export class TransactionSummary {
    constructor() {
        this._expenseCard = document.querySelector("#expenseDisplay");
        this._incomeCard = document.querySelector("#incomeDisplay");
        this._totalCard = document.querySelector("#totalDisplay");
    }
    showValues(transactions) {
        const { income, expenses } = this.listAll(transactions);
        const total = income - expenses;
        this._expenseCard.innerText = formatPrice(expenses);
        this._incomeCard.innerText = formatPrice(income);
        this._totalCard.innerText = formatPrice(total);
    }
    listAll(transactions) {
        var _a, _b;
        const allTransactions = {
            income: (_a = transactions === null || transactions === void 0 ? void 0 : transactions.filter(transaction => transaction.type === "income")) === null || _a === void 0 ? void 0 : _a.reduce((acc, total) => acc + Number(total.amount), 0),
            expenses: (_b = transactions === null || transactions === void 0 ? void 0 : transactions.filter(transaction => transaction.type === "expense")) === null || _b === void 0 ? void 0 : _b.reduce((acc, total) => acc + Number(total.amount), 0),
        };
        return allTransactions;
    }
}
//# sourceMappingURL=transactionSummary.js.map