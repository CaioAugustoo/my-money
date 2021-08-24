import {
  getItemFromStorage,
  saveItemInStorage,
} from "../utils/localStorage/index.js";
import { Modal } from "./modal.js";

import { createTransactionModel } from "./transactionModel.js";
import { TransactionSummary } from "./transactionsSummary.js";

export interface ITransaction {
  title: string;
  id: string | number;
  description: string;
  amount: number;
  created_at: number;
  type: string;
}

const modal = new Modal();
const summary = new TransactionSummary();

export class Transactions {
  private readonly _transactionsWrapper: HTMLDivElement;
  private transactions: ITransaction[] = [];

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

  private renderDom(): void {
    this.transactions.forEach(transaction => this.addToDom(transaction));
  }

  public list(): ITransaction[] {
    const itensFromStorage = getItemFromStorage() || [];

    this.transactions = itensFromStorage;

    return this.transactions;
  }
}
