import {
  getItemFromStorage,
  saveItemInStorage,
} from "../utils/localStorage/index.js";
import { Modal } from "./modal.js";

import { createTransactionModel } from "./transactionModel.js";

export interface ITransaction {
  id: string | number;
  description: string;
  amount: number;
  date: number;
}

const modal = new Modal();

export class Transactions {
  private readonly _transactionsWrapper: HTMLDivElement;
  private _transactions: ITransaction[] = [];

  constructor() {
    this._transactionsWrapper = document.querySelector("#data-table tbody");

    this.list();
    this.renderDom();
  }

  private saveInStorage(): void {
    saveItemInStorage(this._transactions);
  }

  public create(data: ITransaction): void {
    this._transactions.push(data);
    this.saveInStorage();
    this.addToDom(data);

    modal.close();
  }

  private addToDom(transaction: ITransaction): void {
    const createdTransaction = createTransactionModel(transaction);
    this._transactionsWrapper.innerHTML += createdTransaction;
  }

  private renderDom(): void {
    this._transactions.forEach(transaction => this.addToDom(transaction));
  }

  private list(): ITransaction[] {
    const itensFromStorage = getItemFromStorage() || [];

    this._transactions = itensFromStorage;

    return itensFromStorage;
  }
}
