const Account = require("../Account/Account");

class StandardAccount extends Account {
  constructor(accountNumber, agency, balance) {
    super(accountNumber, agency, balance, "Standard"); // Adicionando o tipo de conta
    this.limit = 1000;
  }

  // Métodos específicos da classe StandardAccount
}

module.exports = StandardAccount;
