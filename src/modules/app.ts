import { NewTransaction, transaction } from "./newTransaction.js";
import { TransactionSummary as Summary } from "./transactionsSummary.js";

new NewTransaction();
new Summary().showValues(transaction.transactions);
