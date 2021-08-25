import { ACTIVE_CLASSNAME, BODY_LOCKED_CLASSNAME, } from "../../constants/index.js";
import { outsideClick } from "../outsideClick.js";
export class TransactionDetails {
    constructor() {
        this._wrapper = document.querySelector("#transaction-detail");
        this.bindEvents();
        this.events();
    }
    showData(id, data) {
        data.find(transaction => transaction.id === Number(id));
    }
    handleOutsideClick(event) {
        outsideClick(event, this._wrapper.parentElement, this.close);
    }
    open(id, data) {
        this._wrapper.classList.add(ACTIVE_CLASSNAME);
        this._wrapper.parentElement.classList.add(ACTIVE_CLASSNAME);
        document.body.classList.add(BODY_LOCKED_CLASSNAME);
        this.showData(id, data);
    }
    close() {
        this._wrapper.classList.remove(ACTIVE_CLASSNAME);
        this._wrapper.parentElement.classList.remove(ACTIVE_CLASSNAME);
        document.body.classList.remove(BODY_LOCKED_CLASSNAME);
    }
    bindEvents() {
        this.close = this.close.bind(this);
    }
    events() {
        document.documentElement.addEventListener("click", event => this.handleOutsideClick(event));
    }
}
//# sourceMappingURL=transactionDetails.js.map