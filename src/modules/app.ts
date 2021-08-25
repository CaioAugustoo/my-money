import { NewTransaction, transaction } from "../modules/transactions/new.js";
import { TransactionSummary } from "../modules/transactions/summary.js";

new NewTransaction();
new TransactionSummary().showValues(transaction.transactions);
