const Account = require("../Account/Account");

class Bank {
  static clients = [];

  static addClient(client) {
    this.clients.push(client);
  }

  static createAccount(client) {
    const account = new Account(client);
    client.account = account;

    return account;
  }

  static findAccountByPixKey(pixKey) {
    const foundClient = this.clients.find(client => {
      return client.account.pixKeys.some(key => key.value === pixKey);
    })

    return !foundClient ? null : foundClient.account;
  }
}

module.exports = Bank;