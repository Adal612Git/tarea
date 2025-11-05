import { Payment } from "./Payment";

export class PaypalPayment implements Payment {
  constructor(private email: string, private password: string) {}

  execute(): void {
    console.log("Processing payment...");
    console.log("Method: PayPal");
    console.log(`Email: ${this.email}`);
    console.log("Done.");
  }
}
