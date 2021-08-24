import { getItemFromStorage, saveItemInStorage, } from "../../utils/localStorage/index.js";
import { Modal } from "./../modal.js";
import { TransactionDetails } from "./transactionDetails.js";
import { createTransactionModel } from "./transactionModel.js";
import { TransactionSummary } from "./transactionsSummary.js";
const modal = new Modal();
const summary = new TransactionSummary();
const transactionDetails = new TransactionDetails();
export class Transactions {
    constructor() {
        this.transactions = [];
        this._transactionsWrapper = document.querySelector("#data-table tbody");
        this.list();
        this.renderDom();
        this.bindEvents();
        this.events();
    }
    openDetails(id) {
        transactionDetails.open(id, this.transactions);
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
    }
    list() {
        const itensFromStorage = getItemFromStorage() || [];
        this.transactions = itensFromStorage;
        return this.transactions;
    }
    bindEvents() {
        this.openDetails = this.openDetails.bind(this);
    }
    events() {
        const transactionsElement = this._transactionsWrapper.querySelectorAll("tr");
        transactionsElement.forEach(transaction => transaction.addEventListener("click", () => this.openDetails(transaction.getAttribute("data-id"))));
    }
}
//# sourceMappingURL=transactions.js.map