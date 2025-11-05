"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentProcessor = void 0;
class PaymentProcessor {
    payment;
    constructor(payment) {
        this.payment = payment;
    }
    process(amount) {
        this.payment.pay(amount);
    }
}
exports.PaymentProcessor = PaymentProcessor;
