export class PaymentProcessor {
    payment;
    constructor(payment) {
        this.payment = payment;
    }
    process(amount) {
        this.payment.pay(amount);
    }
}
