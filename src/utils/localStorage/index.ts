import { STORAGE_KEY } from "../../constants/index.js";
import { ITransaction } from "../../modules/transactions.js";

export function saveItemInStorage(value: ITransaction[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
}

export function getItemFromStorage(): ITransaction[] | null {
  return JSON.parse(localStorage.getItem(STORAGE_KEY));
}
