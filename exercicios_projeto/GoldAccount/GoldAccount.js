const { Account } = require("../Account/Account");

class GoldAccount extends Account {
    limitTransaction = 5000;

    withdraw(amount){
        if(this.balance >= amount && this.limitTransaction > 0){
            this.balance -= amount;
            this.limitTransaction -= amount;
            console.log(`Retirada realizada com sucesso! Seu saldo restante é R$ ${this.balance},00`);
            console.log(`Resta R$ ${this.limitTransaction} para realizar suas transações.`)
		} else if(this.limitTransaction < 0){
            console.log("Você ultrapassou o valor do seu limite de transações.")
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

		if (this.balance >= amountToBeDebited && this.limitTransaction > 0) {
			this.balance -= amountToBeDebited;
            this.limitTransaction -= amountToBeDebited
			anotherAccount.balance += amount;

			console.log(`O saldo atual da conta de origem é de R$ ${this.balance}`);
			console.log(
				`O saldo atual da conta de destino é de R$ ${anotherAccount.balance}`
			);
            console.log(`Resta R$ ${this.limitTransaction} para realizar suas transações.`)
		} else if(this.limitTransaction < 0){
            console.log("Você ultrapassou o valor do seu limite de transações.")
        } else {
			console.log(
				`Saldo insuficiente para realizar a transferência. Seu saldo atual é de ${
					this.balance
				}. Para realizar essa transferência você precisa ter ${amountToBeDebited} em conta.`
			);
		}
        
    }

    pixTransfer(pixKey, amount){
        const anotherAccount = this.findAccountByPix(pixKey);
        if(anotherAccount === null){
            console.log("Chave pix inválida!")
        }

        if (this.balance >= amount && this.limitTransaction > 0) {
			this.balance -= amount;
            this.limitTransaction -= amount;
			anotherAccount.balance += amount;

			console.log(`O saldo atual da conta de origem é de R$ ${this.balance}`);
			console.log(
				`O saldo atual da conta de destino é de R$ ${anotherAccount.balance}`
			);
            console.log(`Resta R$ ${this.limitTransaction} para realizar suas transações.`)
		} else if(this.limitTransaction < 0){
            console.log("Você ultrapassou o valor do seu limite de transações."); 
        } else {
			console.log(
				`Saldo insuficiente para realizar o pix. Seu saldo atual é de ${
					this.balance
				}. Para realizar o pix você precisa ter ${amount} em conta.`
			);

            }
    }

    deposit(amount){
        if(this.limitTransaction > 0){
            this.balance += amount;
            this.limitTransaction -= amount;
            console.log(`O novo saldo da conta é: R$ ${this.balance}`);
            console.log(`Resta R$ ${this.limitTransaction} para realizar suas transações.`)
        } else {
            console.log("Você ultrapassou o valor do seu limite de transações.");
        }
    }
}

module.exports = { GoldAccount };