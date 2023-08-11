const { Client } = require('../Client/Client');
const { Account } = require('../Account/Account');

describe('Client', () => {
  let cliente;
  let conta;

  beforeEach(() => {
    cliente = new Client('Erica', '12345678900', 'erica@email.com', '1234567890', 7000, null, '123', '456');
    conta = new Account(cliente, '789', '012');
  });

  test('accountType deve retornar o tipo de conta corretamente com salário menor que 5000', () => {
    cliente.salary = 4000;
    const tipoConta = cliente.accountType();
    expect(tipoConta).toContain('Sua conta é do tipo Standard.');
  });

  test('accountType deve retornar o tipo de conta corretamente com salário entre 5000 e 17999', () => {
    cliente.salary = 10000;
    const tipoConta = cliente.accountType();
    expect(tipoConta).toContain('Sua conta é do tipo Gold.');
  })
});