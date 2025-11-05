import { Payment } from "./Payment";

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

  // ✅ Getters para los tests automáticos
  public getAccountNumber(): string {
    return this.accountNumber;
  }

  public getBankName(): string {
    return this.bankName;
  }
}
