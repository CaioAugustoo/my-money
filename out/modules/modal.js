import { ACTIVE_CLASSNAME } from "../constants/index.js";
import { outsideClick } from "./outsideClick.js";
export class Modal {
    constructor() {
        this._wrapper = document.querySelector(".modal-overlay");
        this._openButton = document.querySelector(".new");
        this._form = document.querySelector("#form");
        this.bindEvents();
        this.events();
    }
    handleSubmit(_) { }
    handleOutsideClick(event) {
        outsideClick(event, this._wrapper, this.close);
    }
    open(event) {
        event.preventDefault();
        this._wrapper.classList.add(ACTIVE_CLASSNAME);
    }
    handleKeyUp(event) {
        if (event.key === "Escape") {
            this.close();
        }
    }
    close() {
        this._wrapper.classList.remove(ACTIVE_CLASSNAME);
    }
    events() {
        this._openButton.addEventListener("click", event => this.open(event));
        this._form.addEventListener("submit", event => this.handleSubmit(event));
        document.documentElement.addEventListener("click", event => this.handleOutsideClick(event));
        window.addEventListener("keyup", this.handleKeyUp);
    }
    bindEvents() {
        this.close = this.close.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
    }
}
//# sourceMappingURL=modal.js.map