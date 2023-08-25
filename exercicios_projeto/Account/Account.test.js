const { Account } = require ('./Account');
const { Client } = require ('../Client/Client');

const cliente1 = new Client('Maria', 12456789, 4000, 'maria@gmail.com', 98765432);
const conta1 = new Account(cliente1, 123);

describe('Should return type of account', () => {
    it('Return Standard Account when limit is 4999.99', () => {
        expect(conta1.tAccount()).toEqual('Standard')
    }); 
});