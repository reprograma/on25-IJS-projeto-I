const Account = require("../Account/Account");

class GoldAccount extends Account {
  constructor(accountNumber, agency, balance) {
    super(accountNumber, agency, balance, "Gold"); // Adicionando o tipo de conta
    this.limit = 5000;
  }

  // Métodos específicos da classe GoldAccount
}

module.exports = GoldAccount;
