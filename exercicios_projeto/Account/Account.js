class Account {
    agency
    accountNumber
    type
    balance
    dailyAmountTranfered

    static allAcounts = []

    constructor(agency, accountNumber){
        this.agency = agency
        this.accountNumber = accountNumber
        this.type = ""
        this.balance = 0
        this.dailyAmountTranfered = 0

        Account.allAcounts.push(this) // a cada instância é adicionada a lista estática de allAccounts
    }

    createPixKey(){
       this.client.key = this.client.cpf
    }
   
   withDrawal(amount){
    this.balance -= amount
    this.dailyAmountTranfered += amount
   }
   transfer(bankAccount, cpf, amount){
    this.balance -=amount
    `Sua transferência foi realizada para ${bankAccount} com o cpf ${cpf}`
    this.dailyAmountTranfered += amount
   }
   deposit(amount){
    this.balance += amount
    this.dailyAmountTranfered += amount
   }
}

const account1 = new Account (1, 1)
console.log(account1)
account1.deposit(5000)
console.log(account1)
account1.withDrawal(1000)
console.log(account1)
console.log(Account.allAcounts)
module.exports = { Account, account1}