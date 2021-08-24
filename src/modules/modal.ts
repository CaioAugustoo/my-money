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

  private open(event: Event) {
    event.preventDefault();
    this._wrapper.classList.add(ACTIVE_CLASSNAME);
  }

  public close() {
    this._wrapper.classList.remove(ACTIVE_CLASSNAME);
  }

  private events() {
    this._openButton.addEventListener("click", event => this.open(event));
    this._cancelButton.addEventListener("click", this.close);
    this._form.addEventListener("submit", event => this.handleSubmit(event));
  }

  private bindEvents() {
    this.close = this.close.bind(this);
  }
}
