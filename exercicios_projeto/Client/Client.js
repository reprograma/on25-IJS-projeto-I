const { TypeStandard } = require("../TypeAccount/TypeStandard");
const { TypeGold } = require("../TypeAccount/TypeGold");
const { TypePremium } = require("../TypeAccount/TypePremium");
class Client {
  name;
  #cpf;
  salary;
  typeAccount;
  constructor(name, cpf, salary) {
    this.name = name;
    this.#cpf = cpf;
    this.salary = salary;
    this.addTypeAccounts();
  }
  get cpf() {
    return this.#cpf;
  }

  addTypeAccounts() {
    if (this.salary <= 4999.99) {
      this.typeAccount = new TypeStandard();
    } else if (this.salary > 4999.99 && this.salary <= 17999.99) {
      this.typeAccount = new TypeGold();
    } else {
      this.typeAccount = new TypePremium();
    }
  }
}
module.exports = { Client };

