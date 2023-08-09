const { Account } = require('./Account');
const { Client } = require('../Client/Client');

let account1, account2, mockClient, accountMock;

beforeEach(() => {
    account1 = new Account();
    account1.balance = 100;

    account2 = new Account();
    account2.balance = 10;

    mockClient = new Client("Mock", "1234567894");
    accountMock = new Account(mockClient);
    accountMock.createPixKey("email", "mock@gmail.com");
});

describe("Check if deposit function returns the correct balance", () => {
    it("Should return false if amount <= 0", () => {
        let depositAmount = -10;
        let output = false;

        expect(account1.deposit(depositAmount)).toBe(output);
    });
    it("Should return the new balance (balance + amount) when amount > 0", () => {
        let depositAmount = 50;
        let output = 150;

        expect(account1.deposit(depositAmount)).toBe(output);
    });
});

describe("Check if withdrawal function returns the correct balance", () => {
    it("Should return false if amount <= 0", () => {
        let withdrawalAmount = -20;
        let output = false;

        expect(account1.withdrawal(withdrawalAmount)).toBe(output);
    });
    it("Should return the new balance (balance - amount) when amount > 0 and amount is lower than actual balance", () => {
        let withdrawalAmount = 70;
        let output = 30;

        expect(account1.withdrawal(withdrawalAmount)).toBe(output);
    });
    it("Should return false if amount is bigger than actual balance", () => {
        let withdrawalAmount = 110;
        let output = false;

        expect(account1.withdrawal(withdrawalAmount)).toBe(output);
    });
});

describe("Check if isBankAccount is working", () => {
    it("Should return true if count is an instance of Account", () => {
        expect(Account.isBankAccount(account1)).toEqual(true)
    });

    it("Should return false if count isn't instance of Account", () => {
        const notAccount = new Client();

        expect(Account.isBankAccount(notAccount)).toEqual(false);
    });
});

describe("Check if transfer function is working", () => {
    it("Should return false when is using the incorrect CPF", () => {
        const cpfIncorrect = "123456798";
        
        expect(account1.transferTo(mockClient, cpfIncorrect, 20)).toBe(false);
    });
});

describe("Check if create pix key function is working", () => {
    it("Check if it detects the incorrect CPF", () => {
        const incorrectCpf = "123456798";

        expect(accountMock.createPixKey("cpf", incorrectCpf)).toBe(false);
    });

    it("Check if is create pix key with the correct cpf", () => {
        const correctCpf = "1234567894";

        expect(accountMock.createPixKey("cpf", correctCpf)).toBe(true);
    });

    it("Check if is create pix key with email", () => {
        const email = "mock@gmail.com";

        expect(accountMock.createPixKey("email", email)).toBe(true);
    });

    it("Check if is create pix key with phone", () => {
        const phone = "11 12345-6789";

        expect(accountMock.createPixKey("phone", phone)).toBe(true);
    });
});

describe("Check if transfer with pix function is working", () => {
    it("Should return false if pix key not found", () => {
        incorrectPixKey = "test@gmail.com";

        expect(account1.transferWithPixKey("email", incorrectPixKey, 20)).toEqual(false);
    });

    it("Should return true if it's correct pix key", () => {
        correctPixKey = "mock@gmail.com";

        expect(account1.transferWithPixKey("email", correctPixKey, 20)).toEqual(true);
    });
});