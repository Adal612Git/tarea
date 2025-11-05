import { AccountService } from './AccountService';
import { TransactionService } from './TransactionService';
import { NotificationService } from './NotificationService';

export class BankingService {
  private accountService: AccountService | null;
  private transactionService: TransactionService | null;
  private notificationService: NotificationService | null;

  constructor(
    accountService?: AccountService | null,
    transactionService?: TransactionService | null,
    notificationService?: NotificationService | null
  ) {
    this.accountService = accountService ?? null;
    this.transactionService = transactionService ?? null;
    this.notificationService = notificationService ?? null;
  }

  setAccountService(accountService: AccountService): void {
    this.accountService = accountService;
  }

  setTransactionService(transactionService: TransactionService): void {
    this.transactionService = transactionService;
  }

  setNotificationService(notificationService: NotificationService): void {
    this.notificationService = notificationService;
  }

  processTransaction(accountId: string, amount: number): void {
    if (!this.accountService || !this.transactionService || !this.notificationService) {
      throw new Error('BankingService dependencies are not fully configured.');
    }

    if (this.accountService.isAccountActive(accountId)) {
      this.transactionService.executeTransaction(accountId, amount);
      this.notificationService.sendNotification(accountId, 'Transaction completed');
    }
  }
}
