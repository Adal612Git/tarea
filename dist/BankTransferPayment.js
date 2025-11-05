"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankTransferPayment = void 0;
console.log(">>> DEBUG BankTransferPayment file loaded <<<");
class BankTransferPayment {
    accountNumber;
    bankName;
    constructor(accountNumber, bankName) {
        this.accountNumber = accountNumber;
        this.bankName = bankName;
    }
    execute() {
        console.log("Method: Bank Transfer");
        console.log("Bank: " + this.bankName + ", Account Number: " + this.accountNumber);
    }
}
exports.BankTransferPayment = BankTransferPayment;
