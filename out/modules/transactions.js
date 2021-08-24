import { getItemFromStorage, saveItemInStorage, } from "../utils/localStorage/index.js";
import { Modal } from "./modal.js";
import { createTransactionModel } from "./transactionModel.js";
const modal = new Modal();
export class Transactions {
    constructor() {
        this._transactions = [];
        this._transactionsWrapper = document.querySelector("#data-table tbody");
        this.list();
        this.renderDom();
    }
    saveInStorage() {
        saveItemInStorage(this._transactions);
    }
    create(data) {
        this._transactions.push(data);
        this.saveInStorage();
        this.addToDom(data);
        modal.close();
    }
    addToDom(transaction) {
        const createdTransaction = createTransactionModel(transaction);
        this._transactionsWrapper.innerHTML += createdTransaction;
    }
    renderDom() {
        this._transactions.forEach(transaction => this.addToDom(transaction));
    }
    list() {
        const itensFromStorage = getItemFromStorage() || [];
        this._transactions = itensFromStorage;
        return itensFromStorage;
    }
}
//# sourceMappingURL=transactions.js.map