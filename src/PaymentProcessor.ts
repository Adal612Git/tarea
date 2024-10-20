import { CreditCardPayment } from './CreditCardPayment';
import { PaypalPayment } from './PaypalPayment';

export class PaymentProcessor {
  processPayment(payment: object) {
    console.log('Processing payment...');

    if (payment instanceof CreditCardPayment) {
      payment.executeCreditCardPayment();
    } else if (payment instanceof PaypalPayment) {
      payment.executePaypalPayment();
    }

    console.log('Done.');
  }
}
