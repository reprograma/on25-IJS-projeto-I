const { Account } = require("../Account/Account")


class Client {
    name
    cpf
    phoneNumber
    email
    account
    salary
    accountType

    constructor(name, cpf, phoneNumber, email, account, salary, accountType) {
        this.name = name
        this.cpf = cpf
        this.phoneNumber = phoneNumber
        this.email = email
        this.account = account
        this.salary = salary
        this.accountType = accountType
    }

    registerClient(name, cpf, account, salary){
        if(!(account instanceof Account)){
            console.log("Cadastro não realizado! Os dados inseridos são inválidos.")
            return
        } else if (this.name = name, this.cpf = cpf, this.account = account, this.salary = salary){
            console.log("Cadastro realizado com sucesso!")
            return
        }

        if(this.balance <= 4999.99){
            console.log(`A categoria da sua conta é Standard. Seu limite de transação diária é de R$ 1.000,00.`)
            return this.accountType = "Standard"
        } else if(this.balance >= 5000 && this.balance <= 17999.99){
            console.log(`A categoria da sua conta é Gold. Seu limite de transação diária é de R$ 5.000,00.`)
            return this.accountType = "Gold"
        } else {
            console.log(`A categoria da sua conta é Premium. Você pode realizar transações diárias ilimitadas.`)
            return this.accountType = "Premium"
        }

    }

    registerPixKey(key){
        if(key === this.cpf || key === this.phoneNumber || key === this.email){
            console.log("Chave PIX cadastrada com sucesso!")
            Account.pixKey = key
            return
        } else {
            console.log("Chave não cadastrada. Informe seu cpf, telefone ou e-mail para criar a chave PIX.")
        }
    }

    pixTransfer(anotherpixKey, amount){
        if(!(anotherpixKey === this.cpf || anotherpixKey === this.email || anotherpixKey === this.phoneNumber)){
            console.log("Chave PIX inválida!")
            return
        }

        if(this.balance >= amount){
            this.balance = this.balance - amount
            console.log(`PIX realizado com sucesso! Seu saldo atual é de ${this.balance}`)

            anotherpixKey.balance = anotherpixKey.balance + amount
            console.log(`O saldo atual da conta de ${anotherpixKey.client} é de ${anotherpixKey.balance}.`)
        } else {
            console.log(`Saldo insuficiente, ${this.client}! Seu saldo atual é de R$ ${this.balance}. Você precisa de ${amount} para poder realizar o saque.`)
        }
    }

}

module.exports = { Client }