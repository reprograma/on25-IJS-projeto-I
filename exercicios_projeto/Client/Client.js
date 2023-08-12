const { Account } = require('../Account/Account');

class Client extends Account {
    #nome;
    #email;
    #income;
    #cpf;
  
    constructor(accountNumber, agency, balance, type, nome, email, income, cpf) {
      super(accountNumber, agency, balance, type, income);
      this.#nome = nome;
      this.#email = email;
      this.#income = income;
      this.#cpf = cpf;
    }
  
    // Getter e Setter para nome
    get nome() {
      return this.#nome;
    }
  
    set nome(newNome) {
      this.#nome = newNome;
    }
  
    // Getter e Setter para email
    get email() {
      return this.#email;
    }
  
    set email(newEmail) {
      this.#email = newEmail;
    }
  
    // Getter e Setter para income
    get income() {
      return this.#income;
    }
  
    set income(newIncome) {
      this.#income = newIncome;
    }
  
    // Getter e Setter para cpf
    get cpf() {
      return this.#cpf;
    }
  
    set cpf(newCpf) {
      this.#cpf = newCpf;
    }

    getCategory() {
        if (this.#income < 5000) {
          return 'Standard';
        } else if (this.#income < 18000) {
          return 'Gold';
        } else {
          return 'Premium';
        }
      }
  }

  // accountNumber, agency, balance, type, nome, email, income, cpf
  
  const client1 = new Client ('123456', '321', 6000, 'Gold', 'Michele', 'm@m.com', 20000, '1234567890')
  console.log (client1.getCategory())