import { CreditCardPayment } from "./CreditCardPayment";
import { PaypalPayment } from "./PaypalPayment";
import { PaymentProcessor } from "./PaymentProcessor";
const credit = new PaymentProcessor(new CreditCardPayment());
credit.process(100);
const paypal = new PaymentProcessor(new PaypalPayment());
paypal.process(200);
