import { Payment } from "./Payment";

export class PaymentProcessor {
  constructor(private payment: Payment) {}

  process(amount: number): void {
    this.payment.pay(amount);
  }
}
