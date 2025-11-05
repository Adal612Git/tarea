import { CreditCardPayment } from "./CreditCardPayment";
import { PaypalPayment } from "./PaypalPayment";
import { BankTransferPayment } from "./BankTransferPayment";
import { PaymentProcessor } from "./PaymentProcessor";

const processor = new PaymentProcessor();

const credit = new CreditCardPayment("1234567812345678", "John Doe", 12, 2023, 123);
const paypal = new PaypalPayment("johndoe@example.com", "password");
const bank = new BankTransferPayment("1234567890", "JPMorgan Chase");

processor.processPayment(credit);
processor.processPayment(paypal);
processor.processPayment(bank);
