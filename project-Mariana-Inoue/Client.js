const { Bank } = require('./Bank');


class Client {

    name;
    #cpf;
    email;
    #phone;
    banks = [];
    pixKeys = []

    constructor(name, cpf, email, phone) {
        this.#phone = phone;
        this.name = name;
        this.#cpf = cpf;
    }

    get cpf() {
        return this.#cpf;
    }

    get phone() {
        return this.#phone;
    }

    hasAccountInThisBank(bank) {
        return (
            this.banks.find((element) => element.bankCode === bank.bankCode) !== undefined)
    }

    addBank(bank) {
        if (!(bank instanceof Bank)) {
            console.log('Informe um banco válido');
            return;
        }

        if (this.hasAccountInThisBank(bank)) {
            console.log(
                `Cliente do CPF ${this.cpf} já possui conta no banco ${bank.bankName}`
            );
            return;
        }


        this.banks.push(bank);
        const bankIndex = Bank.createdBanks.findIndex(
            (element) => element.bankCode === bank.bankCode
        );
        Bank.createdBanks[bankIndex].qtdClients++;

        console.log(`Banco ${bank.bankCode} adicionado à cliente ${this.name}.`);
    }


    registerPix(newPix) {
        if (!(newPix instanceof Bank)) {
            console.log('Informe um banco válido');
            return;
        }

        if (this.hasAccountInThisBank(bank)) {
            console.log(
                `Cliente do CPF ${this.cpf} já possui conta no banco ${bank.bankName}`
            );
         
        }


        this.pixKeys.push(pix);
        const bankIndex = Bank.createdBanks.findIndex(
            (element) => element.bankCode === bank.bankCode
        );
        Bank.createdBanks[bankIndex].qtdClients++;

        console.log(`Banco ${bank.bankCode} adicionado à cliente ${this.name}.`);
    }


}

module.exports = { Client };