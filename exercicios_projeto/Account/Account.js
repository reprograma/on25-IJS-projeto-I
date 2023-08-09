class Account {
    client;
	accountNumber;
	agencyNumber;
    pixKey;
	#balance = 0;
    static accountCreated = [];

    constructor(client, accountNumber, agencyNumber){
        this.client = client,
        this.accountNumber = accountNumber,
        this.agencyNumber = agencyNumber,
        this.pixKey = {
            cpf: undefined,
            phone: undefined,
            email: undefined
        }
        Account.accountCreated.push(this)
    }

    get balance(){
        return this.#balance
    }

    set balance(newBalance){
        this.#balance = newBalance
    }

    static isBankAccount(account){
        return account instanceof Account
    }

    isValidAmount(amount){
        return amount > 0
    }

    deposit(amount){
        if(this.isValidAmount(amount) == false){
            console.log("Enter a valid amount of money");
            return false;
        }

        this.#balance += amount;
        console.log(`credit $${amount} successfully added. Actual balance: $${this.balance}`)
        return this.balance;
    }

    withdrawal(amount){
        if(this.isValidAmount(amount) == false){
            console.log(`$${amount} is not valid, try again`);
            return false;
        }

        if(this.#balance >= amount){
            this.#balance -= amount;
            console.log(`operation successfully done. Atual balance: $${this.balance}`);
            return this.balance;
        } else {
            console.log(`Error! You don't have $${amount} in your account. Your actual balance: $${this.balance}`)
            return false;
        }
    }

    transferTo(anotherAccount, cpfAnotherCount, amount){
        if(Account.isBankAccount(anotherAccount) == false){
            return false;
        }

        if(anotherAccount.client.cpf !== cpfAnotherCount){
            console.log("Incorrect cpf");
            return false;
        }

        if(this.withdrawal(amount) !== false){
            if(anotherAccount.deposit(amount) !== false) {
                console.log(`Successful transfer $${amount} to ${anotherAccount.client.name}`);
                return true;
            } else {
                return false;
            }
        }
    }

    createPixKey(key, value){
        if(key === "cpf"){
            if(this.client.cpf !== value){
                console.log("Incorrect cpf");
                return false;
            } 
        }

        this.pixKey[key] = value;
        console.log(`Key ${key} added with value ${value}`);
        return true;
    }

    transferWithPixKey(pixKey, pixValue, amount){
        let recipientAccount = Account.accountCreated.find(account => {
            let value = account.pixKey[pixKey];
            return value === pixValue;
        });

        if(!recipientAccount){
            console.log(`Pix key not found`);
            return false;
        }

        if(this.withdrawal(amount) !== false){
            if(recipientAccount.deposit(amount) !== false) {
                console.log(`Successful transfer $${amount} to ${recipientAccount.client.name}`);
                return true
            } else {
                return false;
            }
        } else {
            return false;
        }
    }
}

module.exports = { Account }