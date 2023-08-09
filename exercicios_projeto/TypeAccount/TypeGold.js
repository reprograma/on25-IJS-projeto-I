const { TypeAccount } = require("./TypeAccount");

class TypeGold extends TypeAccount {
  transactionLimit = 5000;
}

module.exports = { TypeGold };

let typeGold = new TypeGold();
//console.log(typeGold);
