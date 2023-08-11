const { Account } = require('../Account/Account');


class StandardAccount extends Account{
    transactionLimit;
    totalTransaction;


    constructor(agencyNumber, accountNumber){
        super(agencyNumber, accountNumber);
        this.transactionLimit = 1000;
        this.totalTransaction = 0;
    }
    
    withdrawal(amount){
        if(this.totalTransaction + amount > this.transactionLimit){
            return 'O valor excede seu limite de transações diarias.';
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


module.exports = { StandardAccount }




