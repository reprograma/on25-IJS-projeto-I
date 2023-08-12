const Client = require("./Client");

class Account {
  #client;
  #bank;
  #balance;
  #transactionLimit;
  #accountType;
  static lowIncomeTransactionLimit = 5000;
  static highIncomeRTransactionLimit = 18000;

  constructor(client, bank) {
    this.#client = client;
    this.#bank = bank;
    this.#balance = 0;

    this.#setAccountType();
    this.#bank.pushAccount(this);
  }

  get client() {
    return this.#client;
  }
  get bank() {
    return this.#bank;
  }
  get balance() {
    return this.#balance;
  }
  get transactionLimit() {
    return this.#transactionLimit;
  }
  get accountType() {
    return this.#accountType;
  }

  #setAccountType() {
    if (!(this.#client instanceof Client)) {
      throw new Error("Cliente não encontrado em nossa base de dados");
    }

    if (
      this.#client.monthlyIncome < this.constructor.lowIncomeTransactionLimit
    ) {
      this.#transactionLimit = 1000;
      this.#accountType = "Standard";
    } else if (
      this.#client.monthlyIncome >=
        this.constructor.lowIncomeTransactionLimit &&
      this.#client.monthlyIncome < this.constructor.highIncomeRTransactionLimit
    ) {
      this.#transactionLimit = 5000;
      this.#accountType = "Gold";
    } else if (
      this.#client.monthlyIncome >= this.constructor.highIncomeRTransactionLimit
    ) {
      this.#transactionLimit = Number.POSITIVE_INFINITY;
      this.#accountType = "Premium";
    }
  }

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(
        `Depósito no valor de ${amount} realizado com sucesso! Seu novo saldo é de ${
          this.#balance
        }`
      );
      return "Depósito realizado!";
    } else {
      throw new Error(
        "Não foi possível realizar o depósito. Verifique as informações e tente novamente"
      );
    }
  }

  draw(amount) {
    if (amount > this.#balance) {
      throw new Error(
        "Você não tem saldo suficiente para realizar essa operação."
      );
    }

    if (amount > 0) {
      this.#balance -= amount;
      console.log(
        `Saque no valor de ${amount} realizado com sucesso! Seu novo saldo é de ${
          this.#balance
        }`
      );
      return "Saque realizado com sucesso";
    }
  }

  tedTransference(account, cpf, amount) {
    if (!(account instanceof Account)) {
      throw new Error(
        "Conta não encontrada. Verifique os dados informados e tente novamente."
      );
    }
    if (amount > this.#balance) {
      throw new Error(
        "Você não tem saldo suficiente para realizar essa transação."
      );
    }
    if (amount > this.#transactionLimit) {
      console.log(
        `A transação não pôde ser realizada pois o limite da mesma é maior do que o limite do tipo da sua conta. O valor permitido para transferências da sua conta é de ${this.transactionLimit}`
      );
      throw new Error(
        "Valor solicitado maior do que o disponível para este tipo de conta"
      );
    }
    if (account.#client.cpf != cpf) {
      throw new Error("CPF incorreto. Verifique os dados e tente novamente.");
    }
    this.#transactionLimit -= amount;
    this.#balance -= account.deposit(amount);
    console.log("Transação realizada com sucesso!");
  }
}

module.exports = { Account };
