const { Account } = require("../Account/Account");

class GoldAccount extends Account{
    transactionLimit;
    totalTransaction;


    constructor(agencyNumber, accountNumber){
        super(agencyNumber, accountNumber);
        this.transactionLimit = 5000;
        this.totalTransaction = 0;
    }
    
    withdrawal(amount){
        if(this.totalTransaction + amount > this.transactionLimit){
            console.error('O valor excede seu limite de transações diarias.')
            return;
        }
        super.withdrawal(amount);
        this.totalTransaction += amount;
    }
    transferTo(anotherAccount, amount){
        if(this.totalTransaction + amount > this.transactionLimit){
            console.error('O valor excede seu limite de transações diarias.')
            return;
        }
        super.transferTo(anotherAccount, amount);
        this.totalTransaction += amount;
    }
}

module.exports = { GoldAccount };