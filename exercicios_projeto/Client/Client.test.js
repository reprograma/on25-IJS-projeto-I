const { Client } = require ('./Client');
const { Account } = require('../Account/Account');

describe('verify functions of client class', () => {
    test('verificar se instancia do client é feita corretamente', () =>{
        const client = new Client();
        expect(client instanceof Client).toBe(true)
    });
    test('cadastrar clientes com dados válidos', () =>{
        const client = new Client();
        const account = new Account();
        expect(client.registerClient("Ciane",'12345678901', account, 5000)).toBe("cliente cadastrado")
    });

})