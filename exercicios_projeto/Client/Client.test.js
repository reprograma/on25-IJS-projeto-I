import Client from './Client.js';
import Account from '../Account/Account.js';

describe('Verify function', () => {
    test('Should Client', () => {
        const client = new Client();
        expect(client instanceof Client).toBe(true);
    });

    test('Should Client cpf', () => {
        const client = new Client();
        const account = new Account();
        expect(client.registerClient('Priscila', '12345678901', account, 10000)).toBe('Cliente cadastrado');
    });
});