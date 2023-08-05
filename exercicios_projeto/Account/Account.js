class Account {
  client;
  #balance;
  dailyLimit;
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
    }

    return false;
  }

  transferTo(anotherAccount, amount) {
    if(this.withdraw(amount)) {
      anotherAccount.deposit(amount);
      return true
    }

    return false;
  }

  registerPixKey(keyType, value) {
    const pixKey = { keyType, value };
    this.#pixKeys.push(pixKey)
    return true
  }

  get pixKeys() {
    return this.#pixKeys
  }
}

module.exports = Account