# Payment Processing System: Applying the OCP

The goal of this task is to assess your understanding of and ability to apply the OCP in TypeScript.

Duration: *45 minutes*

## Description

You are provided with TypeScript code representing a simple payment processing system. The system currently supports only credit card and PayPal payments.

The code violates the OCP as it is not open for extension (to support new payment methods) without modification. The `PaymentProcessor` class should not have to be modified every time a new payment method is added.

Refactor the code to adhere to the OCP and add support for bank transfer payments.

## Requirements

1) Introduce the `Payment` interface with the public abstract method `execute()` and implement it in the `CreditCardPayment` and `PaypalPayment` classes. The `PaymentProcessor` class should depend on the `Payment` interface, not the specific payment classes.

2) Implement a new `BankTransferPayment` class that also implements the `Payment` interface. This should not require modifying the `PaymentProcessor` class.

3) After refactoring, the code should still perform its original function. It should correctly process credit card, PayPal, and bank transfer payments.

## Examples

Below is an example of a code violation and how it could be refactored.

Violation:
In the `PaymentProcessor` class, the `processPayment` method only supports credit card payments. This violates the OCP.

Original code:

```typescript
class PaymentProcessor {
  processPayment(payment: object) {
    // ...

    // Process credit card payment
    if (payment instanceof CreditCardPayment) {
      payment.executeCreditCardPayment();
    }

    // ...
  }
}
```

Refactoring:
Introduce a `Payment` interface and implement it in the `CreditCardPayment` class. The `PaymentProcessor` class should depend on the `Payment` interface, not the `CreditCardPayment` class.

Refactored code:

```typescript
interface Payment {
  execute(): void;
}

class CreditCardPayment implements Payment {
  // Other attributes, constructor, getters and setters omitted for brevity

  public execute() {
    // Execute payment
  }
}

class PaymentProcessor {
  processPayment(payment: Payment) {
    console.log('Processing payment...');

    payment.execute();

    console.log("Done.");
  }
}
```

Below is an example of how the payment processing system should work after refactoring:

```typescript
const creditCardPayment = new CreditCardPayment('1234567812345678', 'John Doe', 12, 2023, 123);
const paypalPayment = new PaypalPayment('johndoe@example.com', 'password');
const bankTransferPayment = new BankTransferPayment('1234567890', 'JPMorgan Chase');
const processor = new PaymentProcessor();

processor.processPayment(creditCardPayment);
processor.processPayment(paypalPayment);
processor.processPayment(bankTransferPayment);
```

A sample output is shown below:

```text
Processing payment...
Method: Credit Card
Card number: 1234567812345678
Done.
Processing payment...
Method: PayPal
Email: johndoe@example.com
Done.
Processing payment...
Method: Bank Transfer
Bank: JPMorgan Chase, Account Number: 1234567890
Done.
```

This is an example of a class diagram after refactoring:

![This image can be found in the project repository. File: diagram.png](diagram.png)
