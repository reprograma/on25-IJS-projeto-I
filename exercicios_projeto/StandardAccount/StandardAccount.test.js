const { StandardAccount } = require('./StandardAccount');
const { Client } = require('../Client/Client');

let client1Mock, client2Mock, client3Mock, accountMock1, accountMock2;

beforeEach(() => {
    client1Mock = new Client("Mock1", "1234567894", 7000);
    client2Mock = new Client("Mock2", "456789123", 3000);
    client3Mock = new Client("Mock3", "987654321", 2500);

    accountMock1 = new StandardAccount(client2Mock);
    accountMock1.balance = 1500;

    accountMock2 = new StandardAccount(client3Mock);
    accountMock2.balance = 1200;
});

describe("Verify if the account creation verification is working", () => {
    it("Should return the message error if salary >= 5000", () => {
        let pseudoAccount = new StandardAccount(client1Mock);

        expect(pseudoAccount).toStrictEqual(new Error(`Sorry, you can't created a Standard Account.\nTo have a Standard account, the monthly income must be lower than $5000.`));
    });
});

describe("Check if the transfer function is working", () => {
    it("Should return false if the amount is greater than the daily limit", () => {
        expect(accountMock1.transferTo(accountMock2, "987654321", 1200)).toEqual(false)
    });
    it("Should return true if the amount is lower or equal to the daily limit", () => {
        expect(accountMock2.transferTo(accountMock1, "456789123", 1000)).toBe(true)
    });
});