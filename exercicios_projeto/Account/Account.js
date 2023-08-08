const { Client } = require("../Client/Client")
class Account {
  client;
  #accountNumber;
  #agency;
  #balance = 0;
  pixKeys;
  // typeOfAccount;

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
    return this.#balance += newAmount;
  }

  registerPixKey(keyType, keyValue) {
    if (keyType !== "cpf" && keyType !== "email" && keyType !== "phone") {
      return `Insira um tipo de chave pix válida!`;
    } else {
      if (this.pixKeys[keyType] !== undefined) {
        return `Chave Pix já cadastrada!`;
      } else {
        if (keyType === "cpf" && typeof keyValue === "number" && keyValue === this.client.cpf) {
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
    this.#balance -= amount;
    return `O seu saldo atual é R$${this.#balance},00.` 
  }

  creditAmount(amount) {
   this.#balance += amount;
   return `O seu saldo atual é R$${this.#balance},00.` 
  }

  transferTo(anotherAccount, amount) {
    if(anotherAccount instanceof Account) {
      if(amount <= this.#balance){
        this.debitAmount(amount);
        anotherAccount.creditAmount(amount);
        return `Transferência de R$${amount},00 realizada com sucesso!`
      } else {
        return `Operação negada. Você não tem saldo suficiente.`
      }
    } else {
      return `Insira uma conta válida!`
    }
  }

 static hasPixKeysRegisteredInCreatedAccount(keyType, keyValue) {
    const pixIndex =  this.createdAccounts.findIndex((element) => element.pixKeys[keyType] === keyValue);

    if (pixIndex >= 0) {
      const clientName = this.createdAccounts[pixIndex].client.name;
      return `Você está transferindo para ${clientName}.`

    } else {
       return `Chave Pix não encontrada.`
    }
  }
}

let client1 = new Client('Laíssa', 132854789658, 'laissa@teste.com', 998789658, 4000)
let account1 = new Account(client1, 123, 45678);


let client2 = new Client('Lucas', 13285478, 'lucas@teste.com', 99878, 6000)
let account2 = new Account(client2, 123, 45656);

account1.registerPixKey('phone', 99141);

account2.registerPixKey('email', 'lucas@test.com');
console.log(Account.createdAccounts)
console.log(account1.client.name)

console.log(Account.hasPixKeysRegisteredInCreatedAccount('email', 'laissa@test.com'))

console.log(Account.hasPixKeysRegisteredInCreatedAccount('phone', 99141))

console.log(Account.hasPixKeysRegisteredInCreatedAccount('email', 'lucas@test.com'))



module.exports = {Account}
