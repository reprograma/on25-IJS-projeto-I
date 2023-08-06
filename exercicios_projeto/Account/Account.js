const { Client } = require("../Client/Client")
class Account {
  client;
  #accountNumber;
  #agency;
  #balance;
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

  get balace() {
    return this.#balance;
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
  
}


module.exports = {Account}
