const { TypeAccount } = require("./TypeAccount");
class TypeGold extends TypeAccount {
  transactionLimit = 5000;
}

module.exports = { TypeGold };