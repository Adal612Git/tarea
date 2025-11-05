export interface NotificationService {
  sendNotification(accountId: string, message: string): void;
}
