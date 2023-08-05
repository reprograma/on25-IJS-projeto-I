const Account = require("../Account/Account");
const GoldAccount = require("../GoldAccount/GoldAccount");
const PremiumAccount = require("../PremiumAccount/PremiunAccount");
const StandardAccount = require("../StandardAccount/StandardAccount");

class Client {
  name;
  #cpf;
  #income;
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
      account = new StandardAccount(this.#cpf)
    } else if(this.#income < 18000) {
      account = new GoldAccount(this.#cpf)
    } else {
      account = new PremiumAccount(this.#cpf)
    }

    this.account = account;
    return "Account created."
  }
}

module.exports = Client