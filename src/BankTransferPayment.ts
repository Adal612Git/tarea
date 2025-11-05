import { Payment } from "./Payment";

export class BankTransferPayment implements Payment {
  private _accountNumber: string;
  private _bankName: string;

  constructor(accountNumber: string, bankName: string) {
    this._accountNumber = accountNumber;
    this._bankName = bankName;
  }

  public execute(): void {
    console.log("Method: Bank Transfer");
    console.log(`Bank: ${this._bankName}, Account Number: ${this._accountNumber}`);
  }
}
