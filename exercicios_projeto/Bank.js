class Bank {
  bankName;
  bankCode;
  accs;
  constructor(name, code) {
    this.bankName = name;
    this.bankCode = code;
    this.accs = [];
  }

  pushAcc(acc) {
    this.accs.push(acc);
  }
}

module.exports = Bank;
