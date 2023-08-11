const { Client} = require("./Client/Client.js");
const { Account } = require("./Account/Account.js");


const client1 = new Client("Lélia Gonzalez", "12457896314", "lelia@gonzalez.com", "11995431221", 15000);
const client2 = new Client("Carolina Maria de Jesus", "23456112178", "carolina@mariajesus.com", "11995513221", 4500);
const client3 = new Client("Maya Angelou", "35412354511", "maya@angelou.com", "11996513244", 22000);

console.log(client1);
console.log(client2);
console.log(client3);

const account1 = new Account(123, 1155,  client1);
const account2 = new Account(124, 1186, client2);
const account3 = new Account(125, 1187, client3);



console.log(Account.all);

console.log(account1);
console.log(account2);
console.log(account3);

account1.creditAmount(15000);
account2.creditAmount(4500);
account3.creditAmount(22000);

account1.debitAmount(150);
account2.debitAmount(50);
account3.debitAmount(2000);



account1.createdPixKey(this.email);
console.log(account1.pixKey.email);

account2.createdPixKey(this.mobile);
console.log(account2.pixKey.mobile);

account3.createdPixKey(this.cpf);
console.log(account3.pixKey.cpf);

account1.transferToPixkey(account2, 1000);
