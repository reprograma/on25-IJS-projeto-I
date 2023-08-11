//const { Client } = require("../Client/Client")

class Account {
    client
    numberAccount
    balance
    //pixKey

    constructor(client, numberAccount){
        //if(!(client instanceof Client)){
        //    console.log(`${this.client}, informe um cliente válido!`)
        //    return
        //}

        this.client = client
        this.numberAccount = numberAccount
        this.balance = 0
        //this.pixKey = undefined
    }

    deposit(amount){
        this.balance = this.balance + amount
        console.log(`Depósito realizado com sucesso, ${this.client}! Seu saldo atual é de ${this.balance}.`)
        return this.balance
    }

    cashWithdrawal(amount){
        if(this.balance >= amount){
            this.balance = this.balance - amount
            console.log(`Saque realizado com sucesso, ${this.client}! Seu saldo atual é de R$ ${this.balance}.`)
            return this.balance
        } else {
            console.log(`Saldo insuficiente, ${this.client}! Seu saldo atual é de R$ ${this.balance}. Você precisa de ${amount} para poder realizar o saque.`)
        }
    }


    transferTo(anotherAccout, amount){
        if(!(anotherAccout instanceof Account)){
            console.log(`${this.client}, informe uma conta válida!`)
            return
        }
        
        if(!(this.balance > amount)) {
            console.log(`Saldo insuficiente para realizar a operação, ${this.client}. Seu saldo atual é de ${this.balance}.`)
            return
        } else {
            this.balance = this.balance - amount
            console.log(`Transferência realizada com sucesso, ${this.client}! Seu saldo atual é de ${this.balance}.`)

            anotherAccout.balance = anotherAccout.balance + amount
            console.log(`O saldo atual da conta de ${anotherAccout.client} é de ${anotherAccout.balance}.`)
        }
    }

}

module.exports = {Account}