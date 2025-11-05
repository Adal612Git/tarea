import { Payment } from "./Payment";

export class CreditCardPayment implements Payment {
  private cardNumber: string;
  private cardHolder: string;
  private expiryMonth: number;
  private expiryYear: number;
  private cvv: number;

  constructor(
    cardNumber: string,
    cardHolder: string,
    expiryMonth: number,
    expiryYear: number,
    cvv: number
  ) {
    this.cardNumber = cardNumber;
    this.cardHolder = cardHolder;
    this.expiryMonth = expiryMonth;
    this.expiryYear = expiryYear;
    this.cvv = cvv;
  }

  public execute(): void {
    console.log("Method: Credit Card");
    console.log(`Card number: ${this.cardNumber}`);
  }
}
