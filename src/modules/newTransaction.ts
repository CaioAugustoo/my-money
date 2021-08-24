import { Modal } from "./modal.js";
import { Transactions } from "./transactions.js";

const transaction = new Transactions();

export class NewTransaction extends Modal {
  private readonly _descriptionField: HTMLInputElement;
  private readonly _amountField: HTMLInputElement;

  constructor() {
    super();

    this._descriptionField = document.querySelector("#description");
    this._amountField = document.querySelector("#amount");
  }

  private clearFields() {
    this._descriptionField.value = "";
    this._amountField.value = "";
  }

  handleSubmit(event: Event) {
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
