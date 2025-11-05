"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CreditCardPayment_1 = require("./CreditCardPayment");
const PaypalPayment_1 = require("./PaypalPayment");
const PaymentProcessor_1 = require("./PaymentProcessor");
const credit = new PaymentProcessor_1.PaymentProcessor(new CreditCardPayment_1.CreditCardPayment());
credit.process(100);
const paypal = new PaymentProcessor_1.PaymentProcessor(new PaypalPayment_1.PaypalPayment());
paypal.process(200);
