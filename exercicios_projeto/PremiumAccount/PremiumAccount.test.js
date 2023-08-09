const { PremiunAccount } = require('./PremiunAccount');
const { Client } = require('../Client/Client');

let client1Mock, client2Mock, client3Mock, accountMock1, accountMock2;

beforeEach(() => {
    client1Mock = new Client("Mock1", "1234567894", 7000);
    client2Mock = new Client("Mock2", "456789123", 25000);

    accountMock1 = new PremiunAccount(client2Mock);
    accountMock1.balance = 200;
});

describe("Verify if the account creation verification is working", () => {
    it("Should return the message error if salary < 18000", () => {
        let pseudoAccount = new PremiunAccount(client1Mock);

        expect(pseudoAccount).toStrictEqual(new Error(`Sorry, you can't created a Premiun Account.\nTo have a Premium account, the monthly income must be greater than or equal to $18000.`));
    });
});