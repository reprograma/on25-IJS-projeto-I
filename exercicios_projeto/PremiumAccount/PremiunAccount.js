const Account = require("../Account/Account");

class PremiumAccount extends Account {
  constructor(accountNumber, agency, balance) {
    super(accountNumber, agency, balance, "Premium"); // Adicionando o tipo de conta
    this.limit = Infinity; // Sem limite
  }

  // Métodos específicos da classe PremiumAccount
}

module.exports = PremiumAccount;
