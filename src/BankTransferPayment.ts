import { Payment } from "./Payment";

export class BankTransferPayment implements Payment {
    constructor(public accountNumber: string, public bankName: string) {}
    
  

  public execute(): void {
    console.log("Method: Bank Transfer");
    console.log("Bank: " + this.bankName + ", Account Number: " + this.accountNumber);
  }
}
