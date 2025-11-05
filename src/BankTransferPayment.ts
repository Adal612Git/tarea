import { Payment } from "./Payment";

export class BankTransferPayment implements Payment {
  public accountNumber: string;
  public bankName: string;

  constructor(accountNumber: string, bankName: string) {
    this.accountNumber = accountNumber;
    this.bankName = bankName;
  }

  public execute(): void {
    console.log("Method: Bank Transfer");
    console.log(`Bank: ${this.bankName}, Account Number: ${this.accountNumber}`);
  }
}
