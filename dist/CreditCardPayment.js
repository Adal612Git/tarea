"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreditCardPayment = void 0;
class CreditCardPayment {
    cardNumber;
    cardHolder;
    expiryMonth;
    expiryYear;
    cvv;
    constructor(cardNumber, cardHolder, expiryMonth, expiryYear, cvv) {
        this.cardNumber = cardNumber;
        this.cardHolder = cardHolder;
        this.expiryMonth = expiryMonth;
        this.expiryYear = expiryYear;
        this.cvv = cvv;
    }
    execute() {
        console.log("Method: Credit Card");
        console.log(`Card number: ${this.cardNumber}`);
    }
}
exports.CreditCardPayment = CreditCardPayment;
