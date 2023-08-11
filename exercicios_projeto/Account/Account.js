const { Client, client1, client2, client3 } = require("../Client/Client.js");


class Account {
    agencyNumber;
    accountNumber;
    client;
    #balance = 0;
    pixKey;

    static all = [];

    constructor(agencyNumber, accountNumber, client) {
       
        if(!(client instanceof Client)) {
            return new Error("Informe um cliente válido");
        } else {
            this.agencyNumber = agencyNumber;
            this.accountNumber = accountNumber;
            this.client = client;
            this.pixKey = {
                "cpf": undefined,
                "email": undefined,
                "mobile": undefined,
            };
            
        }
        Account.all.push(this);
    }
    
    get balance() {
        return this.#balance;
    }

    set balance(newBalance) {
        this.#balance = newBalance;
    }


    
    creditAmount(amount) {
        this.#balance += amount;
        console.log(`Operação realizada, ${this.client.name} seu saldo é de R$ ${this.#balance},00`);
    }

    debitAmount(amount) {
        if (this.#balance < amount) {
            console.log(`Saldo insuficiente para saque. ${this.client.name} seu saldo atual é de R$ ${this.#balance},00`);
        } else {
            this.#balance -= amount;
            console.log(`Operação realizada, ${this.client.name} seu saldo é: R$ ${this.#balance},00`);
        }
    }

    cashWithdrawal(amount) {
        if(this.#balance >= amount) {
            this.#balance -= amount;
            console.log(`Operação realizada, ${this.client.name} seu saldo é de R$ ${this.#balance},00`);
        }else {
            console.log(`Saldo insuficiente para saque. ${this.client.name} seu saldo atual é de R$ ${this.#balance},00`);
        }
    }

    createdPixKey(key) {
        
        if(!(key === this.cpf)){
        console.log(`${this.client.name} informe um cpf válido`);
        }else {
            this.pixKey.cpf = this.client.cpf;
            console.log(`${this.client.name} chave PIX ${this.pixKey.cpf} criada com sucesso!`);
        }
        if(!(key === this.email)){
            console.log(`${this.client.name} informe um email válido`);
                    
        }else {
            this.pixKey.email = this.client.email;
            console.log(`${this.client.name} chave PIX ${this.pixKey.email}  criada com sucesso!`);
        }
        if(!(key === this.mobile)) {
            console.log(`${this.client.name} informe um mobile válido`);
                    
        }else{
        this.pixKey.mobile = this.client.mobile;
        console.log(`${this.client.name} chave PIX ${this.pixKey.mobile} criada com sucesso!`);
        }
           
    }

    transferToPixkey(anotherAccount, pixKey, amount) {
        const pixkey = this.client.pixKey;
        if (!(anotherAccount instanceof Account)) {
            console.log("Informe uma conta válida");
            return;
        }
        if (!(pixKey instanceof Account)) {
            console.log("Informe uma chave válida");
            return;
        }else {
                   
           (amount <= balance);
            this.balance -= amount;
            anotherAccount.balance += amount;
            console.log(`PIX realizado para ${this.client.name} no valor de R$ ${amount},00 com sucesso!`);
        }
    }

    transferTo(anotherAccount, cpf, amount) {
        if (!(anotherAccount instanceof Account)) {
            console.log("Informe uma conta válida");
            return;
        }
        if(anotherAccount.client.cpf !== cpf){
            console.log("Informe um cpf válido");
            return;
        }
        if (this.balance >= amount) {
            this.balance -= amount;
            anotherAccount.balance += amount;
            console.log(`Operação realizada. O saldo atual da conta de ${this.client.name} é de R$ ${this.balance},00`);
            console.log(`O saldo atual da conta destinada é R$ ${anotherAccount.balance},00`);
        } else {
            console.log(`Saldo insuficiente para realizar a transferência. Seu saldo atual é de R$ ${this.balance},00`);
        }
    }
}


const account1 = new Account(123, 1155,  client1);
const account2 = new Account(124, 1186, client2);
const account3 = new Account(125, 1187, client3);



console.log(Account.all);

console.log(account1);
console.log(account2);
console.log(account3);

account1.creditAmount(15000); // Operação realizada, Lélia Gonzalez seu saldo é de R$ 15000,00
account2.creditAmount(4500); // Carolina Maria de Jesus seu saldo é de R$ 4500,00
account3.creditAmount(22000); // Operação realizada, Maya Angelou seu saldo é de R$ 22000,00

account1.debitAmount(150); // Operação realizada, Lélia Gonzalez seu saldo é: R$ 14850,00
account2.debitAmount(50); // Operação realizada, Carolina Maria de Jesus seu saldo é: R$ 4450,00
account3.debitAmount(2000); // Operação realizada, Maya Angelou seu saldo é: R$ 20000,00



account1.createdPixKey(this.cpf); //Lélia Gonzalez chave PIX 12457896314 criada com sucesso!
// Lélia Gonzalez chave PIX lelia@gonzalez.com  criada com sucesso!
//Lélia Gonzalez chave PIX 11995431221 criada com sucesso!
console.log(account1.pixKey);

account2.createdPixKey(this.mobile); //Carolina Maria de Jesus chave PIX 23456112178 criada com sucesso!
//Carolina Maria de Jesus chave PIX carolina@mariajesus.com  criada com sucesso!
//Carolina Maria de Jesus chave PIX 11995513221 criada com sucesso!
console.log(account2.pixkey);


account3.createdPixKey(this.email); //Maya Angelou chave PIX 35412354511 criada com sucesso!
//Maya Angelou chave PIX maya@angelou.com  criada com sucesso!
//Maya Angelou chave PIX 11996513244 criada com sucesso!
console.log(account3.pixKey);

console.log("novos testes a seguir \n\n"); 

account1.createdPixKey(this.cpf);
console.log(account1.pixKey);

account1.transferToPixkey(account2.pixKey.mobile, 1000);
console.log(account2);



account3.transferTo(account1, "12457896314", 1500); 
// Operação realizada. O saldo atual da conta de Maya Angelou é de R$ 18500,00
//O saldo atual da conta destinada é R$ 16350,00



module.exports = { Account };




