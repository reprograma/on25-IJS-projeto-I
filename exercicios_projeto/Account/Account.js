const { Client } = require("../Client/Client");

class Account {
  constructor(client, agencyNumber, accountNumber) {
    this.client = client;
    this.agencyNumber = agencyNumber;
    this.accountNumber = accountNumber;
    this.#saldo = 0;
  }

  #saldo;

  get saldo() {
    return this.#saldo;
  }

  deposito(valor) {
    if (valor <= 0) {
      return "O valor do depósito deve ser maior que zero.";
    }

    this.#saldo += valor;
    console.log(
      `Depósito de ${valor} realizado na conta de ${
        this.client.nome
      }. Saldo atual: ${this.#saldo}`
    );
    return true;
  }

  transferencia(contaDestino, valor) {
    if (valor <= 0) {
      return "O valor da transferência deve ser maior que zero.";
    }

    if (this.client.tipoConta === "Standard" && valor > 1000) {
      return "Valor maior que o seu limite diário.";
    }

    if (this.client.tipoConta === "Gold" && valor > 5000) {
      return "Valor maior que o seu limite diário.";
    }

    if (this.#saldo >= valor) {
      this.#saldo -= valor;
      contaDestino.deposito(valor);
      console.log(`O saldo atual da conta de origem é de R$ ${this.saldo}`);
      return true;
    } else {
      return "Saldo insuficiente.";
    }
  }

  saque(valor) {
    if (valor <= 0) {
      return "O valor do saque deve ser maior que zero.";
    }

    if (this.client.tipoConta === "Standard" && valor > 1000) {
      return "Valor maior que o seu limite diário.";
    }

    if (this.client.tipoConta === "Gold" && valor > 5000) {
      return "Valor maior que o seu limite diário.";
    }

    if (this.#saldo >= valor) {
      this.#saldo -= valor;
      console.log(`O saldo atual da conta é de R$ ${this.saldo}`);
      return true;
    } else {
      return "Saldo insuficiente.";
    }
  }
}

module.exports = { Account };

const client1 = new Client("Bruna", 12345689, 4999.99);
const client2 = new Client("Camila", 987456122, 5000);
const conta1 = new Account(client1, 123, 456);
const conta2 = new Account(client2, 123, 896);

conta2.deposito(1500);
conta2.transferencia(conta1, 1100);
conta2.saque(200);

console.log("Depósito:", conta2.deposito(1500));
console.log("Conta 1:", conta1);
console.log("Conta 2 - Saldo:", conta2.saldo);
