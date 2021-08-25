import {
  ACTIVE_CLASSNAME,
  BODY_LOCKED_CLASSNAME,
} from "../../constants/index.js";
import { outsideClick } from "../outsideClick.js";
import { ITransaction } from "./transactions.js";

export class TransactionDetails {
  private readonly _wrapper: HTMLElement;

  constructor() {
    this._wrapper = document.querySelector("#transaction-detail");

    this.bindEvents();
    this.events();
  }

  private showData(id: string, data: ITransaction[]): void {
    data.find(transaction => transaction.id === Number(id));
  }

  private handleOutsideClick(event: MouseEvent): void {
    outsideClick(event, this._wrapper.parentElement, this.close);
  }

  public open(id: string, data: ITransaction[]): void {
    this._wrapper.classList.add(ACTIVE_CLASSNAME);
    this._wrapper.parentElement.classList.add(ACTIVE_CLASSNAME);
    document.body.classList.add(BODY_LOCKED_CLASSNAME);

    this.showData(id, data);
  }

  private close(): void {
    this._wrapper.classList.remove(ACTIVE_CLASSNAME);
    this._wrapper.parentElement.classList.remove(ACTIVE_CLASSNAME);
    document.body.classList.remove(BODY_LOCKED_CLASSNAME);
  }

  private bindEvents(): void {
    this.close = this.close.bind(this);
  }

  private events(): void {
    document.documentElement.addEventListener("click", event =>
      this.handleOutsideClick(event)
    );
  }
}
