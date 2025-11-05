import { Payment } from "./Payment";

export class BankTransferPayment implements Payment {
  constructor(private accountNumber: string, private bankName: string) {}

  execute(): void {
    console.log("Processing payment...");
    console.log("Method: Bank Transfer");
    console.log(`Bank: ${this.bankName}, Account Number: ${this.accountNumber}`);
    console.log("Done.");
  }
}
