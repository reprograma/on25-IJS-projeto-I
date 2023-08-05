class Account {
  accountNumber;
  agency;
  #balance;
  pixKeys;
  income;
  static createdAccounts = [];

  constructor(accountNumber, agency) {
    this.accountNumber = accountNumber;
    this.agency = agency;
    this.pixKeys = {
      cpf: undefined,
      email: undefined,
      telefone: undefined,
    };
    this.constructor.createdAccounts.push(this);
  }
}

const account1 = new Account(123, 4567 - 8);
const account2 = new Account(345, 9876 - 8);
// console.log(account1);
// console.log(account2);

console.log(Account.createdAccounts);
