import { Modal } from "./modal.js";
import { Transactions } from "./transactions.js";
const transaction = new Transactions();
export class NewTransaction extends Modal {
    constructor() {
        super();
        this._descriptionField = document.querySelector("#description");
        this._amountField = document.querySelector("#amount");
    }
    clearFields() {
        this._descriptionField.value = "";
        this._amountField.value = "";
    }
    handleSubmit(event) {
        event.preventDefault();
        transaction.create({
            id: new Date().getTime(),
            description: this._descriptionField.value,
            amount: Number(this._amountField.value),
            date: new Date().getTime(),
        });
        this.clearFields();
    }
}
//# sourceMappingURL=newTransaction.js.map