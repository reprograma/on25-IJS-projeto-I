const Client = require("./Client");

class Account {
  #client;
  #bank;
  #balance;
  #transactionThreshold;
  #accType;
  #pixKeys;
  static lowIncomeThreshold = 5000;
  static highIncomeThreshold = 18000;

  constructor(client, bank) {
    this.#client = client;
    this.#bank = bank;
    this.#balance = 0;
    this.#pixKeys = { email: null, cpf: null, phone: null, random: [] };

    this.#setAccType();
    this.#bank.pushAcc(this);
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
  get transactionThreshold() {
    return this.#transactionThreshold;
  }

  get typeAcc() {
    return this.#accType;
  }
  get pixKeys() {
    return this.#pixKeys;
  }

  #setAccType() {
    if (!(this.#client instanceof Client)) {
      throw new Error("Não é uma Client");
    }

    if (this.#client.monthlyIncome < this.constructor.lowIncomeThreshold) {
      this.#transactionThreshold = 1000;
      this.#accType = "Standard";
    } else if (
      this.#client.monthlyIncome >= this.constructor.lowIncomeThreshold &&
      this.#client.monthlyIncome < this.constructor.highIncomeThreshold
    ) {
      this.#transactionThreshold = 5000;
      this.#accType = "Gold";
    } else if (
      this.#client.monthlyIncome >= this.constructor.highIncomeThreshold
    ) {
      this.#transactionThreshold = Number.POSITIVE_INFINITY;
      this.#accType = "Premium";
    }
  }
  deposit(amount) {
    if (typeof amount === "string" || typeof amount === "boolean") {
      throw new Error(
        "Não é possivel depositar valores que nao sejam numeros inteiros"
      );
    }
    if (amount > 0) {
      this.#balance += amount;
      console.log(`Foi depositado ${amount} e ficou ${this.#balance}`);
      return "Foi feito o deposito!";
    } else {
      throw new Error("Não é possivel depositar valores negativos");
    }
  }
  draw(amount) {
    if (typeof amount === "string" || typeof amount === "boolean") {
      throw new Error(
        "Não é possivel retirar (sacar) valores que nao sejam numeros inteiros"
      );
    }

    if (amount > this.#balance) {
      throw new Error("Erro valor de retirada maior do que o balance");
    }

    if (amount > 0) {
      this.#balance -= amount;
      console.log(`Você sacou ${amount} e ficou ${this.#balance}`);
      return "Saque feito!";
    } else {
      throw new Error("Não é possivel retirar (sacar) valores negativos");
    }
  }

  tedTransfer(acc, cpf, amount) {
    if (!(acc instanceof Account)) {
      throw new Error("Erro Não é uma conta");
    }
    if (amount > this.#balance) {
      throw new Error("Erro valor amount maior do que o balance");
    }
    if (amount > this.#transactionThreshold) {
      console.log(
        `Valor ${amount} é mais do que o permitido diario.\nValor permitido ${
          this.#transactionThreshold
        }`
      );
      throw new Error("Erro valor amount maior do que o permitido");
    }
    if (acc.#client.cpf != cpf) {
      throw new Error("Erro cpf não esta certo");
    }
    this.#transactionThreshold -= amount;
    this.#balance -= amount;
    acc.deposit(amount);
    console.log("tranzição feita!");
    return "Transferencia via TED feita";
  }
  createPixKey(option) {
    switch (option) {
      case "email":
        if (this.#pixKeys.email == null) {
          this.#pixKeys.email = this.#client.email;
          console.log("Criação chave pix com email criada com sucesso!");
          return "Criada chave pix";
        } else {
          console.log(`Você já criou com email`);
          throw new Error("Erro chave pix repetida");
        }
        break;

      case "phone":
        if (this.#pixKeys.phone == null) {
          this.#pixKeys.phone = this.#client.phone;
          console.log("Criação chave pix com phone criada com sucesso!");
          return "Criada chave pix";
        } else {
          console.log(`Você já criou com phone`);
          throw new Error("Erro chave pix repetida");
        }
        break;

      case "cpf":
        if (this.#pixKeys.cpf == null) {
          this.#pixKeys.cpf = this.#client.cpf;
          console.log("Criação chave pix com cpf criada com sucesso!");
          return "Criada chave pix";
        } else {
          console.log(`Você já criou com cpf`);
          throw new Error("Erro chave pix repetida");
        }
        break;

      case "random":
        this.#pixKeys.random.push(
          Math.fround(Date.now() * (1 + Math.random()))
        );
        console.log("Criação chave pix com random criada com sucesso!");
        return "Criada chave pix";
        break;

      default:
        console.log("as opções são email, phone ou cpf");
        throw new Error("Erro de criaçao de chave pix");
    }
  }

  pixTransfer(key, type, bank, amount) {
    if (amount > this.#balance) {
      throw new Error("Erro valor amount maior do que o balance");
    }

    if (amount > this.#transactionThreshold) {
      console.log(
        `Valor ${amount} é mais do que o permitido diario.\\Valor permitido ${
          this.#transactionThreshold
        }`
      );
      throw new Error("Erro valor amount maior do que o permitido");
    }

    const acc = bank.accs.filter((account) => {
      if (type != "random") {
        return account.pixKeys[type] == key;
      } else {
        return account.pixKeys[type].includes(key);
      }
    })[0];

    // console.log(acc);

    if (!(acc.#bank.bankCode == this.#bank.bankCode)) {
      throw new Error("Erro não é o mesmo banco");
    }

    this.#transactionThreshold -= amount;
    this.#balance -= amount;
    acc.deposit(amount);
    console.log("Pix efetuado!");
    return "Pix efetuado";
  }
}

module.exports = Account;
