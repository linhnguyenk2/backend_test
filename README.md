## Description

This is test backend project

## Installation

 - Download and install Node.js from the official website

## Running the app

```bash
# development
$ npm run start
```

## Class Diagram

![ScreenShot](https://github.com/linhnguyenk2/backend_test/blob/main/class_diagram.png)

##  Explain the features

   1. User:

       - Attributes:
            - firstName and lastName: Represent the first name and last name of the user.
        - Methods:
            - getMoney(): number: An abstract method defining how to retrieve the user's money. Subclasses must implement this method.

    2. Lendable:

        - Methods:
            - lend(br: Borrower, amount: number): boolean: A method to lend a specific amount of money to a Borrower and return true if the transaction is successful.
            - getMoneyBack(): boolean: A method to receive back the money and return true if the transaction is successful.

    3. Lender:

        - Attributes:
            - money: The amount of money the lender currently has.
            - borrower: Reference to the Borrower object if currently lending money.
            lendAmount: The amount of money lent.
        - Methods:
            - getMoney(): number: Overrides the method from User, returns the amount of money the lender currently has.
            - lend(br: Borrower, amount: number): boolean: Overrides the method from Lendable, performs the lending process.
            - getMoneyBack(): boolean: Overrides the method from Lendable, performs the process of receiving back the money.

    3. Borrower:

        - Attributes:
            - cash: The amount of money the borrower currently has.
            - lender: Reference to the Lendable object if currently owing money.
        - Methods:
            - getMoney(): number: Overrides the method from User, returns the amount of money the borrower currently has.
            - borrow(lender: Lendable, amount: number): boolean: Performs the process of borrowing money from the lender.
            - returnMoney(amount: number): boolean: Performs the process of returning money to the lender.

    4. Bank:

        - Attributes:
            - money: The amount of money the bank currently has.
        - Methods:
            - lend(br: Borrower, amount: number): boolean: Overrides the method from Lendable, performs the lending process from the bank.
            - getMoneyBack(): boolean: Overrides the method from Lendable, the bank always returns money, so it always returns true.