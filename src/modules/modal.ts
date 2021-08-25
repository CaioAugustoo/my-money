import { ACTIVE_CLASSNAME } from "../constants/index.js";
import { outsideClick } from "./outsideClick.js";

export class Modal {
  private readonly _wrapper: HTMLDivElement;
  private readonly _openButton: HTMLLinkElement;
  private readonly _closeButton: HTMLImageElement;
  private readonly _form: HTMLFormElement;

  constructor() {
    this._wrapper = document.querySelector(".modal-overlay") as HTMLDivElement;
    this._openButton = document.querySelector(".new") as HTMLLinkElement;
    this._closeButton = document.querySelector(".close") as HTMLImageElement;
    this._form = document.querySelector("#form") as HTMLFormElement;

    this.bindEvents();
    this.events();
  }

  protected handleSubmit(_: Event): void {}

  private handleOutsideClick(event: MouseEvent): void {
    outsideClick(event, this._wrapper, this.close);
  }

  private open(event: Event): void {
    event.preventDefault();
    this._wrapper.classList.add(ACTIVE_CLASSNAME);
  }

  private handleKeyUp(event: KeyboardEvent) {
    if (event.key === "Escape") {
      this.close();
    }
  }

  public close(): void {
    this._wrapper.classList.remove(ACTIVE_CLASSNAME);
  }

  protected events(): void {
    this._openButton.addEventListener("click", event => this.open(event));
    this._form.addEventListener("submit", event => this.handleSubmit(event));
    this._closeButton.addEventListener("click", this.close);

    document.documentElement.addEventListener("click", event =>
      this.handleOutsideClick(event)
    );
    window.addEventListener("keyup", this.handleKeyUp);
  }

  protected bindEvents(): void {
    this.close = this.close.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }
}
