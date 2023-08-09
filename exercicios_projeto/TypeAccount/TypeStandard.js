const { TypeAccount } = require("./TypeAccount");

class TypeStandard extends TypeAccount {
  transactionLimit = 1000;
}

module.exports = { TypeStandard };

let typeStandard = new TypeStandard();
//console.log(typeStandard);
