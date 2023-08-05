const Account = require('../Account/Account');

class GoldAccount extends Account {
  dailyLimit = 5000;
}

module.exports = GoldAccount;