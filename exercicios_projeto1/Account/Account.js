class Account {
    agency;
    accountNumber;
    balance;
    pixKeys;
    income;
    static all = []

    constructor(agency, accountNumber, balance) {
      this.agency = agency;
      this.accountNumber = accountNumber;
      this.balance = balance;
      this.pixKeys = {
        cpf: undefined,
        email: undefined,
        telefone: undefined,
      };
      Account.all.push(this);
    }
  

    deposit(amount) {
      if (amount <= 0) {
        return false; 
      }
      this.balance += amount;
      return true; 
    }
  
    withdraw(amount) {
      if (amount <= 0) {
        return false;
      }
      if (amount > this.balance) {
        return "Saldo Insuficiênte";
      }
      this.balance -= amount;
      return true; 
    }

    createPixKey(keyType, keyValue) {
        this.pixKeys[keyType] = keyValue;
      }
  
    getClient() {
      return this.client;
    }
  
    getBalance() {
      return this.balance;
    }
}

// Criando contas
const contaElvira = new Account('001', '12345', 1000);
const contaGi = new Account('002', '67890', 2000);

// conta Elvira
console.log(contaElvira.balance); 

contaElvira.deposit(500);
console.log(contaElvira.balance);

contaElvira.withdraw(200);
console.log(contaElvira.balance);

contaElvira.createPixKey('cpf', '123.456.789-10');
console.log(contaElvira.pixKeys.cpf); 

contaElvira.createPixKey('email', 'elvirabruno@gmail.com')
console.log(contaElvira.pixKeys.email, 'teste')

contaElvira.createPixKey('telefone', '(15) 974030492')
console.log(contaElvira.pixKeys.telefone)

console.log(contaElvira)

// Conta Gi
console.log(contaGi.balance);

contaGi.deposit(1000);
console.log(contaGi.balance);

contaGi.withdraw(4000);
console.log(contaGi.balance);

contaGi.createPixKey('cpf', '987.654.321-02');
console.log(contaGi.pixKeys.cpf); 

contaGi.createPixKey('email', 'giovanabruno@gmail.com')
console.log(contaGi.pixKeys.email)

contaGi.createPixKey('telefone', '(15) 981331934')
console.log(contaGi.pixKeys.telefone)

console.log(contaGi)

module.exports = {Account}