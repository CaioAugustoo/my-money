import { ACTIVE_CLASSNAME, BODY_LOCKED_CLASSNAME } from "../constants/index.js";
import { outsideClick } from "./outsideClick.js";
export class Modal {
    constructor() {
        this._wrapper = document.querySelector(".modal-overlay");
        this._openButton = document.querySelector(".new");
        this._form = document.querySelector("#form");
    }
    handleSubmit(_) { }
    handleOutsideClick(event) {
        outsideClick(event, this._wrapper, this.close);
    }
    open(event) {
        event.preventDefault();
        this._wrapper.classList.add(ACTIVE_CLASSNAME);
        document.body.classList.add(BODY_LOCKED_CLASSNAME);
        window.addEventListener("keyup", this.handleKeyUp);
        window.addEventListener("click", this.handleOutsideClick);
    }
    handleKeyUp(event) {
        if (event.key === "Escape") {
            this.close();
        }
    }
    close() {
        this._wrapper.classList.remove(ACTIVE_CLASSNAME);
        document.body.classList.remove(BODY_LOCKED_CLASSNAME);
        window.removeEventListener("keyup", this.handleKeyUp);
        window.removeEventListener("click", this.handleOutsideClick);
    }
    events() {
        this._openButton.addEventListener("click", event => this.open(event));
        this._form.addEventListener("submit", event => this.handleSubmit(event));
    }
    bindEvents() {
        this.close = this.close.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
        this.handleOutsideClick = this.handleOutsideClick.bind(this);
    }
}
//# sourceMappingURL=modal.js.map