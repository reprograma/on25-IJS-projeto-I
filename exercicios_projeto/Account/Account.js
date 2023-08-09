const { Client } = require("../Client/Client");

class Account {
  client;
  numberAccount;
  agencyNumber;
  #pixKey;
  balance;
  qntTransactionValue;
  MAX_TRANSACTION_VALUE;
  static all = [];

  constructor(client, numberAccount, agencyNumber) {
    if (!(client instanceof Client)) {
      return new Error("Informe um cliente válido");
    }
    this.client = client;
    this.numberAccount = numberAccount;
    this.agencyNumber = agencyNumber;
    this.#pixKey = [];
    this.balance = this.client.salary;
    this.qntTransactionValue = 0;
    this.MAX_TRANSACTION_VALUE = this.client.typeAccount.transactionLimit;
    Account.all.push(this);
  }

  get pixKey() {
    return this.#pixKey;
  }

  set pixKey(pixKey) {
    this.#pixKey.push(pixKey);
  }

  checkTransactionLimitValue(amount) {
    if (this.MAX_TRANSACTION_VALUE === 1000 ||
        this.MAX_TRANSACTION_VALUE === 5000) {
      this.qntTransactionValue += amount;
      if (this.qntTransactionValue >= this.MAX_TRANSACTION_VALUE) {
        throw new Error(
          `Operação cancelada, você atingiu limite de transação diário.`
        );
      }
      console.log(
        `Faltam: R$ ${this.MAX_TRANSACTION_VALUE - this.qntTransactionValue} pra atingir seu limite de transição diário.`
      );
    }
    return;
  }

  alertOperation(amount, operation) {
    console.log(
      `${operation}: R$ ${amount} realizado. Agora seu saldo é de: R$ ${this.balance}.`
    );
  }

  withdrawal(amount) {
    if (amount > this.balance) {
      throw new Error(
        `Operação cancelada, valor solicitado maior que saldo atual.`
      );
    }
    this.checkTransactionLimitValue(amount);
    this.balance -= amount;
    this.alertOperation(amount, "Saque de");
  }

  deposit(amount) {
    this.checkTransactionLimitValue(amount);
    this.balance += amount;
    this.alertOperation(amount, "Depósito de");
  }

  transferTo(anotherAccount, anotherCPF, amount) {
    if (!(anotherAccount instanceof Account && anotherCPF === anotherAccount.client.cpf)) {
      throw new Error(`Operação cancelada. Informe uma conta válida.`);
    }
    if (amount > this.balance) {
      throw new Error(
        `Operação cancelada, valor solicitado maior que saldo atual.`
      );
    }
    this.checkTransactionLimitValue(amount);
    this.balance -= amount;
    anotherAccount.balance += amount;
    this.alertOperation(amount, "Transferência de");
  }
  transferToPix(pixKey, amount) {
    this.checkTransactionLimitValue(amount);
    const targetAccount = this.findAccountByPixKey(pixKey);
    if (targetAccount) {
      if (amount > this.balance) {
        throw new Error(
          `Operação cancelada, valor solicitado maior que saldo atual.`
        );
      }
      this.balance -= amount;
      targetAccount.balance += amount;
      this.alertOperation(amount, "Transferência de");
    }
  }

  findAccountByPixKey(pixKey) {
    for (const account of Account.all) {
      if (account.pixKey.includes(pixKey)) {
        return account;
      }
    }
    throw new Error("Conta não encontrada.");
  }
}

module.exports = { Account };