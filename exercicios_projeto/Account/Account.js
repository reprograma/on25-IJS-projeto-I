const { Client } = require ('../Client/Client')

class Account {
    client;
    #accountNumber;
    #agencyNumber;
    #balance = 0;
    pixKey;
    transactionLimit;

    static all = []

    constructor(client, accountNumber, agencyNumber) {
        if(!(client instanceof Client)) {
            return console.log('Esse não é um cliente válido!')
        }

        this.client = client
        this.#accountNumber = accountNumber
        this.#agencyNumber = agencyNumber
        this.pixKey = client.pixKey
        Account.all.push(this)
    }

    get accountNumber(){
        return this.#accountNumber
    }

    get agencyNumber(){
        return this.#agencyNumber
    }

    get balance() {
        return this.#balance
    }

    set balance(newBalance) {
        this.#balance = newBalance
    }

    registerClientAccount(account, name, cpf, income){
        if(account instanceof Account){
            this.account = account
            this.name = name
            this.cpf = cpf
            this.income = income

            return 'Cliente cadastrado'
        } else {
            return 'Erro no cadastro, dados inválidos'
        }
    }

    deposit(amount){
        this.#balance += amount
        this.transactionLimit -= amount
        console.log(`Operação realizada com sucesso. Seu saldo atual é de R$ ${this.#balance},00.`)
    }

    withdraw(amount){
        if(this.#balance < amount){
            return `Você não possui saldo suficiente para realizar esta operação.`
        } else {
            this.#balance -= amount
            this.transactionLimit -= amount
            return `Operação realizada com sucesso. Seu saldo atual é de R$ ${this.#balance},00.`
        }
    }
    
    transferTo (account, cpf, amount) {
        if(!(account instanceof Account)) {
            return 'Informe uma conta válida!'
        }

        const anotherAccount = Account.all.find((element) => element.account === account)
        const anotherCpf = Account.all.find((element) => element.client.cpf ===  cpf) 
   
        if(this.#balance < amount) {
            return `Você não possui saldo suficiente para realizar esta operação.`
        } else {
            if (account.cpf === anotherCpf){
                this.#balance -= amount;
                this.transactionLimit -= amount;
                account.#balance += amount;
                return `Transferência realizada. Seu saldo atual é de R$ ${this.#balance},00. Seu limite de transações é de R$ ${this.client.transactionLimit},00.`

            } else {
                return `A conta e o cpf informados não correspondem ao mesmo cliente. Por favor, verifique os dados inseridos.`
            }
        }
    }

    transferPix(amount, pixKeyClient){
        if(!(pixKeyClient === this.client.pixKey)) {
            console.log('Essa chave pix é inválida.')
            return
        }

        if(this.#balance < amount) {
            return `Você não possui saldo suficiente para realizar esta operação.`
        } else {
            this.#balance -= amount;
            this.transactionLimit -= amount;
            (this.client).balance += amount
            return `Pix realizado. Seu saldo atual é de R$ ${this.#balance},00.`
        }
    }

    findAccountByPixKey(pixKey){
        for(const anotherAccount of Account.all){
            anotherAccount.pixKey.includes(pixKey)
            return anotherAccount
        }
    }

    transactions(){
        if(this.transactionLimit = 0) {
            return `Não é possível realizar essa operação. Você atingiu o limite diário de transações.`
        }
    }
}

module.exports = { Account }


