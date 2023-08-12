class Bank {
  bankName;
  bankCode;
  accounts;
  constructor(name, code) {
    this.bankName = name;
    this.bankCode = code;
    this.accounts = [];
  }

  pushAcc(account) {
    this.accounts.push(account);
  }
}

module.exports = Bank;
