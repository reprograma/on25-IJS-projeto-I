class Client {
  name;
  #cpf;
  #email;
  #phone;
  #income;

  constructor(name, cpf, email, phone, income) {
    this.name = name;
    this.#cpf = cpf;
    this.#email = email;
    this.#phone = phone;
    this.#income = income;
  }

  get cpf() {
    return this.#cpf;
  }

  get email() {
    return this.#email;
  }

  get phone() {
    return this.#phone;
  }

  get income() {
    return this.#income;
  }

  set income(newAmount) {
    return (this.#income = newAmount);
  }
}

module.exports = { Client };
