const { Account } = require ('../Account/Account')

class StandardAccount extends Account {
    transactionLimit = 1000;
    incomeMax = 4999.99;

    constructor(client, accountNumber, agencyNumber, transactionLimit){
        super(client, accountNumber, agencyNumber)
        this.transactionLimit = transactionLimit
    }
}

module.exports = { StandardAccount }