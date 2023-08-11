class Account {
  constructor(client) {
    this.client = client;
    this.balance = 0;
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    if (this.balance >= amount) {
      this.balance -= amount;
    }
  }
}

module.exports = Account;
