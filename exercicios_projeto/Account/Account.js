class Account {
  constructor(client, accountType) {
    this.client = client;
    this.accountType = accountType;
    this.balance = 0;
    this.transactions = [];
  }

  deposit(value) {
    this.balance += value;
    this.transactions.push(`Depósito: +${value}`);
  }

  withdraw(value) {
    if (value <= this.balance) {
      this.balance -= value;
      this.transactions.push(`Saque: -${value}`);
      return true;
    } else {
      return false;
    }
  }

  transfer(value, destinationAccount) {
    if (value <= this.balance && destinationAccount instanceof Account) {
      this.balance -= value;
      destinationAccount.deposit(value);
      this.transactions.push(`Transferência: -${value} para ${destinationAccount.client.name}`);
      return true;
    } else {
      return false;
    }
  }

  pix(value, pixKey) {
    const destinationAccount = Account.findAccountByPixKey(pixKey);
    if (destinationAccount && value <= this.balance) {
      this.balance -= value;
      destinationAccount.deposit(value);
      this.transactions.push(`PIX: -${value} para ${destinationAccount.client.name}`);
      return true;
    } else {
      return false;
    }
  }

  static findAccountByPixKey(pixKey) {
    // Simulação: Supondo que todas as contas estejam em um array chamado 'allAccounts'
    const allAccounts = [client1.account, client2.account]; // Supondo que client1 e client2 estejam definidos
    for (const account of allAccounts) {
      if (
        account.client.pixKeys.email === pixKey ||
        account.client.pixKeys.telefone === pixKey ||
        account.client.pixKeys.cpf === pixKey
      ) {
        return account;
      }
    }
    return null;
  }
}

module.exports = Account;