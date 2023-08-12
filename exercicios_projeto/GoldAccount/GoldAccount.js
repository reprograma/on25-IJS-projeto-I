const { Account } = require ('../Account/Account')

class GoldAccount extends Account {
    dailyLimit = 5000;

    constructor(client, accountNumber, agencyNumber, dailyLimit) {
        super(client, accountNumber, agencyNumber)
        this.dailyLimit = dailyLimit;
    }
}

module.exports = { GoldAccount }