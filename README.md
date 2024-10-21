# A Banking Application: Applying the Principles of IoC and DI

The goal of this task is to give you some practice applying the principles of IoC and DI to TypeScript programming to make code more modular, testable, and maintainable.

Duration: *45 minutes*

## Description

You are provided with TypeScript code representing a simple banking application.

The provided code contains the `BankingService` class, which directly creates instances of `DefaultAccountService`, `DefaultTransactionService`, and `DefaultNotificationService`. This violates the principles of IoC and DI, as the `BankingService` class is tightly coupled to these services.

Refactor the code to decouple the dependencies and inject them via constructors and setters. Use interfaces to allow for different implementations of the services, enhancing flexibility and testability.

## Requirements

1. Locate where the `BankingService` class is directly instantiating its dependencies.
2. Create the following interfaces: `AccountService`, `TransactionService`, and `NotificationService`. Implement them in the classes `DefaultAccountService`, `DefaultTransactionService`, and `DefaultNotificationService`, respectively. By using interfaces, the `BankingService` class will depend on abstractions rather than concrete implementations. This allows for different implementations to be injected, thus shifting the responsibility of deciding which specific implementation to use from the `BankingService` class to an external entity.
3. Modify the `BankingService` class to accept instances of these interfaces through its constructor. This IoC allows the caller to provide the necessary dependencies.
4. Add setter methods to the `BankingService` class to provide flexibility in changing dependencies after an object has been created.
5. Create specific implementations of the `NotificationService` interface, such as `SmsNotificationService` and `EmailNotificationService`.
6. After refactoring, the code should still perform its original function. That is, the banking service should correctly handle the account, transaction, and notification services.

## Examples

Below is an example of a code violation and how it could be refactored.

Violation:
The `BankingService` class directly creates instances of `DefaultAccountService`, `DefaultTransactionService`, and `DefaultNotificationService`. This violates the principles of IoC and DI, as the `BankingService` class is tightly coupled to these services.

Original code:

```typescript
class BankingService {
  // ...

  constructor() {
    accountService = new DefaultAccountService();
    transactionService = new DefaultTransactionService();
    notificationService = new DefaultNotificationService();
  }

  // ...
}
```

Refactoring:
Create interfaces and implement them in the appropriate classes. Modify the `BankingService` class to accept instances of these interfaces through its constructor and setter methods.

Refactored code:

```typescript
class BankingService {
  // ...

  constructor(
    accountService: AccountService,
    transactionService: TransactionService,
    totificationService: NotificationService
  ) {
    // ...
  }

  setAccountService(accountService: AccountService) {
    // ...
  }

  setTransactionService(transactionService: TransactionService) {
    // ...
  }

  setNotificationService(notificationService: NotificationService) {
    // ...
  }

  //...
}
```

Below is an example of how the banking service should work after refactoring and updating:

```typescript
// Using constructor injection
const accountService: AccountService = new DefaultAccountService();
const transactionService: TransactionService = new DefaultTransactionService();
const notificationService: NotificationService = new DefaultNotificationService();
let bankingService: BankingService = new BankingService(accountService, transactionService, notificationService);

bankingService.processTransaction('12345', 100);

// Using setter injection
bankingService = new BankingService(null, null, null);

bankingService.setAccountService(new DefaultAccountService());
bankingService.setTransactionService(new DefaultTransactionService());
bankingService.setNotificationService(new SmsNotificationService());
bankingService.processTransaction('67890', 200);

bankingService.setNotificationService(new EmailNotificationService());
bankingService.processTransaction('67890', 300);
```

A sample output is shown below:

```txt
Sending transaction for 100 to 12345
Sending notification to 12345: Transaction completed
Sending transaction for 200 to 67890
Sending sms to 67890: Transaction completed
Sending transaction for 300 to 67890
Sending email to 67890: Transaction completed
```

Below is an example of a class diagram after refactoring:

![This image can be found in the project repository. File: diagram.png](diagram.png)
