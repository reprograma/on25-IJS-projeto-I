const Account = require('./Account');

class Client extends Account {
  constructor(name, monthlyIncome, accountType) {
    super(accountType);
    this.name = name;
    this.monthlyIncome = monthlyIncome;
    this.pixKeys = {
      email: null,
      telefone: null,
      cpf: null,
    };
  }

  registerPixKey(type, key) {
    this.pixKeys[type] = key;
  }
}

module.exports = Client;