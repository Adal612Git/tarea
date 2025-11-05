import { Payment } from "./Payment";

export class PaymentProcessor {
  public processPayment(payment: Payment): void {
    payment.execute();
  }
}
