import { NotificationService } from './NotificationService';

export class EmailNotificationService implements NotificationService {
  sendNotification(accountId: string, message: string): void {
    console.log(`Sending email to ${accountId}: ${message}`);
  }
}
