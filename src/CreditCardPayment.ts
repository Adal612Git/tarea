import { Payment } from "./Payment";

export class CreditCardPayment implements Payment {
  constructor(
    private cardNumber: string,
    private cardHolder: string,
    private expiryMonth: number,
    private expiryYear: number,
    private cvv: number
  ) {}

  execute(): void {
    console.log("Processing payment...");
    console.log("Method: Credit Card");
    console.log(`Card number: ${this.cardNumber}`);
    console.log("Done.");
  }
}
