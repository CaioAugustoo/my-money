import { ACTIVE_CLASSNAME } from "../../constants/index.js";
import { Modal } from "../modal.js";
import { Transactions } from "./index.js";

export const transaction = new Transactions();

export class NewTransaction extends Modal {
  private readonly _titleField: HTMLInputElement;
  private readonly _descriptionField: HTMLInputElement;
  private readonly _amountField: HTMLInputElement;
  private readonly _typeFields: NodeListOf<HTMLAnchorElement>;

  private _type: string = "income";

  constructor() {
    super();

    this._titleField = document.querySelector("#title");
    this._descriptionField = document.querySelector("#description");
    this._amountField = document.querySelector("#amount");
    this._typeFields = document.querySelectorAll(".input-group [data-option]");

    this.typeEvent();
  }

  private clearFields(): void {
    this._titleField.value = "";
    this._descriptionField.value = "";
    this._amountField.value = "";
  }

  private handleChangeType(event: Event, index: number): void {
    event.preventDefault();
    const selectedOption = event.currentTarget as HTMLElement;

    this._typeFields.forEach(field => field.classList.remove(ACTIVE_CLASSNAME));
    this._typeFields[index].classList.add(ACTIVE_CLASSNAME);
    this._type = selectedOption.dataset.option;
  }

  protected handleSubmit(event: Event): void {
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

  private typeEvent() {
    this._typeFields.forEach((field, index) =>
      field.addEventListener("click", event =>
        this.handleChangeType(event, index)
      )
    );
  }
}
