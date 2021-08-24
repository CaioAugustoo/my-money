import { STORAGE_KEY } from "../../constants/index.js";
export function saveItemInStorage(value) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
}
export function getItemFromStorage() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY));
}
//# sourceMappingURL=index.js.map