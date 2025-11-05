import { TransactionService } from './TransactionService';

export class DefaultTransactionService implements TransactionService {
  executeTransaction(accountId: string, amount: number): void {
    console.log(`Sending transaction for ${amount} to ${accountId}`);
  }
}
