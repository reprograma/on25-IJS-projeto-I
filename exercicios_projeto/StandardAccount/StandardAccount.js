const Account = require('../Account/Account');

class StandardAccount extends Account {
  dailyLimit = 1000;
}

module.exports = StandardAccount;