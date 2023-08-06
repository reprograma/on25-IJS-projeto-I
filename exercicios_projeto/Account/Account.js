const { Client } = require("../Client/Client")
class Account {
  client;
  #accountNumber;
  #agency;
  #balance;
  pixKeys;

  static createdAccounts = [];

  constructor(client, accountNumber, agency) {
    if (!(client instanceof Client)) {
      throw new Error("Informe um cliente válido.");
    }

    this.client = client;
    this.#accountNumber = accountNumber;
    this.#agency = agency;
    this.pixKeys = {
      cpf: undefined,
      email: undefined,
      telefone: undefined,
    };
    this.constructor.createdAccounts.push(this);
  }

  get accountNumber() {
    return this.#accountNumber;
  }

  get agency() {
    return this.#agency;
  }

  get balace() {
    return this.#balance;
  }
}

module.exports = {Account}
