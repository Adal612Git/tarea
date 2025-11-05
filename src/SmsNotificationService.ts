import { NotificationService } from './NotificationService';

export class SmsNotificationService implements NotificationService {
  sendNotification(accountId: string, message: string): void {
    console.log(`Sending sms to ${accountId}: ${message}`);
  }
}
