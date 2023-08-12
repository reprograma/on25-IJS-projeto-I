const { Client } = require('../Client/Client')

class Account {
    client;
    agencyNumber;
    accountNumber;
    type;
    #income;
    pixKey;
    dailyLimit;

    static allAccounts = [];
    
    constructor(client, agencyNumber, accountNumber, income, pixKey) {
        if (!(client instanceof Client)) {
			return new Error('Informe um cliente válido');
		}

        this.client = client;
        this.agencyNumber = agencyNumber;
        this.accountNumber = accountNumber;
        this.type = "";
        this.#income = income;
        pixKey = client.pixKey;
        this.dailyLimit = 0;

        Account.allAccounts.push(this);
    } 
      
    get agencyNumber(){
        return this.agencyNumber;
    }

    get accountNumber(){
        return this.accountNumber;
    }

    get income() {
        return this.#income;
    }

    set income(newIncome) {
        this.#income = newIncome;
    }

    registerClient(name, cpf, account, income) {
        if(account instanceof Account) {
            this.name = name;
            this.#cpf = cpf;
            this.account = account;
            this.#income = income;

            return 'Cliente cadastrado.';
        } else {
            throw new Error('Erro no cadastro, dados inválidos.')
        }
    }

    transferPix(amount, keyClient) {
        if(!(keyClient === this.client.pixKey)) {
            console.log('Essa chave pix é inválida.')
            return;
        }

        if(this.#income < amount) {
            return 'Você não possui saldo suficiente.';
        } else {
            this.#income -= amount;
            this.dailyLimit -= amount;
            (this.client).#income += amount;
            return `Pix realizado. Seu saldo atual é de R$ ${this.#income},00.`;
        }
    }

    findAccountByPixKey(pixKey) {
        for(const anotherAccount of Account.allAccounts) {
            anotherAccount.pixKey.includes(pixKey)
            return anotherAccount;
        }
    }

    withdrawal(amount) {
        if(this.#income < amount) {
            return `Você não possui saldo suficiente para realizar esta operação.`
        } else {
            this.#income -= amount;
            this.dailyLimit -= amount;
            return `Operação realizada com sucesso. Seu saldo atual é de R$ ${this.income},00.`;
        }
    }
    
    creditAmount(amount) {
		this.#incomeincome += amount;
		console.log(`O novo saldo da conta é: R$ ${this.#income},00.`);
	}

	debitAmount(amount) {
		this.#income -= amount;
		console.log(`O novo saldo da conta é: R$ ${this.#income},00.`);
	}

    transferTo(account, cpf, amount) {
        if (!(account instanceof Account)) {
			console.log('Informe uma conta válida!');
			return;
		}

        let amountToBeDebited = amount;
        if (this.#income >= amountToBeDebited) {
			this.#income -= amountToBeDebited;
			anotherAccount.income += amount;

			console.log(`O saldo atual da conta é de R$ ${this.#income},00.`);

		} else {
			console.log(
				`Saldo insuficiente para realizar a transferência. Seu saldo atual é de ${
					this.#income
				}. Para realizar essa transferência você precisa ter ${amountToBeDebited} em conta.`
			);
		}
    }

    creditAmount(amount) {
		this.#income += amount;
		console.log(`O novo saldo da conta é: R$ ${this.income},00.`);
	}

}

module.exports = { Account }