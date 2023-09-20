
const { Account } = require('./Account/Account');
class Client {
  constructor(name, cpf, account, income) {
    this.name = name;
    this.cpf = cpf;
    this.account = account;
    this.income = income;

    Client.all.push(this);
  }

  static all = [];

  cadastrarCliente(name, cpf, account, income) {
    if (account instanceof Account) {
      this.name = name;
      this.cpf = cpf;
      this.account = account;
      this.income = income;

      Client.all.push(this);

      return "Cliente cadastrado";
    } else {
      throw new Error("dados inválidos");
    }
  }
}
