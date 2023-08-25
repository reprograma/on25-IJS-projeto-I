const { Client } = require ('../Client/Client');
const { Account } = require ('../Account/Account');

class StandardAccount extends Account {
    #totalTransfer = 0;
    #MAX_OF_TRANSFER = 1000;

    constructor(client, bankCode) {
        super(client, bankCode);
    }

    withdraw(amount) {
        if (this.client.salary >= amount){
            if (this.#totalTransfer < this.#MAX_OF_TRANSFER) {
            this.client.salary -= amount;
            this.#totalTransfer += amount;                       
            console.log(`O novo saldo é R$ ${this.client.salary}.`);
            console.log(`Você já realizou o total de R$ ${this.#totalTransfer} em transação. Seu limite máximo em transação no dia é de R$ ${this.#MAX_OF_TRANSFER}.`);        
            } else {
                console.log("Você atingiu seu limite máximo de transação no dia!");
            } 
        } else {
            console.log(`Saldo insuficiente para saque!`);
        }     
    } 
}             

/*
const client1 = new Client('Maria', 12456789, 4000, 'maria@gmail.com', 98765432);

const conta1 = new StandardAccount(client1, 123);

conta1.tAccount();
console.log(conta1);

conta1.withdraw(1000);
conta1.withdraw(100);
*/