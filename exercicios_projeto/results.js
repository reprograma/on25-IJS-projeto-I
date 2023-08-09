const { Client } = require("./Client/Client");
const { Account } = require("./Account/Account");
const {
  TypeStandard,
} = require("../exercicios_projeto/TypeAccount/TypeStandard");
const { TypeGold } = require("../exercicios_projeto/TypeAccount/TypeGold");
const {
  TypePremium,
} = require("../exercicios_projeto/TypeAccount/TypePremium");

let client1 = new Client("Marina", 70279831412, 1000);
let client2 = new Client("Jorge", 80110021433, 5000);
let client3 = new Client("Ze", 77731000090, 20000);

console.log(client1);
/*
Client {
  name: 'Marina',
  salary: 1000,
  typeAccount: TypeStandard { transactionLimit: 1000 }
}
}*/
console.log(client1.cpf); //70279831412
console.log(client2);
/*
Client {
  name: 'Jorge',
  salary: 5000,
  typeAccount: TypeGold { transactionLimit: 5000 }
}
*/
console.log(client3);
/*Client {
    name: 'Ze',
    salary: 20000,
    typeAccount: TypePremium { transactionLimit: 'Sem limite de transação.' }
  }
*/
const account1 = new Account(client1, 500, 20);
const account2 = new Account(client2, 800, 25);
const account3 = new Account(client3, 700, 30);

console.log(account1.pixKey); //[]
account1.pixKey.push("702.798.314-12");
console.log(account1.pixKey); //[ '702.798.314-12' ]
account1.pixKey.push("mama@gmail.com");
account2.pixKey.push("9999-9999");

console.log(account1.pixKey); // [ '702.798.314-12', 'mama@gmail.com' ]
console.log(account2.pixKey); // [ '9999-9999' ]

account1.withdrawal(10); //Faltam: R$ 990 pra atingir seu limite de transição diário. Saque de: R$ 10 realizado. Agora seu saldo é de: R$ 990.
account2.withdrawal(50); //Faltam: R$ 4950 pra atingir seu limite de transição diário. Saque de: R$ 50 realizado. Agora seu saldo é de: R$ 4950.
account3.withdrawal(100); // Saque de: R$ 100 realizado. Agora seu saldo é de: R$ 19900.
account1.deposit(200); // Faltam: R$ 790 pra atingir seu limite de transição diário.Depósito de: R$ 200 realizado. Agora seu saldo é de: R$ 1190.
account1.transferTo(account2, 80110021433, 300); // Faltam: R$ 490 pra atingir seu limite de transição diário.Transferência de: R$ 300 realizado. Agora seu saldo é de: R$ 890.
account2.transferTo(account3, 77731000090, 250); //Faltam: R$ 4700 pra atingir seu limite de transição diário.Transferência de: R$ 250 realizado. Agora seu saldo é de: R$ 5000..
account3.transferTo(account1, 70279831412, 350); //Transferência de: R$ 350 realizado. Agora seu saldo é de: R$ 19800.

account1.pixKey.push("mama@gmail.com");
account1.pixKey.push("758.589.558-98");
account2.pixKey.push("9999-9999");

account1.transferToPix("9999-9999", 350); //Faltam: R$ 140 pra atingir seu limite de transição diário.Transferência de: R$ 350 realizado. Agora seu saldo é de: R$ 890.
//account2.transferToPix("00000", 350) //throw Error ("Conta não encontrada")
//account1.deposit(200); //throw Error ("Operação cancelada, você atingiu limite de transação diário")
