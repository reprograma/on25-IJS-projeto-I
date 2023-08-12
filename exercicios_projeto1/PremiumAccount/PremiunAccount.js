const {Account} = require("../Account/Account");
const {Client} = require("../Client/Client");

class PremiumAccount extends Account {
  constructor(client, agency, accountNumber, balance) {
    super(agency, accountNumber, balance);
    this.client = client;
    this.income = 18001; // Renda mensal mínima da conta Premium
    this.dailyTransactionLimit = Infinity; // Sem limite de transação diária
  }
}

module.exports = {PremiumAccount};