const { Client } = require("../Client/Client")
class Account {
  client;
  #accountNumber;
  #agency;
  #balance = 0;
  pixKeys;
  typeOfAccount = "";
  dailyTransactionUsed = 0;

  static createdAccounts = [];

  constructor(client, accountNumber, agency) {
    if (!(client instanceof Client)) {
      throw new Error("Informe um cliente válido.");
    }

    this.client = client;
    this.#accountNumber = accountNumber;
    this.#agency = agency;
    this.pixKeys = {
      cpf: undefined,
      email: undefined,
      phone: undefined,
    };
    this.constructor.createdAccounts.push(this);
  }

  get accountNumber() {
    return this.#accountNumber;
  }

  get agency() {
    return this.#agency;
  }

  get balance() {
    return this.#balance;
  }

  set balance(newAmount) {
    return (this.#balance += newAmount);
  }

  generateTypeAccount(){
    const clientIncome = this.client.income;

    if(clientIncome <= 4999 ){
      return this.typeOfAccount = "Standard" 
    } else if (clientIncome <=17999) {
      return this.typeOfAccount = "Gold" 
    } else {
      return this.typeOfAccount = "Premium" 
    }
  }

  registerPixKey(keyType, keyValue) {
    if (keyType !== "cpf" && keyType !== "email" && keyType !== "phone") {
      return `Insira um tipo de chave pix válida!`;
    } else {
      if (this.pixKeys[keyType] !== undefined) {
        return `Chave Pix já cadastrada!`;
      } else {
        if (
          keyType === "cpf" &&
          typeof keyValue === "number" &&
          keyValue === this.client.cpf
        ) {
          this.pixKeys[keyType] = keyValue;
          return `Chave Pix: ${keyValue} - do tipo ${keyType}, cadastrada com sucesso!`;
        } else if (keyType === "cpf") {
          return `Cpf diferente do cadastrado no banco de dados do Cliente. Verifique e tente novamente.`;
        }

        if (keyType === "phone" && typeof keyValue === "number") {
          this.pixKeys[keyType] = keyValue;
          return `Chave Pix: ${keyValue} - do tipo ${keyType}, cadastrada com sucesso!`;
        } else if (keyType === "phone") {
          return `Insira um número de telefone válido`;
        }

        if (keyType === "email" && typeof keyValue === "string") {
          this.pixKeys[keyType] = keyValue;
          return `Chave Pix: ${keyValue} - do tipo ${keyType}, cadastrada com sucesso!`;
        } else if (keyType === "email") {
          return `Insira um email válido`;
        }
      }
    }
  }

  debitAmount(amount) {
    if (amount <= this.#balance) {
      this.#balance -= amount;
      return `O seu saldo atual é R$${this.#balance},00.`;
    } else {
      return `Operação negada. Você não tem saldo suficiente.`
    }
  }

  creditAmount(amount) {
    console.log(`oieeee ${this.dailyTransactionUsed} `)
    
    this.#balance += amount;
    this.dailyTransactionUsed += amount;
    return `O seu saldo atual é R$${this.#balance},00.`;
  }

  transferTo(anotherAccount, amount) {
    if (anotherAccount instanceof Account) {
      if (amount <= this.#balance) {
        this.debitAmount(amount);
        anotherAccount.creditAmount(amount);
        return `Transferência de R$${amount},00 realizada com sucesso!`;
      } else {
        return `Operação negada. Você não tem saldo suficiente.`;
      }
    } else {
      return `Insira uma conta válida!`;
    }
  }

  static hasPixKeysRegisteredInCreatedAccount(keyType, keyValue) {
    const pixIndex = this.createdAccounts.findIndex(
      (element) => element.pixKeys[keyType] === keyValue
    );

    if (pixIndex >= 0) {
      return this.createdAccounts[pixIndex];
    } else {
      return null;
    }
  }

  transferPix(keyType, keyValue, amount) {
    if (keyType !== "cpf" && keyType !== "email" && keyType !== "phone") {
      return `Insira um tipo de chave pix válida!`;
    }

    const foundAccount = Account.hasPixKeysRegisteredInCreatedAccount(
      keyType,
      keyValue
    );

    if (foundAccount) {
      if (amount <= this.#balance) {
        this.debitAmount(amount);
        foundAccount.creditAmount(amount);
        return `Pix de R$${amount},00 realizado com sucesso! Seu saldo atual é de R$${this.#balance},00`;
      } else {
        return `Saldo indisponível`;
      }
    }
  }

  verifyDailyTransactionLimit(amount) {
    const typeOfAccount = this.generateTypeAccount();

    const dailyLimitStandard = 1000;
    const dailyLimitGold = 5000;

    if(typeOfAccount === "Standard" && this.dailyTransactionUsed + amount > dailyLimitStandard || typeOfAccount === "Gold" && this.dailyTransactionUsed + amount > dailyLimitGold) {
      return `Limite diário atingido.`;
    } else {
      return true
    }
  }
}

let client1 = new Client('Laíssa', 132854789658, 'laissa@teste.com', 998789658, 1000)
let account1 = new Account(client1, 123, 45678);

let client2 = new Client('Lucas', 13285478, 'lucas@teste.com', 99878, 1000)
let account2 = new Account(client2, 123, 45656);

console.log(account1.dailyTransactionUsed);

console.log(account1.dailyTransactionUsed);

console.log(account1.creditAmount(1050));
console.log(account1.dailyTransactionUsed);
console.log(account1.creditAmount(1050));
account1.creditAmount(1050);
console.log(`${account1.dailyTransactionUsed} Transações diárias usadas`);

// account1.registerPixKey('phone', 99141);

// account2.registerPixKey('email', 'lucas@test.com');
// console.log(Account.createdAccounts)
// account1.creditAmount(500)
// console.log(account2.balance)
// console.log(account1.transferPix('email', 'lucas@test.com', 100))
// console.log(account2.balance)


// console.log(account2.debitAmount(100));
// console.log(account2.debitAmount(100));

module.exports = {Account}
