import { Payment } from "./Payment";

export class PaymentProcessor {
  processPayment(payment: Payment): void {
    payment.execute();
  }
}
