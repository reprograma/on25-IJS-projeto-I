const { Client } = require('../Client/Client');

class Account {
    client;
    #accountNumber;
    #agencyNumber;
    #balance = 0;
    pixKeys;

    static all = []

    constructor(client, accountNumber, agencyNumber) {
      if(!(client instanceof Client)) {
        return console.log('Cliente inválido. Tente novamente.')
        }
      this.client = client;
      this.#accountNumber = accountNumber;
      this.#agencyNumber = agencyNumber;
      this.pixKeys = {
        cpf: undefined,
        email: undefined,
        phone: undefined
      };
      Account.all.push(this)
  }

  get accountNumber() {
    return this.#accountNumber
  }
  
  get agencyNumber() {
    return this.#agencyNumber
  }
  
  get balance() {
    return this.#balance
  }

  set balance(newBalance) {
    this.#balance = newBalance;
}

  deposit(amount) {
    if (typeof amount === "string" || typeof amount === "boolean") {
      throw new Error ("Não foi possível identificar o valor. Digite um numero inteiro.")
    } 
    if (amount > 0 ) {
      this.#balance += amount
      return `Depósito de R$${amount},00 realizado. Seu novo saldo é de R$${this.#balance},00`
     };
    
}

  withDrawal(amount) {
    if (typeof amount === "string" || typeof amount === "boolean") {
      throw new Error ("Valor inválido para saque")
    } 
    if (amount <= this.balance) {
      this.#balance -= amount
      return `Você sacou o valor de R$${amount},00 - Seu saldo atual é de R$${this.balance},00.`
   } else {
    return "Você não tem saldo suficiente para sacar o valor."
   }
  }

  transferTo(anotherAccount, amount) {
    if(!(anotherAccount instanceof Account)) {
       return `Erro - Conta inválida.`
    }   if (amount > this.balance) {
      return `Saldo insuficiente para realizar transferência. Saldo disponível: R$ ${this.balance},00`;
    } else {
      this.#balance -=amount
      anotherAccount.deposit(amount);
    return `A sua transferência no valor de R$ ${amount},00 realizada.`;
    }
  }


  transferPix(amount, pixKey) {
    if (pixKey in this.pixKeys) {
          if (amount > this.#balance) {
          console.log(`Saldo insuficiente para realizar o pix. Saldo disponível: R$ ${this.balance},00`);
        } else {
          this.#balance -=amount
          anotherAccount.deposit(amount);
        console.log(`O pix no valor de R$ ${amount},00 foi realizado.`);
        }
      } else {
        return "Chave pix inválida"
      }

    }
}


module.exports = { Account }