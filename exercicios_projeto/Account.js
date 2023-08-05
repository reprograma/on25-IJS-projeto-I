const { Clients, Gold, Premium, Standard } = require('./Client');

class BankAccount {

    client;
    accountNumber;
    agencyNumber;
    #balance = 0;
    pixKeys;
    static all = [];

    constructor(client, accountNumber, agencyNumber) {
        if (!(client instanceof Clients)) {
            return new Error('Informe um cliente válido');
        }
        this.client = client;
        this.accountNumber = accountNumber;
        this.agencyNumber = agencyNumber;
        this.pixKeys = {
            cpf: undefined,
            email: undefined,
            telefone: undefined,
            randomKey: undefined
        }
        BankAccount.all.push(this);
    }

    get balance() {
        return this.#balance;
    }

    set balance(newBalance) {
        this.#balance = newBalance;
    }

    creditAmount(amount) {
        this.#balance += amount;
        console.log(`O novo saldo da conta é: R$ ${this.#balance}`);
    }

    debitAmount(amount) {
        this.#balance -= amount;
        console.log(`O novo saldo da conta é: R$ ${this.#balance}`);
    }

    cashWithdrawal(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(`Sacou o valor de ${amount} `)
            console.log(`O saldo atual é de R$${this.balance}. `)
            return;
        } else {
            console.log(`Você não possui saldo o suficiente`)
        }
    }

    generateRandomKey(length) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let randomKey = '';

        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            randomKey += characters.charAt(randomIndex);
        }

        return randomKey;
    }

    createdPix(type) {
        if (type == "e-mail") {
            this.pixKeys.email = this.client.email;
            console.log(`Chave pix criada com sucesso`);
            return
        } if (type == "cpf") {
            this.pixKeys.cpf = this.client.cpf;
            console.log(`Chave pix criada com sucesso`);
            return
        } if (type == "telefone") {
            this.pixKeys.telefone = this.client.telefone;
            console.log(`Chave pix criada com sucesso`);
            return
        } if (type == "chave aleatória") {
            this.pixKeys.randomKey = this.generateRandomKey(10);
            console.log(`Chave pix criada com sucesso`);
            return
        } else {
            console.log("Chave de Pix inválida")
        }
    }

    transferPix(amount, chave) {
        if (amount <= this.#balance) {
            const targetAccount = BankAccount.all.find(account => account.pixKeys.cpf === chave);
            if (targetAccount) {
                this.#balance -= amount;
                targetAccount.#balance += amount;
                console.log(`Pix realizado com sucesso no valor de R$${amount},00, para ${targetAccount.client.name}.`);
            } else {
                console.log(`Chave PIX inválida`);
            }
        } else {
            console.log(`Você não possui saldo o suficiente, seu saldo atual é R$${this.#balance},00`);
        }
    }
}


module.exports = { BankAccount };
