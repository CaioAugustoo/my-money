import { ACTIVE_CLASSNAME, BODY_LOCKED_CLASSNAME } from "../constants/index.js";
import { outsideClick } from "./outsideClick.js";

export class Modal {
  private readonly _wrapper: HTMLDivElement;
  private readonly _openButton: HTMLLinkElement;
  private readonly _form: HTMLFormElement;

  constructor() {
    this._wrapper = document.querySelector(".modal-overlay") as HTMLDivElement;
    this._openButton = document.querySelector(".new") as HTMLLinkElement;
    this._form = document.querySelector("#form") as HTMLFormElement;
  }

  protected handleSubmit(_: Event): void {}

  private handleOutsideClick(event: MouseEvent): void {
    outsideClick(event, this._wrapper, this.close);
  }

  private open(event: Event): void {
    event.preventDefault();

    this._wrapper.classList.add(ACTIVE_CLASSNAME);
    document.body.classList.add(BODY_LOCKED_CLASSNAME);

    window.addEventListener("keyup", this.handleKeyUp);
  }

  private handleKeyUp(event: KeyboardEvent) {
    if (event.key === "Escape") {
      this.close();
    }
  }

  public close(): void {
    this._wrapper.classList.remove(ACTIVE_CLASSNAME);
    document.body.classList.remove(BODY_LOCKED_CLASSNAME);

    window.removeEventListener("keyup", this.handleKeyUp);
  }

  protected events(): void {
    this._openButton.addEventListener("click", event => this.open(event));
    this._form.addEventListener("submit", event => this.handleSubmit(event));

    window.addEventListener("click", event => this.handleOutsideClick(event));
  }

  protected bindEvents(): void {
    this.close = this.close.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }
}
