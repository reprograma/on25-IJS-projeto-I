const { Account } = require('./Account/Account');
const { Client } = require('./Client/Client');

const client1 = new Client("Raquel Davino", "11698733658", 6000);
console.log(client1);
console.log(client1.cpf, client1.income, "\n");

const client2 = new Client("Zoe Davino", "9154786612", 3000);
console.log(client2);
console.log(client2.cpf, client2.income, "\n");

console.log("CREATED CLIENTS", Client.createdClients, "\n");

const bankAccount1 = new Account("0281", "123456-9", client1);
const bankAccount2 = new Account("0281", "33333-9", client2);
console.log("CREATED ACCOUNTS", Account.createdAccounts, "\n");
console.log(bankAccount1);

bankAccount2.createPixKey("cpf");


bankAccount2.toDeposit(4000);
bankAccount1.toDeposit(2000);

bankAccount1.toPix("9154786612", 1000);
console.log(bankAccount2.balance);

bankAccount1.toTransfer("33333-9", "9154786612", 100);
console.log(bankAccount2.balance, "\n");

bankAccount1.toWithdraw("teste");
bankAccount2.toWithdraw(0);
bankAccount1.toWithdraw(1000);





