//const { Client } = require('../Client/Client')

class Account {
    accountNumber;
    agencyNumber;
    keyPix = [];
    #balance = 0;

    constructor(accountNumber, agencyNumber) {
        this.accountNumber = accountNumber;
        this.agencyNumber = agencyNumber;
        this.#balance = this.#balance;
    }

    get accountNumber() {
        return this.accountNumber;
    }

    get agencyNumber() {
        return this.agencyNumber;
    }

    get keyPix() {
        return this.keyPix;
    }

    creatKeyPix(key) {
        this.keyPix.push(key);
        console.log(`Chave PIX ${key} cadastrada com sucesso!`)
    }

    credit(amount) {
        this.#balance += amount;
        console.log(`Depósito de ${amount},00 realizado com sucesso. O novo saldo é de R$ ${this.#balance},00`)
    }

    transferTo(anotherAccount, cpf, amount) {

        if (this.#balance >= amount) {
            this.#balance -= amount
            console.log(`Transferência de R$ ${amount},00 realizada com sucesso. Seu novo saldo é de ${this.#balance},00.`)
        } else {
            console.log(`Seu salde é de ${this.#balance},00 ,insuficiente para concluir a transação R$ ${amount},00.`)
        }
    }

    pix(key, amount) {
        if (this.#balance >= amount) {
            this.#balance -= amount
            console.log(`PIX de R$ ${amount},00 realizado com sucesso. Seu novo saldo é de ${this.#balance},00.`)
        } else {
            console.log(`Seu salde é de ${this.#balance},00 ,insuficiente para concluir o PIX de R$ ${amount},00.`)
        }
    }

    get balance() {
        return this.#balance;
    }

    set balance(newBalance) {
        this.#balance = newBalance;
    }

    getBalance(){
        return this.#balance;
    }
}

const account1 = new Account(1223, 001);
console.log(account1)

account1.credit(100);
//account1.creatKeyPix('020200202')

//console.log(account1)

account1.creatKeyPix('ijs@gmail.com')

//console.log(account1)

//account1.transferTo(0102, 123456, 30)
//account1.pix(1234, 200)


module.exports = {
    Account,
    account1,
}