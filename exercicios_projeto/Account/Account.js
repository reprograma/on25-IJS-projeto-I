class Account {
    constructor(accountNumber, agencyNumber, client) {
        this.accountNumber = accountNumber
        this.agencyNumber = agencyNumber
        this.client = client
        this.balance = 0
        this.accountType = undefined
        this.transactionLimit = undefined
        this.pix = []
        this.verifyAccountType()
    }

    generatePixKey(type, key) {
        this.pix.push({Type: type, Key: key})
        console.log(this.pix)
    }

    verifyAccountType() {
        const STANDARD = this.client.monthlyIncome < 5000
        const GOLD = this.client.monthlyIncome >= 5000 && this.client.monthlyIncome < 18000;
        const PREMIUM = this.client.monthlyIncome >= 18000

        if(STANDARD){
            this.accountType = 'Standard'
            this.transactionLimit = 1000
        } else if(GOLD) {
            this.accountType = 'Gold'
            this.transactionLimit = 5000
        } else if (PREMIUM) {
            this.accountType = 'Premium'
        }
    }

    withDrawal(amount) {
        console.log(this.balance -= amount)
    }

    deposit(amount){
        this.balance += amount
    }

    transferTo(account, client, accountNumber, cpf, amount) {
        if(!(account instanceof Account)){
            console.log('Please insert a valid account.')
        } 

        if(!(client instanceof Client)) {
            console.log('Please insert a valid client.')
        }
        
        if(account.accountNumber === accountNumber && client.cpf === cpf) {
            this.balance -= amount
            account.balance += amount
            console.log(`You have transferred $ ${amount} successfully. You now have ${this.balance}`)
        }    
    }

    pixOperation(amount, pixKey, account) {
        if(amount > this.balance) {
            console.log("You don't have enough balance to perform this operation!")
        } else if(account.pix.some(item => item.Key === pixKey)){
            this.balance -= amount
            account.balance += amount
            console.log(`Your new balance is ${this.balance}`)
        }
    }
}

module.exports = { Account }