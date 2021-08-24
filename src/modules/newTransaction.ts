import { Modal } from "./modal.js";
import { Transactions } from "./transactions.js";

const transaction = new Transactions();

export class NewTransaction extends Modal {
  private readonly _titleField: HTMLInputElement;
  private readonly _descriptionField: HTMLInputElement;
  private readonly _amountField: HTMLInputElement;

  constructor() {
    super();

    this._titleField = document.querySelector("#title");
    this._descriptionField = document.querySelector("#description");
    this._amountField = document.querySelector("#amount");
  }

  private clearFields(): void {
    this._descriptionField.value = "";
    this._amountField.value = "";
  }

  protected handleSubmit(event: Event): void {
    event.preventDefault();

    transaction.create({
      title: this._titleField.value,
      id: new Date().getTime(),
      description: this._descriptionField.value,
      amount: Number(this._amountField.value),
      created_at: new Date().getTime(),
    });

    this.clearFields();
  }
}
