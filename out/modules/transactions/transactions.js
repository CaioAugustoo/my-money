import { getItemFromStorage, saveItemInStorage, } from "../../utils/localStorage/index.js";
import { Modal } from "./../modal.js";
import { createTransactionModel } from "./transactionModel.js";
import { TransactionSummary } from "./transactionsSummary.js";
const modal = new Modal();
const summary = new TransactionSummary();
export class Transactions {
    constructor() {
        this.transactions = [];
        this._transactionsWrapper = document.querySelector("#data-table tbody");
        this.list();
        this.renderDom();
    }
    create(data) {
        this.transactions.push(data);
        this.addToDom(data);
        saveItemInStorage(this.transactions);
        modal.close();
        summary.showValues(this.transactions);
    }
    addToDom(transaction) {
        this._transactionsWrapper.insertAdjacentHTML("afterbegin", createTransactionModel(transaction));
    }
    renderDom() {
        this.transactions.forEach(transaction => this.addToDom(transaction));
        return this.transactions;
    }
    list() {
        const itensFromStorage = getItemFromStorage() || [];
        this.transactions = itensFromStorage;
        return this.transactions;
    }
}
//# sourceMappingURL=transactions.js.map