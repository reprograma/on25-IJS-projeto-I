const { Account } = require('../Account/Account')

class StandardAccount extends Account {
    static limitTransfer = 1000;
    #transferValueTotal;

    constructor(client, accountNumber, agencyNumber){
        super(client, accountNumber, agencyNumber),
        this.#transferValueTotal = 0;

        if(this.client.salary >= 5000){
            Account.accountCreated = Account.accountCreated.filter(account => account.client !== this.client);
            return new Error(`Sorry, you can't created a Standard Account.\nTo have a Standard account, the monthly income must be lower than $5000.`);
        }
    }

    get transferValueTotal(){
        return this.#transferValueTotal
    }

    set transferValueTotal(newTranferValue){
        this.#transferValueTotal = newTranferValue
    }

    transferTo(anotherAccount, cpfAnotherCount, amount){
        if(this.#transferValueTotal + amount <= StandardAccount.limitTransfer){
            let transferResult = super.transferTo(anotherAccount, cpfAnotherCount, amount);
            if(transferResult !== false){
                this.#transferValueTotal += amount;
                return true;
            } else {
                return false;
            }
        } else {
            console.log(`The maximum account balance for transfers is: $${StandardAccount.limitTransfer}.\nToday, you've reached $${this.#transferValueTotal}.`);
            return false;
        }
    }
}

module.exports = { StandardAccount }