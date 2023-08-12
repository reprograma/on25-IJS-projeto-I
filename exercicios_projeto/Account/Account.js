class Account {    // cadastro de clientes de acordo com a categorização do tipo de conta
     #accountNumber;
     #agency;
     #balance;
     type;

     static all = [] // forma estatica de manter o rastreamento e todas as instancias da classe account 


     constructor(accountNumber, agency, balance, type) {
        this.#accountNumber = accountNumber;
        this.#agency = agency;
        this.#balance = balance;
        this.type = type;
        this.pix = {
            email: '',
            telephone: '',
            cpf: '',
          };
          Account.all.push(this);
      }

      // getters e setters dos metodos privados

      get accountNumber() {
        return this.#accountNumber;
      }
    
      set accountNumber(newAccountNumber) {
        this.#accountNumber = newAccountNumber;
      }

      get agency() {
        return this.#agency;
      }
    
      set agency(newAgency) {
        this.#agency = newAgency;
      }

      get balance() {
        return this.#balance;
      }
    
      set balance(newBalance) {
        this.#balance = newBalance;
      }


       // Método para cadastrar chave PIX
      registerPix(email, telephone, cpf) {
        this.pix.email = email;
        this.pix.telephone = telephone;
        this.pix.cpf = cpf;
  }
      withdraw(amount) {
        if (amount <= 0) {
          throw new Error('O valor de saque deve ser maior que zero.');
        }
        if (amount > this.balance) {
          throw new Error('Saldo insuficiente para efetuar o saque.');
        }
        this.balance -= amount;
        return amount;
    }
       // Método para efetuar transferência
       transfer(targetAccount, amount) {
         if (amount <= 0) {
           throw new Error('O valor de transferência deve ser maior que zero.');
         }
         if (amount > this.balance) {
           throw new Error('Saldo insuficiente para efetuar a transferência.');
         }
         this.balance -= amount;
         targetAccount.deposit(amount);
    }

      // Método para efetuar depósito
      deposit(amount) {
        if (amount <= 0) {
          throw new Error('O valor de depósito deve ser maior que zero.');
        }
        this.balance += amount;
    }

     // Método para efetuar pagamento via PIX
     pixPayment(amount) {
       if (amount <= 0) {
         throw new Error('O valor do PIX deve ser maior que zero.');
       }
       if (amount > this.balance) {
         throw new Error('Saldo insuficiente para efetuar o PIX.');
       }
       this.balance -= amount;
       return amount;
    }

    

}

module.exports = {Account}