const { Account } = require ('../Account/Account')

class PremiumAccount extends Account {
    transactionLimit;
    incomeMax = 17999.99;

    constructor(client, accountNumber, agencyNumber, transactionLimit){
        super(client, accountNumber, agencyNumber)
        this.transactionLimit = transactionLimit
    }
}

module.exports = { PremiumAccount }