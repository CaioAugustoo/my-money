import { formatPrice } from "../../utils/formatters/price.js";
import { ITransaction } from "./transactions.js";

interface IListAll {
  income: number;
  expenses: number;
}

export class TransactionSummary {
  private readonly _incomeCard: HTMLParagraphElement;
  private readonly _expenseCard: HTMLParagraphElement;
  private readonly _totalCard: HTMLParagraphElement;

  constructor() {
    this._expenseCard = document.querySelector("#expenseDisplay");
    this._incomeCard = document.querySelector("#incomeDisplay");
    this._totalCard = document.querySelector("#totalDisplay");
  }

  public showValues(transactions: ITransaction[]): void {
    const { income, expenses } = this.listAll(transactions);
    const total = income - expenses;

    this._expenseCard.innerText = formatPrice(expenses);
    this._incomeCard.innerText = formatPrice(income);
    this._totalCard.innerText = formatPrice(total);
  }

  private listAll(transactions: ITransaction[]): IListAll {
    const allTransactions = {
      income: transactions
        ?.filter(transaction => transaction.type === "income")
        ?.reduce((acc, total) => acc + Number(total.amount), 0),
      expenses: transactions
        ?.filter(transaction => transaction.type === "expense")
        ?.reduce((acc, total) => acc + Number(total.amount), 0),
    };

    return allTransactions;
  }
}
