const StandardAccount = require("../StandardAccount/StandardAccount");
const GoldAccount = require("../GoldAccount/GoldAccount");
const PremiumAccount = require("../PremiumAccount/PremiunAccount");

class Client {
  constructor(accountNumber, agency, balance, name, cpf, income) {
    this.name = name;
    this.cpf = cpf;
    this.income = income;
    this.account = this.definirTipoDeConta(accountNumber, agency, balance); // Adicionando informações da conta
  }

  definirTipoDeConta(accountNumber, agency, balance) {
    if (this.income >= 18000) {
      return new PremiumAccount(accountNumber, agency, balance);
    } else if (this.income >= 5000) {
      return new GoldAccount(accountNumber, agency, balance);
    } else {
      return new StandardAccount(accountNumber, agency, balance);
    }
  }

  // Métodos específicos da classe Client
  cadastrarChavePix(tipo, valor) {
    this.account.pixKeys[tipo] = valor;
    return true;
  }

  pix(destinatario, valor) {
    if (
      this.account.pixKeys[destinatario.tipo] === destinatario.valor &&
      valor > 0 &&
      valor <= this.account.balance
    ) {
      this.account.balance -= valor;
      destinatario.receberPix(valor);
      return true;
    }
    return false;
  }

  sacar(valor) {
    if (
      valor > 0 &&
      valor <= this.account.balance &&
      valor <= this.account.limit
    ) {
      this.account.balance -= valor;
      return true;
    }
    return false;
  }

  transferir(contaDestino, valor) {
    if (
      contaDestino instanceof Account &&
      valor > 0 &&
      valor <= this.account.balance &&
      valor <= this.account.limit
    ) {
      this.account.balance -= valor;
      contaDestino.realizarDeposito(valor);
      return true;
    }
    return false;
  }

  depositar(valor) {
    if (valor > 0) {
      this.account.realizarDeposito(valor);
      return true;
    }
    return false;
  }
}

module.exports = Client;

// Inicializando um novo cliente
const novoCliente = new Client(
  "123456",
  "789",
  0,
  "Alice",
  "111.222.333-43",
  15000
);

// Criando uma conta para o cliente (note que isso já é feito no construtor)
// A conta será do tipo PremiumAccount devido à renda mensal do cliente

// Cadastrando chaves PIX para o cliente
novoCliente.cadastrarChavePix("cpf", "111.222.333-44");
novoCliente.cadastrarChavePix("email", "alice@example.com");
novoCliente.cadastrarChavePix("telefone", "4999999999");

// Mostrando todos os atributos do novo cliente
console.log("Atributos do novo cliente:", novoCliente);
