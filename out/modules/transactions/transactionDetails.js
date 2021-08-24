import { ACTIVE_CLASSNAME, BODY_LOCKED_CLASSNAME, } from "../../constants/index.js";
export class TransactionDetails {
    constructor() {
        this._wrapper = document.querySelector("#transaction-detail");
    }
    showData(id, data) {
        const item = data.find(transaction => transaction.id === Number(id));
        console.log(item);
    }
    open(id, data) {
        this._wrapper.classList.add(ACTIVE_CLASSNAME);
        this._wrapper.parentElement.classList.add(ACTIVE_CLASSNAME);
        document.body.classList.add(BODY_LOCKED_CLASSNAME);
        this.showData(id, data);
    }
}
//# sourceMappingURL=transactionDetails.js.map