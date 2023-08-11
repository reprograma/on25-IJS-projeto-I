const Account = require("./../Account/Account");

class PremiumAccount extends Account {
  constructor(client) {
    super(client);
    this.dailyTransactionLimit = Infinity; // No limit for premium account
  }
}

module.exports = PremiumAccount;
