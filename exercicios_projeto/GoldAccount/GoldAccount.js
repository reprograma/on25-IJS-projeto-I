const { Account } = require ('../Account/Account')

class GoldAccount extends Account {
    transactionLimit = 5000;

    constructor(client, accountNumber, agencyNumber, transactionLimit){
        super(client, accountNumber, agencyNumber)
        this.transactionLimit = transactionLimit
    }
}

module.exports = { GoldAccount }