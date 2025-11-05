import { Payment } from './Payment';

export class PaymentProcessor {
  public processPayment(payment: Payment): void {
    console.log('Processing payment...');
    payment.execute();
    console.log('Done.');
  }
}
