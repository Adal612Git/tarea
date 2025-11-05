"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaypalPayment = void 0;
class PaypalPayment {
    email;
    password;
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }
    execute() {
        console.log("Method: PayPal");
        console.log(`Email: ${this.email}`);
    }
}
exports.PaypalPayment = PaypalPayment;
