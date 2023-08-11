const { Account } = require("./Account/Account");
const { Bank } = require("./Bank/Bank");
const { Client } = require("./Client/Client");
const { GoldAccount } = require("./GoldAccount/GoldAccount");
const { StandartAccount } = require("./StandardAccount/StandardAccount");

const bank = new Bank(101, "Banco1");
console.log(bank)

const client1 = new Client("Nicole", 123456);
console.log(client1.cpf);
console.log(client1);
client1.addBank(bank)
console.log(client1);
client1.addPixKeys(51998654);
client1.addPixKeys('email@email.com')
// client1.addPixKeys('123')
console.log(client1.pixKeys)

// const client2 = new Client("Rodrigo", 789123);
// client2.addBank(bank);
// console.log(client2);
// client2.addPixKeys(789123)
// console.log(client2.pixKeys)

const account1 = new Account(client1, bank, 123, 456);
console.log(account1)
account1.deposit(1000);
account1.withdraw(100);

// const account2 = new Account(client2, bank, 456, 789);
// console.log(account2);
// console.log("CONTA", Account.accounts)

// console.log(account1.transferTo(account2, 789123, 200));
// account1.transferTo(account2, 789123, 200)
// account1.pixTransfer(789123, 200);

const clientStandart = new StandartAccount(client1, bank, 123, 456);
console.log(clientStandart);
clientStandart.deposit(100);

const clientGold = new GoldAccount(client1, bank, 123, 456);
console.log(clientGold);
clientGold.deposit(100);