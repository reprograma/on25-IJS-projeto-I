const { TypeAccount } = require("./TypeAccount");
class TypePremium extends TypeAccount {
  transactionLimit = "Sem limite de transação.";
}

module.exports = { TypePremium };
