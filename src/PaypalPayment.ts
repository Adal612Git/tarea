import { Payment } from "./Payment";

export class PaypalPayment implements Payment {
  pay(amount: number): void {
    console.log(`Paid ${amount} using PayPal.`);
  }
}
