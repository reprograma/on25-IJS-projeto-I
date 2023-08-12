const { Client } = require("../Client/Client");
class Account {
  client;
  #accountNumber;
  #agency;
  #balance = 0;
  pixKeys;
  typeOfAccount = "";
  dailyTransactionUsed = 0;
  // Lógica de limite diário de transação será aplicada às Operações debitAmout() /TransferTo() /TransferPixTo()

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

  generateTypeAccount() {
    const clientIncome = this.client.income;

    if (clientIncome <= 4999) {
      return (this.typeOfAccount = "Standard");
    } else if (clientIncome <= 17999) {
      return (this.typeOfAccount = "Gold");
    } else {
      return (this.typeOfAccount = "Premium");
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
    const checkLimite = this.verifyDailyTransactionLimit(amount);

    if (checkLimite !== true) {
      return checkLimite;
    }

    if (amount <= this.#balance) {
      this.#balance -= amount;
      this.dailyTransactionUsed += amount;
      return `O seu saldo atual é R$${this.#balance},00.`;
    } else {
      return `Operação negada. Você não tem saldo suficiente.`;
    }
  }

  creditAmount(amount) {
    this.#balance += amount;
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
        return `Pix de R$${amount},00 realizado com sucesso! Seu saldo atual é de R$${
          this.#balance
        },00`;
      } else {
        return `Saldo indisponível`;
      }
    }
  }

  verifyDailyTransactionLimit(amount) {
    const typeOfAccount = this.generateTypeAccount();

    const dailyLimitStandard = 1000;
    const dailyLimitGold = 5000;

    if (
      (typeOfAccount === "Standard" &&
        this.dailyTransactionUsed + amount > dailyLimitStandard) ||
      (typeOfAccount === "Gold" &&
        this.dailyTransactionUsed + amount > dailyLimitGold)
    ) {
      return `Limite diário atingido.`;
    } else {
      return true;
    }
  }
}

module.exports = { Account };
