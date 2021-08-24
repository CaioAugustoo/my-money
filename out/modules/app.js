import { NewTransaction, transaction } from "./transactions/newTransaction.js";
import { TransactionSummary as Summary } from "./transactions/transactionsSummary.js";
new NewTransaction();
new Summary().showValues(transaction.transactions);
//# sourceMappingURL=app.js.map