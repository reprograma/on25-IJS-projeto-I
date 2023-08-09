const { GoldAccount } = require('./GoldAccount');
const { Client } = require('../Client/Client');

let client1Mock, client2Mock, client3Mock, client4Mock, accountMock1, accountMock2;

beforeEach(() => {
    client1Mock = new Client("Mock1", "1234567894", 2000);
    client2Mock = new Client("Mock2", "987654321", 12000);
    client3Mock = new Client("Mock3", "456789123", 25000);
    client4Mock = new Client("Mock4", "456123789", 15000);

    accountMock1 = new GoldAccount(client2Mock);
    accountMock1.balance = 7000;

    accountMock2 = new GoldAccount(client4Mock);
    accountMock2.balance = 1100;
});

describe("Verify if the account creation verification is working", () => {
    it("Should return the message error if salary < 5000", () => {
        let pseudoAccount = new GoldAccount(client1Mock);

        expect(pseudoAccount).toStrictEqual(new Error(`Sorry, you can't created a Gold Account, your income is compatible with the Standard Account`));
    });

    it("Should return the message error if salary >= 18000", () => {
        let pseudoAccount = new GoldAccount(client3Mock);

        expect(pseudoAccount).toStrictEqual(new Error(`Sorry, you can't created a Gold Account, your income is compatible with the Premiun Account`));
    });
});

describe("Check if the transfer function is working", () => {
    it("Should return true if the amount is lower or equal to the daily limit", () => {
        expect(accountMock2.transferTo(accountMock1, "987654321", 400)).toBe(true)
    });
    it("Should return false if the amount is greater than the daily limit", () => {
        expect(accountMock1.transferTo(accountMock2, "456123789", 5200)).toEqual(false)
    });
});