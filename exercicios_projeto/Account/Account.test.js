const{ Account } = require('./Account')
const { Client } = require('../Client/Client')

test('deposito e saque na conta', () => {
  const client = new Client("Maria", 5000);
  const account = new Account(client);

  account.deposit(1000);
  expect(account.income).toBe(2000);

  account.withdrawal(500);
  expect(account.income).toBe(800);
});

test('verificar saque não execedeu limite da conta', () => {
  const client = new Client("Clara", 3000);
  const account = new Account(client);

  account.deposit(100);
  account.withdrawal(1500);
  expect(account.income).toBe(500);
});