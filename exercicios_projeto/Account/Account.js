class Account {
    agency
    accountNumber
    type

    static allAcounts = []

    constructor(agency, accountNumber){
        this.agency = agency
        this.accountNumber = accountNumber
        this.type = ""

        Account.allAcounts.push(this) // a cada instância é adicionada a lista estática de allAccounts
    }

    createPix(){
        
    }

}

const account1 = new Account (1, 1)
console.log(account1)
module.exports = { Account, account1}