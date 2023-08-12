class Account {
  constructor(accountNumber, agency, balance, accountType) {
    this.accountNumber = accountNumber;
    this.agency = agency;
    this.balance = balance;
    this.pixKeys = {
      cpf: undefined,
      email: undefined,
      telefone: undefined,
    };
    this.accountType = accountType; // Adicionando o tipo de conta
    Account.all.push(this);
  }

  // Métodos da classe Account
  verificarSaldo() {
    return this.balance;
  }

  realizarDeposito(valor) {
    if (valor > 0) {
      this.balance += valor;
      return true;
    }
    return false;
  }

  realizarSaque(valor) {
    if (valor > 0 && valor <= this.balance) {
      this.balance -= valor;
      return true;
    }
    return false;
  }

  realizarTransferencia(contaDestino, valor) {
    if (valor > 0 && valor <= this.balance) {
      this.balance -= valor;
      contaDestino.realizarDeposito(valor);
      return true;
    }
    return false;
  }
}

Account.all = [];

module.exports = Account;
