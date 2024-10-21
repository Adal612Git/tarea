export class DefaultTransactionService {
  executeTransaction(accountId: string, amount: number) {
    console.log(`Sending transaction for ${amount} to ${accountId}`);
  }
}
