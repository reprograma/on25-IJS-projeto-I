const { Account } = require("./Account");

class StandardAccount extends Account{
    client
    numberAccount
    salary
    LIMIT

    constructor(client, numberAccount, salary) {
        super(client, numberAccount)
        this.salary = (salary >= 0 || salary <= 4999.99)
        this.LIMIT = 1000
    }

    cashWithdrawal(amount){
        super.cashWithdrawal(amount)
        if(!(this.LIMIT >= amount)){
            console.log(`Não foi possível realizar a operação. Seu limite diário para transações é de ${this.LIMIT}`)
            return
        }
    }

    pixTransfer(pixKey, amount){
        super.pixTransfer(pixKey, amount)
        if(!(this.LIMIT >= amount)){
            console.log(`Não foi possível realizar a operação. Seu limite diário para transações é de ${this.LIMIT}`)
            return
        }
    }

    transferTo(anotherAccout, amount){
        super.transferTo(anotherAccout, amount)
        if(!(this.LIMIT >= amount)){
            console.log(`Não foi possível realizar a operação. Seu limite diário para transações é de ${this.LIMIT}`)
            return
        }
    }

}