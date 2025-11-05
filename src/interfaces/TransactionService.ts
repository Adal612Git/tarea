export interface TransactionService {
  executeTransaction(accountId: string, amount: number): void;
}
