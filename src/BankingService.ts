import { DefaultAccountService } from './DefaultAccountService';
import { DefaultTransactionService } from './DefaultTransactionService';
import { DefaultNotificationService } from './DefaultNotificationService';

export class BankingService {
  private accountService: DefaultAccountService;
  private transactionService: DefaultTransactionService;
  private notificationService: DefaultNotificationService;

  constructor() {
    this.accountService = new DefaultAccountService();
    this.transactionService = new DefaultTransactionService();
    this.notificationService = new DefaultNotificationService();
  }

  processTransaction(accountId: string, amount: number) {
    if (this.accountService.isAccountActive(accountId)) {
      this.transactionService.executeTransaction(accountId, amount);
      this.notificationService.sendNotification(accountId, 'Transaction completed');
    }
  }
}
