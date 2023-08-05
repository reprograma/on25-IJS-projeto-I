class Account {
    agency
    accountNumber
    type
    salary

    static allAcounts = []

    constructor(agency, accountNumber){
        this.agency = agency
        this.accountNumber = accountNumber
        this.type = ""
        this.salary = 0

        Account.allAcounts.push(this) // a cada instância é adicionada a lista estática de allAccounts
    }

    createPix(){
        
    }
   
   // função para saque
   // função para transferência
   // função para depósito
}

const account1 = new Account (1, 1)
console.log(account1)
console.log(Account.allAcounts)
module.exports = { Account, account1}