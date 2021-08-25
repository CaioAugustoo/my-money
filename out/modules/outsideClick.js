import { ACTIVE_CLASSNAME } from "../constants/index.js";
export function outsideClick(event, element, callback) {
    if (event.target === element) {
        element.classList.remove(ACTIVE_CLASSNAME);
        callback();
    }
}
//# sourceMappingURL=outsideClick.js.map