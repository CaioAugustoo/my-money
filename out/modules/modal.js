import { ACTIVE_CLASSNAME } from "../constants/index.js";
export class Modal {
    constructor() {
        this._wrapper = document.querySelector(".modal-overlay");
        this._openButton = document.querySelector(".new");
        this._cancelButton = document.querySelector(".cancel");
        this._form = document.querySelector("#form");
        this.bindEvents();
        this.events();
    }
    handleSubmit(_) { }
    handleClickOutside(event) {
        if (event.target === this._wrapper) {
            this.close();
        }
    }
    open(event) {
        event.preventDefault();
        this._wrapper.classList.add(ACTIVE_CLASSNAME);
    }
    close() {
        this._wrapper.classList.remove(ACTIVE_CLASSNAME);
    }
    events() {
        this._openButton.addEventListener("click", event => this.open(event));
        this._cancelButton.addEventListener("click", this.close);
        this._form.addEventListener("submit", event => this.handleSubmit(event));
        document.addEventListener("click", event => this.handleClickOutside(event));
    }
    bindEvents() {
        this.close = this.close.bind(this);
    }
}
//# sourceMappingURL=modal.js.map