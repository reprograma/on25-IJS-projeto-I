const Bank = require("../Bank/Bank");

class Account {
  client;
  #balance = 0;
  dailyLimit = 0;
  #pixKeys = [];

  constructor(client) {
    this.client = client;
  }

  get balance() {
    return this.#balance
  }

  deposit(amount) {
    this.#balance += amount;
    return true
  }

  withdraw(amount) {
    if(amount <= this.#balance || amount <= this.dailyLimit) {
      this.#balance -= amount;
      return true;
    } else {
      throw new Error("Insufficient balance or exceeding daily limit.");
    }
  }

  transferTo(anotherAccount, amount) {
    if(this.withdraw(amount)) {
      anotherAccount.deposit(amount);
      return true
    } else {
      throw new Error("Transfer failed.");
    }
  }

  registerPixKey(keyType, value) {
    if (keyType === "email" || keyType === "cpf" || keyType === "phone") {
      const pixKey = { keyType, value };
      this.pixKeys.push(pixKey);
      return true
    } else {
      throw new Error("Invalid key type. Only email, cpf, and phone are allowed.");
    }
  }

  get pixKeys() {
    return this.#pixKeys
  }

  transferPix(destPixKey, amount) {
    const destinationAccount = Bank.findAccountByPixKey(destPixKey);
    if(!destinationAccount) {
      throw new Error("Destination account not found.")
    }

    if(this.withdraw(amount)) {
      destinationAccount.deposit(amount);
      return true
    } else {
      throw new Error("Transfer failed. Insufficient balance or exceeding daily limit.");
    }
  }
}

module.exports = Account