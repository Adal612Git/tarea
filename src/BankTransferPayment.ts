import { Payment } from "./Payment";
console.log(">>> DEBUG BankTransferPayment file loaded <<<");

export class BankTransferPayment implements Payment {
  private accountNumber: string;
  private bankName: string;

  constructor(accountNumber: string, bankName: string) {
    this.accountNumber = accountNumber;
    this.bankName = bankName;
  }

  public execute(): void {
    console.log("Method: Bank Transfer");
    console.log("Bank: " + this.bankName + ", Account Number: " + this.accountNumber);
  }
}
