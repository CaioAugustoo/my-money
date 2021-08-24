import {
  getItemFromStorage,
  saveItemInStorage,
} from "../../utils/localStorage/index.js";
import { Modal } from "./../modal.js";
import { TransactionDetails } from "./transactionDetails.js";

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
const transactionDetails = new TransactionDetails();

export class Transactions {
  private readonly _transactionsWrapper: HTMLDivElement;
  public transactions: ITransaction[] = [];

  constructor() {
    this._transactionsWrapper = document.querySelector("#data-table tbody");

    this.list();
    this.renderDom();

    this.bindEvents();
    this.events();
  }

  private openDetails(id: string): void {
    transactionDetails.open(id, this.transactions);
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

  private list(): ITransaction[] {
    const itensFromStorage = getItemFromStorage() || [];

    this.transactions = itensFromStorage;

    return this.transactions;
  }

  private bindEvents(): void {
    this.openDetails = this.openDetails.bind(this);
  }

  private events(): void {
    const transactionsElement =
      this._transactionsWrapper.querySelectorAll("tr");

    transactionsElement.forEach(transaction =>
      transaction.addEventListener("click", () =>
        this.openDetails(transaction.getAttribute("data-id"))
      )
    );
  }
}
