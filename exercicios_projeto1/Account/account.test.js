  //teste: depositar valor válido

const {Account} = require  ("../Account/Account")

describe('Depósito na conta', () => {
  test('Deve depositar valor válido', () => {
    const account = new Account('001', '12345', 1000);
    const initialBalance = account.getBalance();

    const depositedAmount = 500;
    const result = account.deposit(depositedAmount);

    expect(result).toBe(true); // Verifica se a função retorna true
    expect(account.getBalance()).toBe(initialBalance + depositedAmount); // Verifica se o saldo foi atualizado corretamente
  });
});
