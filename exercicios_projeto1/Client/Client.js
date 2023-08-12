const {Account} = require  ("../Account/Account")
//const standard = require ("../StandardAccount")
//const gold = require ("../GoldAccount")
//const premium = require ("../PremiumAccount")
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
    if (Account instanceof Account) {
      this.name = name;
      this.cpf = cpf;
      this.account = account;
      this.income = income;

      Client.all.push(this);

      return "Cliente cadastrado";
    } else {
      //throw new Error("dados inválidos");
    }
  }
}
//const cliente1 = new Client ('Elvira', '20335370802', 25420, 30000)
//const cliente2 = new Client ('Giovana', '12345678902', 25000, 3000)
//console.log(Client.all)

module.exports = {Client}