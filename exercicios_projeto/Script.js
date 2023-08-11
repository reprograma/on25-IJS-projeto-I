const { Account } = require('./Account/Account').default;
const { Client } = require('./Client/Client').default;

const client1 = new Client('Wheein', 123456, 6000)
const account1 = new Account(1, 1, client1)

const client2 = new Client('Hwasa', 456789, 5000)
const account2 = new Account(1, 1, client2)

account1.deposit(105)

account1.generatePixKey("cpf", 123456)
account2.generatePixKey("cpf", 456789)

account1.pixOperation(100, 456789, account2)
console.log(account2)
