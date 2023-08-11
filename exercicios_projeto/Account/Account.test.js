const { Account } = require('../Account/Account');
const { Client } = require('../Client/Client');

describe('Account', () => {
  let clienteValido;
  let conta;

  beforeEach(() => {
    clienteValido = new Client('Erica', '12345678900', 'erica@email.com', '1234567890', 7000, null, '123', '456');
    conta = new Account(clienteValido, '789', '012');
  });

  test('depositar deve aumentar o saldo corretamente', () => {
    const resultado = conta.depositar(200);
    expect(resultado).toContain('Depósito de R$200,00 realizado.');
    expect(conta.saldo).toBe(200);
  });

  test('sacar deve atualizar o saldo corretamente', () => {
    conta.depositar(300);
    const resultado = conta.sacar(50);
    expect(resultado).toContain('Você sacou o valor de R$50,00');
    expect(conta.saldo).toBe(250);
  })
});