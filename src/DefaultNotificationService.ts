export class DefaultNotificationService {
  sendNotification(accountId: string, message: string) {
    console.log(`Sending notification to ${accountId}: ${message}`);
  }
}
