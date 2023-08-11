const { Account } = require("./Account")

describe("test class Account", () => {
   const account1 = new Account("client1", "banco1", 123, 456);
   const account2 = new Account("client2", "banco1", 456, 789)
    test("should create a new account", () => {
        expect(account1.client).toBe("client1");
        expect(account1.bank).toBe("banco1");
        expect(account1.agencyNumber).toBe(456);
        expect(account1.accountNumber).toBe(123);
    })

    test("should withdraw works if have enough balance", () => {
        const initialBalance = 100;
        const amount = 50;

        account1.balance = initialBalance;
        account1.withdraw(amount);

        expect(account1.balance).toBe(initialBalance - amount);
    })

    test("should transfer to another account", () => {
        const initialBalance = 100;
        const amount = 50;

        account1.balance = initialBalance;
        account2.balance = 0;
        account1.transferTo(account2, account2.client.cpf, amount)

        expect(account1.balance).toBe(initialBalance - amount);
        expect(account2.balance).toBe(amount);
    })

    test("should make a deposit", () => {
        const initialBalance = 100;
        const amount = 50;

        account1.balance = initialBalance;
        account1.deposit(amount);

        expect(account1.balance).toBe(initialBalance + amount)
    })
    
})
