"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentProcessor = void 0;
class PaymentProcessor {
    processPayment(payment) {
        payment.execute();
    }
}
exports.PaymentProcessor = PaymentProcessor;
