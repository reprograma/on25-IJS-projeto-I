const Account = require('../Account/Account');

class PremiumAccount extends Account {
  dailyLimit = null;
}

module.exports = PremiumAccount;