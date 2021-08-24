import { ACTIVE_CLASSNAME } from "../constants/index.js";

export class Modal {
  private readonly _wrapper: HTMLDivElement;
  private readonly _openButton: HTMLLinkElement;
  private readonly _cancelButton: HTMLLinkElement;
  private readonly _form: HTMLFormElement;

  constructor() {
    this._wrapper = document.querySelector(".modal-overlay") as HTMLDivElement;
    this._openButton = document.querySelector(".new") as HTMLLinkElement;
    this._cancelButton = document.querySelector(".cancel") as HTMLLinkElement;
    this._form = document.querySelector("#form") as HTMLFormElement;

    this.bindEvents();
    this.events();
  }

  protected handleSubmit(_: Event): void {}

  private handleClickOutside(event: Event) {
    if (event.target === this._wrapper) {
      this.close();
    }
  }

  private open(event: Event): void {
    event.preventDefault();
    this._wrapper.classList.add(ACTIVE_CLASSNAME);
  }

  public close(): void {
    this._wrapper.classList.remove(ACTIVE_CLASSNAME);
  }

  private events(): void {
    this._openButton.addEventListener("click", event => this.open(event));
    this._cancelButton.addEventListener("click", this.close);
    this._form.addEventListener("submit", event => this.handleSubmit(event));
    document.addEventListener("click", event => this.handleClickOutside(event));
  }

  private bindEvents(): void {
    this.close = this.close.bind(this);
  }
}
