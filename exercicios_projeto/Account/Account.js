const Bank = require("../Bank/Bank");

class Account {
  #cpf;
  #balance = 0;
  #pixKeys = [];
  dailyLimit = 0;
  accountType = "";

  constructor(cpf) {
    this.#cpf = cpf
  }

  get cpf() {
    return this.#cpf
  }

  get balance() {
    return this.#balance
  }

  deposit(amount) {
    if(isNaN(amount)) {
      throw new Error("amount is not a number, digit a valid value")
    }
    this.#balance += amount;
    return true
  }

  withdraw(amount) {
    if(amount <= this.#balance && (amount <= this.dailyLimit || this.dailyLimit === null)) {
      this.#balance -= amount;
      return true;
    } else {
      throw new Error("Insufficient balance or exceeding daily limit.");
    }
  }

  transferTo(anotherAccount, cpf, amount) {
    if(!(anotherAccount instanceof Account) || anotherAccount !== Bank.findClientByCPF(cpf)) {
      throw new Error("Account not found, cpf not registered.")
    }
    
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