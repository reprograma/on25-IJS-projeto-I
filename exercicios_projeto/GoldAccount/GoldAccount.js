const { Account } = require('../Account/Account')

class GoldAccount extends Account {
    static limitTransfer = 5000;
    #transferValueTotal;

    constructor(client, accountNumber, agencyNumber){
        super(client, accountNumber, agencyNumber),
        this.#transferValueTotal = 0;

        if(this.client.salary < 5000){
            Account.accountCreated = Account.accountCreated.filter(account => account.client !== this.client);
            return new Error(`Sorry, you can't created a Gold Account, your income is compatible with the Standard Account`);
        }

        if(this.client.salary >= 18000){
            Account.accountCreated = Account.accountCreated.filter(account => account.client !== this.client);
            return new Error(`Sorry, you can't created a Gold Account, your income is compatible with the Premiun Account`);
        }
    }

    get transferValueTotal(){
        return this.#transferValueTotal
    }

    set transferValueTotal(newTranferValue){
        this.#transferValueTotal = newTranferValue
    }

    transferTo(anotherAccount, cpfAnotherCount, amount){
        if(this.#transferValueTotal + amount <= GoldAccount.limitTransfer){
            let transferResult = super.transferTo(anotherAccount, cpfAnotherCount, amount);
            if(transferResult !== false){
                this.#transferValueTotal += amount;
                return true;
            } else {
                return false;
            }
        } else {
            console.log(`The maximum account balance for transfers is: $${GoldAccount.limitTransfer}.\nToday, you've reached $${this.#transferValueTotal}.`);
            return false;
        }
    }
}

module.exports = { GoldAccount }