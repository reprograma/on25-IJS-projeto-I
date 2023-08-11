const { Account } = require('./Account');
const { Client } = require('../Client/Client');


describe('Verifying if account type is correct', () => {
    test.each([
        ['Standard', 4999.99],
        ['Gold', 15000],
        ['Premium', 20000],
    ])('Returns %s if monthly income is %f', (expectedType, monthlyIncome) => {
        const client = new Client('Hwasa', 12345678, monthlyIncome);
        const account = new Account(1, 1, client)
        account.verifyAccountType();
        expect(account.accountType).toEqual(expectedType);
    });
});