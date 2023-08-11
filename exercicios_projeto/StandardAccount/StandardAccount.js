const Account = require("./../Account/Account");

class StandardAccount extends Account {
  constructor(client) {
    super(client);
    this.dailyTransactionLimit = 1000;
  }
}

module.exports = StandardAccount;
