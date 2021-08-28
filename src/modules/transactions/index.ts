import {
  getItemFromStorage,
  saveItemInStorage,
} from "../../utils/localStorage/index.js";
import { Modal } from "../modal.js";

import { createTransactionModel } from "./model.js";
import { TransactionSummary } from "./summary.js";

export interface ITransaction {
  title: string;
  description: string;
  amount: number;
  created_at: number;
  type: string;
}

const modal = new Modal();
const summary = new TransactionSummary();

export class Transactions {
  private readonly _transactionsWrapper: HTMLDivElement;
  public transactions: ITransaction[] = [];

  constructor() {
    this._transactionsWrapper = document.querySelector("#data-table tbody");

    this.list();
    this.renderDom();
  }

  public create(data: ITransaction): void {
    this.transactions.push(data);
    this.addToDom(data);

    saveItemInStorage(this.transactions);

    modal.close();
    summary.showValues(this.transactions);
  }

  private addToDom(transaction: ITransaction): void {
    this._transactionsWrapper.insertAdjacentHTML(
      "afterbegin",
      createTransactionModel(transaction)
    );
  }

  public renderDom(): ITransaction[] {
    this.transactions
      .sort((a, b) =>
        new Date(a.created_at) > new Date(b.created_at) ? 1 : -1
      )
      .forEach(transaction => this.addToDom(transaction));

    return this.transactions;
  }

  private list(): ITransaction[] {
    const itensFromStorage = getItemFromStorage() || [];

    this.transactions = itensFromStorage;

    return this.transactions;
  }
}
