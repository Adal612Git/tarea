import { Payment } from './Payment';

export class PaypalPayment implements Payment {
  private email: string;
  private password: string;

  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
  }

  public execute(): void {
    console.log('Method: PayPal');
    console.log(`Email: ${this.email}`);
  }
}
