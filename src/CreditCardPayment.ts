export class CreditCardPayment {
  private cardNumber: string;
  private cardHolderName: string;
  private expiryMonth: number;
  private expiryYear: number;
  private cvv: number;

  constructor(cardNumber: string, cardHolderName: string, expiryMonth: number, expiryYear: number, cvv: number) {
    this.cardNumber = cardNumber;
    this.cardHolderName = cardHolderName;
    this.expiryMonth = expiryMonth;
    this.expiryYear = expiryYear;
    this.cvv = cvv;
  }

  executeCreditCardPayment(): void {
    console.log('Method: Credit Card');
    console.log(`Card number: ${this.cardNumber}`);
  }
}
