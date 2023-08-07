const Client = require("./Client");
const Bank = require("./Bank");

class Account {
  #client;
  #bank;
  #balance;
  #transitionThreshold;
  #typeAcc;
  #keyPix;
  constructor(client, bank) {
    this.#client = client;
    this.#bank = bank;
    this.#balance = 0;
    this.#transitionThreshold;
    this.#typeAcc;
    this.#keyPix = [];

    this.constructor.checkTypeAcc();
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
  get transitionThreshold() {
    return this.#transitionThreshold;
  }
  get typeAcc() {
    return this.#typeAcc;
  }
  get keyPix() {
    return this.#keyPix;
  }
  static checkTypeAcc() {
    if (!(this.client instanceof Client)) {
      return new Error("Não é uma cliente");
    }
    if (this.#client.monthlyIncome > 4999.9) {
      this.#transitionThreshold = 1000;
      this.typeAcc = "Standard";
    } else if (
      this.#client.monthlyIncome <= 5000 &&
      this.#client.monthlyIncome > 17999.9
    ) {
      this.#transitionThreshold = 5000;
      this.#typeAcc = "Gold";
    } else if (this.#client.monthlyIncome <= 18000) {
      this.#transitionThreshold = "unlimited";
      this.#typeAcc = "Premium";
    }
  }
  deposit(amount) {
    this.#balance += amount;
    console.log(`Foi depositado ${amount} e ficou ${this.#balance}`);
  }
  draw(amount) {
    if (amount > this.#balance) {
      return new Error("Erro valor amount maior do que o balance");
    }
    this.#balance -= amount;
    console.log(`Você sacou ${amount} e ficou ${this.#balance}`);
  }

  tedTransfer(acc, cpf, amount) {
    if (!(acc instanceof Account)) {
      return new Error("Erro Não é uma conta");
    }
    if (amount > this.#balance) {
      return new Error("Erro valor amount maior do que o balance");
    }
    if (amount > this.#transitionThreshold) {
      console.log(
        `Valor ${amount} é mais do que o permitido diario.\\Valor permitido ${
          this.#transitionThreshold
        }`
      );
      return new Error("Erro valor amount maior do que o permitido");
    }
    if (acc.#client.cpf != cpf) {
      return new Error("Erro cpf não esta certo");
    }
    this.#transitionThreshold -= amount;
    this.this.#balance -= amount;
    acc.deposit(amount);
    console.log("tranzição feita!");
  }
  createKeyPix(opition) {
    let e = 0;
    let p = 0;
    let c = 0;
    if (e == 1 || p == 1 || c == 1) {
      console.log(`Você já criou com ${opition}`);
      return new Error("Erro chave pix repetida");
    }
    if (opition == "email" && e == 0) {
      e++;
      this.keyPix.push(this.#client.email);
    } else if (opition == "phone" && p == 0) {
      p++;
      this.keyPix.push(this.#client.phone);
    } else if (opition == "cpf" && c == 0) {
      c++;
      this.keyPix.push(this.#client.cpf);
    } else {
      console.log("as opções são email, phone ou cpf");
      return new Error("Erro de criaçao de chave pix");
    }
  }

  pix(acc, key, amount) {
    if (!(acc instanceof Account)) {
      return new Error("Erro Não é uma conta");
    }
    if (amount > this.#balance) {
      return new Error("Erro valor amount maior do que o balance");
    }
    if (amount > this.#transitionThreshold) {
      console.log(
        `Valor ${amount} é mais do que o permitido diario.\\Valor permitido ${
          this.#transitionThreshold
        }`
      );
      return new Error("Erro valor amount maior do que o permitido");
    }
    if (!(acc.#bank.bankCode == this.#bank.bankCode)) {
      return new Error("Erro não é o mesmo banco");
    }

    if (!acc.keyPix.includes(key)) {
      return new Error("Erro chave de pix errado");
    }
    this.#transitionThreshold -= amount;
    this.#balance -= amount;
    acc.deposit(amount);
    console.log("Pix efetuado");
  }
}

module.exports = Account;
