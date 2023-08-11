const { Bank } = require("../Bank/Bank");

class Client {
    name;
    #cpf;
    #email = undefined;
    #telefone = undefined;
    banks = [];
    #pixKeys = [];

    constructor(name, cpf){
        this.name = name;
        this.#cpf = cpf;
    }

    get cpf() {
		return this.#cpf;
	}

    get telefone(){
        return this.#telefone;
    }

    get email(){
        return this.#email;
    }

    get pixKeys(){
        return this.#pixKeys;
    }

    addBank(bank){
        if(!(bank instanceof Bank)){
            console.log("Informe um banco válido.");
            return;
        }

        this.banks.push(bank);
        const bankIndex = Bank.createdBanks.findIndex((element) => element.bankCode === bank.bankCode);
        Bank.createdBanks[bankIndex].qtdClients++;

        console.log(`Banco ${bank.bankCode} adicionado a/ao cliente ${this.name}`);
    }

    addPixKeys(key){
        if(typeof key === 'number'){
            this.#pixKeys.push(key);
            console.log(`Telefone ${key} cadastrado como chave pix!`)
        } else if(typeof key === 'string' && /^\d{3}\d{3}$/.test(key)){
            const cpfKey = `cpf_${key}`
            this.#pixKeys.push(cpfKey)
            console.log(`CPF ${key} cadastrado como chave pix!`)
        } else if(typeof key === 'string' && /^[a-zA-Z@._-]+$/.test(key)){
            this.#pixKeys.push(key);
            console.log(`Email ${key} cadastrado como chave pix!`)
        }else{
            console.log("Não foi possível cadastrar a chave pix ):")

        }
    }
}

module.exports = { Client };