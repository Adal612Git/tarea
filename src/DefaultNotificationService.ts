import { NotificationService } from './NotificationService';

export class DefaultNotificationService implements NotificationService {
  sendNotification(accountId: string, message: string): void {
    console.log(`Sending notification to ${accountId}: ${message}`);
  }
}
