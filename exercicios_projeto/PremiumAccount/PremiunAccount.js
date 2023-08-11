const { Account } = require("../Account/Account");

class PremiumAccount extends Account{
    transactionLimit;

    constructor(agencyNumber, accountNumber){
        super(agencyNumber, accountNumber);
        this.transactionLimit = Infinity;
    }
    
}

module.exports = { PremiumAccount }