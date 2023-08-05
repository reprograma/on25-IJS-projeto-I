class Client {
  name;
  #cpf;
  #income;

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

  get accountType() {
    if(this.#income < 5000) {
      return "Standard";
    } else if(this.#income < 18000) {
      return "Gold";
    } else {
      return "Premium"
    }
  }
}

module.exports = Client