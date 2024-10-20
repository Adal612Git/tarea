export class PaypalPayment {
  private email: string;
  private password: string;

  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
  }

  executePaypalPayment() {
    console.log('Method: PayPal');
    console.log(`Email: ${this.email}`);
  }
}
