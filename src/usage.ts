import { CreditCardPayment } from './CreditCardPayment';
import { PaypalPayment } from './PaypalPayment';
import { PaymentProcessor } from './PaymentProcessor';

const creditCardPayment = new CreditCardPayment('1234567812345678', 'John Doe', 12, 2023, 123);
const paypalPayment = new PaypalPayment('johndoe@example.com', 'password');
const processor = new PaymentProcessor();

processor.processPayment(creditCardPayment);
processor.processPayment(paypalPayment);
