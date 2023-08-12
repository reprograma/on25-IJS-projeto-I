const {Account}= require("../Account/Account");
//const client = require("../Client/Client.js");
class StandardAccount extends Account {
  constructor(client, agency, accountNumber, balance) {
    super(agency, accountNumber, balance);
    this.client = client;
    this.income = 4999.99; // Renda mensal da conta Standard
    this.dailyTransactionLimit = 1000; // Limite de transação diária
  }
}

module.exports = {StandardAccount};
