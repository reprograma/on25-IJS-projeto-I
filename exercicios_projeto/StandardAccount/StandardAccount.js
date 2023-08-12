const { Account } = require ('../Account/Account')

class StandardAccount extends Account {
    dailyLimit = 1000;
    incomeMax = 4999.99;

    constructor(client, accountNumber, agencyNumber, dailyLimit){
        super(client, accountNumber, agencyNumber);
        this.dailyLimit = dailyLimit;
    }
}

module.exports = { StandardAccount }