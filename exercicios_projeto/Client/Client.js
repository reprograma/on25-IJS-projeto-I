const { Account } = require('../Account/Account')

const { StandardAccount } = require('../StandardAccount/StandardAccount')
const { GoldAccount } = require('../GoldAccount/GoldAccount')
const { PremiunAccount } = require('../PremiumAccount/PremiunAccount')

class Client {
    #id;
    #cpf;
    
    account;
    name;
    income;

    constructor(name, cpf, income) {
        this.#cpf = cpf;
        this.name = name;
        this.income = income;
    }

    cadastrarConta(conta, agencia) {

        if (this.income < 5000) {
            this.account = new StandardAccount(conta, agencia)
            return
        }

        if (5000 <= this.income && this.income < 18000) {
            this.account = new GoldAccount(conta, agencia)
            return
        }
        
        if (this.income >= 18000) {
            this.account = new PremiunAccount(conta, agencia)
            return
        }

    }

    get cpf() {
        return this.#cpf;
    }

    get account() {
        return this.account;
    }

    get income() {
        return this.income
    }

    transferir(valor) {

        console.log(`Minha conta é: ${this.account.accountNumber}, vou transferir o valor ${valor}.`)
    }

}

//const client1 = new Client(account1, 'Carol', 12345, 2000)
const client2 = new Client('Carol', 12345, 2000)
const client3 = new Client('Carol', 12345, 6000)
const client4 = new Client('Carol', 12345, 80000)


client2.cadastrarConta(22222, 12)
//client2.transferir(200)
console.log(client2)

client3.cadastrarConta(33333, 10)
console.log(client3)

client4.cadastrarConta(88888,55)
console.log(client4)



//console.log(client1)

module.exports = {
    Client,
}