const { Client } = require ('../Client/Client');

class Account {
    client;
    bankCode;
    typeAccount = "";

    constructor (client, bankCode) {
            this.client = client; 
            this.bankCode = bankCode;        
    }
   
    tAccount() {
        if(this.client.salary <= 4999.99) {
            return this.typeAccount = "Standard";

        } else if (this.client.salary >= 5000 && this.client.salary <= 17999.99) {
            return this.typeAccount = "Gold";    

        } else if(this.client.salary >= 18000) {
            return this.typeAccount = "Premium";
        }
    }
    
    withdraw(amount) {
        if (this.client.salary < amount) {
            console.log("Saldo insuficiente para saque!");
        } else if (this.client.salary >= amount) {
            this.client.salary -= amount;
            console.log(`O novo saldo é R$ ${this.client.salary}.`);
        }
    }

    debit(amount) {
        this.client.salary += amount;        
        console.log(`Seu novo saldo é R$ ${this.client.salary}`);
    }

    transferTo(anotherAccount, amount) {
       if (this.client.salary >= amount) {
        anotherAccount.salary += amount;
        this.client.salary -= amount;
       }        
        console.log(`O saldo atual da conta de origem é de R$ ${this.client.salary}`);
        console.log(`O saldo atula da conta de destino é de R$ ${anotherAccount.salary}`)
    }
}

module.exports = { Account }

/*
const cliente1 = new Client('Maria', 12456789, 5500, 'maria@gmail.com', 98765432);

const conta1 = new Account(cliente1, 123);

conta1.withdraw(500);
conta1.debit(1000);
conta1.tAccount();
console.log(conta1);
*/
