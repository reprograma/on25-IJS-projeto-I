const GoldAccount = require("../GoldAccount/GoldAccount");
const PremiumAccount = require("../PremiumAccount/PremiunAccount");
const StandardAccount = require("../StandardAccount/StandardAccount");

class Client {
  name;
  #cpf;
  #income;
  accountType = "";
  account = null;

  constructor(name, cpf, income) {
    this.name = name;
    this.#cpf = cpf;
    this.#income = income
  }

  get cpf() {
    return this.#cpf
  }

  get income() {
    return this.#income
  }

  registerAccount() {
    let account;

    if(this.#income < 5000) {
      account = new StandardAccount(this.#cpf);
      this.accountType = "Standard";
    } else if(this.#income < 18000) {
      account = new GoldAccount(this.#cpf);
      this.accountType = "Gold";
    } else {
      account = new PremiumAccount(this.#cpf);
      this.accountType = "Premium";
    }

    this.account = account;
    return "Account created."
  }
}

module.exports = Client