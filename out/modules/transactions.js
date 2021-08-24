import { getItemFromStorage, saveItemInStorage, } from "../utils/localStorage/index.js";
import { Modal } from "./modal.js";
import { createTransactionModel } from "./transactionModel.js";
export class Transactions {
    constructor() {
        this.transactions = [];
        this._transactionsWrapper = document.querySelector("#data-table tbody");
        this.list();
        this.renderDom();
    }
    create(data) {
        const modal = new Modal();
        this.transactions.push(data);
        this.addToDom(data);
        saveItemInStorage(this.transactions);
        modal.close();
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
        return itensFromStorage;
    }
}
//# sourceMappingURL=transactions.js.map