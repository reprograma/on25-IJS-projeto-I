const { Account } = require ('../Account/Account')

class PremiumAccount extends Account {
    dailyLimit;
    //incomeMax = 17999.99;

    constructor(client, accountNumber, agencyNumber, dailyLimit) {
        super(client, accountNumber, agencyNumber)
        this.dailyLimit = dailyLimit;
    }
}

module.exports = { PremiumAccount }