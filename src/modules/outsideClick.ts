import { ACTIVE_CLASSNAME } from "../constants/index.js";

export function outsideClick(
  event: Event,
  element: HTMLElement,
  callback: CallableFunction
) {
  if (event.target === element) {
    element.classList.remove(ACTIVE_CLASSNAME);
    callback();
  }
}
