const { Client } = require('./Client/Client');
const { Account } = require('./Account/Account');
const { GoldAccount } = require('./GoldAccount/GoldAccount');
const { PremiunAccount } = require('./PremiumAccount/PremiunAccount');
const { StandardAccount } = require('./StandardAccount/StandardAccount');

const client1 = new Client("Freddy", "123-4", 3000, "(11) 9999-9999", "freddy@gmail.com");
const client2 = new Client("Daphne", "567-8", 5500, "(11) 5555-5555", "daphne@gmail.com");
const client3 = new Client("Velma", "912-3", 18750, "(11) 8888-8888", "velma@gmail.com");
const client4 = new Client("Scooby", "456-7", 3500, "(11) 4444-4444", "scooby@gmail.com");

console.log("\n## STANDARD ACCOUNT");
const account1 = new StandardAccount(client4, "007", "001");
account1.balance = 7000;
console.log(account1);
const account2 = new StandardAccount(client3, "088", "002");
console.log(account2); //error: Sorry, you can't created a Standard Account.To have a Standard account, the monthly income must be lower than $5000.

console.log("\n## GOLD ACCOUNT ##");
const account3 = new GoldAccount(client2, "021", "003");
account3.balance = 6000;
console.log(account3);
const account4 = new GoldAccount(client1, "055", "004");
console.log(account4); //error: Sorry, you can't created a Gold Account, your income is compatible with the Standard Account

console.log("\n## PREMIUN ACCOUNT ##")
const account5 = new PremiunAccount(client3, "012", "005");
console.log(account5);
account5.balance = 100;
const account6 = new PremiunAccount(client1, "007", "006");
console.log(account6); //error: Sorry, you can't created a Premiun Account.To have a Premium account, the monthly income must be greater than or equal to $18000.
console.log("------------------------");

console.log("\n## CONTAS ATIVAS ##");
//contas ativas: account1 com client4, account3 com client2 e account5 com client3
console.log(Account.accountCreated);

console.log("\n## TRANSFERÊNCIAS ##")
console.log(account1.transferTo(account3, "567-8", 3500));
console.log(`${account1.client.name} - Value transferred today: ${account1.transferValueTotal}`);
console.log(`${account1.client.name} - Actual balance: $${account1.balance}`);

account3.transferTo(account5, "912-3", 4000);
console.log(`${account3.client.name} - Value transferred today: ${account3.transferValueTotal}`);
console.log(`${account3.client.name} - Actual balance: $${account3.balance}`);

account5.transferTo(account3, "567-8", 7000); //error: you don't have $7000

console.log("\n## CHAVE PIX ##")
account1.createPixKey("cpf", "444-x"); //error incorrect cpf
account1.createPixKey("cpf", "456-7");
account3.createPixKey("cpf", "567-8");
account3.createPixKey("email", "daphne@gmail.com");
account3.createPixKey("phone", "(11) 5555-5555");
account5.createPixKey("email", "velma@gmail.com");

console.log("\n## CONTAS ATIVAS COM CHAVE PIX ##");
console.log(Account.accountCreated);

console.log("\n## TRANSFERÊNCIA POR PIX ##")
account1.transferWithPixKey("cpf", "567-8", 1000);
account3.transferWithPixKey("email", "velma@gmail.com", 9000); //error: you don't have $9000