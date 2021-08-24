import {
  ACTIVE_CLASSNAME,
  BODY_LOCKED_CLASSNAME,
} from "../../constants/index.js";
import { ITransaction } from "./transactions.js";

export class TransactionDetails {
  private readonly _wrapper: HTMLElement;

  constructor() {
    this._wrapper = document.querySelector("#transaction-detail");
  }

  private showData(id: string, data: ITransaction[]): void {
    const item = data.find(transaction => transaction.id === Number(id));
    console.log(item);
  }

  public open(id: string, data: ITransaction[]): void {
    this._wrapper.classList.add(ACTIVE_CLASSNAME);
    this._wrapper.parentElement.classList.add(ACTIVE_CLASSNAME);
    document.body.classList.add(BODY_LOCKED_CLASSNAME);

    this.showData(id, data);
  }
}
