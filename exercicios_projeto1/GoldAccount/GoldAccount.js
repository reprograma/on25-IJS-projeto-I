const {Account} = require("../Account/Account");
const {Client} = require("../Client/Client");

class GoldAccount extends Account {
  constructor(client, agency, accountNumber, balance) {
    super(agency, accountNumber, balance);
    this.client = client;
    this.income = 17999.99;
    this.dailyTransactionLimit = 5000;
  }
}

//const clienteMirtes = new GoldAccount('Cliente Gold', '002', '67890', 5000);

//console.log("Cliente Gold:");
//console.log(clienteMirtes);

module.exports = {GoldAccount};
