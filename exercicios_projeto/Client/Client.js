const { StandardAccount } = require('../StandardAccount/StandardAccount')
const { GoldAccount } = require('../GoldAccount/GoldAccount')
const { PremiumAccount } = require('../PremiumAccount/PremiunAccount');
const { Account } = require('../Account/Account');

class Client { 
    #name;
    #cpf;
    #income;
    

    constructor( name, cpf, income, agencyNumber, accountNumber){
        this.#name = name;
        this.#cpf = cpf;
        this.#income = income;

        if(income < 5000){
            this.account = new StandardAccount(agencyNumber, accountNumber)
        }else if(income > 18000){
            this.account = new PremiumAccount(agencyNumber, accountNumber)
        }else{
            this.account = new GoldAccount(agencyNumber, accountNumber)
        }


    }
    get cpf(){
        return this.#cpf
    }
    get name(){
        return this.#name
    }
    get income(){
        return this.#income
    }
    set income(newIncome){
        this.#income = newIncome;
    }

    typeAccount(){
        if(this.income < 5000){
            return 'Standard';
        }else if(this.income < 18000){
            return 'Gold'
        }else{
            return 'Premium'
        }
    }

}

module.exports = { Client }

// const client1 = new Client('Yela', 708, 4800, 'Money Bank', 112)
const client2 = new Client('Eva', 757, 7000, 'Money Bank', 113)


// const client3 = new Client('Luna', 654, 27000, 'Money Bank', 114)
// // client1.account.deposit(2000)
client2.account.deposit(20000)

// // client1.account.transferTo(client2.account, 500)
// // console.log(client1.account.balance)
// console.log(client2.account)
// console.log(client3.account)
// console.log(client3.account.accountNumber)
// console.log(client3.name)
// // client1.account.registerKeysPix('cpf', 708)
// // client1.account.registerKeysPix('email', 'yelitza@mock.com')
client2.account.withdrawal(5000)
client2.account.withdrawal(5000)
console.log(client2.account.balance)
