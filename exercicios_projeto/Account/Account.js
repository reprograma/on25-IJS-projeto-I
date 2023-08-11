class Account {
    client;
    bank;
    accountNumber;
    agencyNumber;
    #balance = 0;

    static accounts = [];

    constructor(client, bank, accountNumber, agencyNumber){
        this.client = client;
        this.bank = bank;
        this.accountNumber = accountNumber;
        this.agencyNumber = agencyNumber;
        Account.accounts.push(this);
    }

    get balance() {
		return this.#balance;
	}

    set balance(newBalance) {
		this.#balance = newBalance;
	}

    withdraw(amount){
        if(this.#balance >= amount){
            this.#balance -= amount;
            console.log(`Retirada realizada com sucesso! Seu saldo restante é R$ ${this.#balance},00`)
		} else {
			console.log("Você não tem saldo suficiente para essa opção ):")
        }
    }

    transferTo(anotherAccount, cpfNumber, amount){
        if (!(anotherAccount instanceof Account)) {
            return new Error('Informe uma conta válida');
        }

        if(anotherAccount.client.cpf !== cpfNumber){
            return new Error('Informe um cpf válido!')
        }

        let amountToBeDebited = amount;

		if (this.#balance >= amountToBeDebited) {
			this.#balance -= amountToBeDebited;
			anotherAccount.#balance += amount;

			console.log(`O saldo atual da conta de origem é de R$ ${this.#balance}`);
			console.log(
				`O saldo atual da conta de destino é de R$ ${anotherAccount.#balance}`
			);
		} else {
			console.log(
				`Saldo insuficiente para realizar a transferência. Seu saldo atual é de ${
					this.#balance
				}. Para realizar essa transferência você precisa ter ${amountToBeDebited} em conta.`
			);
		}
        
    }

    deposit(amount){
        this.#balance += amount;
        console.log(`O novo saldo da conta é: R$ ${this.#balance}`);
    }

    findAccountByPix(pixKey){
        for(const account of Account.accounts){
            if(account.client.pixKeys.includes(pixKey)){
                return account;
            }
        }
        return null;
    }

    pixTransfer(pixKey, amount){
        const anotherAccount = this.findAccountByPix(pixKey);
        if(anotherAccount === null){
            console.log("Chave pix inválida!")
        }

        if (this.#balance >= amount) {
			this.#balance -= amount;
			anotherAccount.#balance += amount;

			console.log(`O saldo atual da conta de origem é de R$ ${this.#balance}`);
			console.log(
				`O saldo atual da conta de destino é de R$ ${anotherAccount.#balance}`
			);
		} else {
			console.log(
				`Saldo insuficiente para realizar o pix. Seu saldo atual é de ${
					this.#balance
				}. Para realizar o pix você precisa ter ${amount} em conta.`
			);

            }
    }
}

module.exports = { Account };