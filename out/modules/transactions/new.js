import { ACTIVE_CLASSNAME } from "../../constants/index.js";
import { Modal } from "../modal.js";
import { Transactions } from "./index.js";
export const transaction = new Transactions();
export class NewTransaction extends Modal {
    constructor() {
        super();
        this._type = "income";
        this._titleField = document.querySelector("#title");
        this._descriptionField = document.querySelector("#description");
        this._amountField = document.querySelector("#amount");
        this._typeFields = document.querySelectorAll(".input-group [data-option]");
        this.typeEvent();
    }
    clearFields() {
        this._titleField.value = "";
        this._descriptionField.value = "";
        this._amountField.value = "";
    }
    handleChangeType(event, index) {
        event.preventDefault();
        const selectedOption = event.currentTarget;
        this._typeFields.forEach(field => field.classList.remove(ACTIVE_CLASSNAME));
        this._typeFields[index].classList.add(ACTIVE_CLASSNAME);
        this._type = selectedOption.dataset.option;
    }
    handleSubmit(event) {
        event.preventDefault();
        transaction.create({
            title: this._titleField.value,
            id: new Date().getTime(),
            description: this._descriptionField.value,
            amount: Number(this._amountField.value),
            created_at: new Date().getTime(),
            type: this._type,
        });
        this.clearFields();
    }
    typeEvent() {
        this._typeFields.forEach((field, index) => field.addEventListener("click", event => this.handleChangeType(event, index)));
    }
}
//# sourceMappingURL=new.js.map