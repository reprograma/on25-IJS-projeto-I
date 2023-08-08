class Bank {
  static clients = [];

  static addClient(client) {
    this.clients.push(client);
  }

  static findClientByCPF(cpf) {
    return this.clients.find((client) => client.cpf === cpf);
  }

  static findAccountByPixKey(pixKey) {
    const foundClient = this.clients.find(client => {
      return client.account.pixKeys.some(key => key.value === pixKey);
    })

    return !foundClient ? null : foundClient.account;
  }
}

module.exports = Bank;