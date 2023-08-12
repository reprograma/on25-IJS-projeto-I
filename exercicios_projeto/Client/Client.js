const { Account } = require('../Account/Account')

class Client extends Account {
    name;
    #cpf;    
    #income;
    email;
    phone;

    constructor(agencyNumber, accountNumber ,name, cpf, income, email, phone) {
        //if(!(Client instanceof Account)) {
            //return console.log('Essa pessoa não é cliente.');
       // }
        super(agencyNumber, accountNumber)
        this.name = name;
        this.#cpf = cpf;        
        this.#income = income;
        this.email = email;
        this.phone = phone;        
    }

    get cpf() {
        return this.#cpf;
    }

    get income() {
        return this.#income;
    }

    set income(newIncome) {
        this.#income = newIncome;
    }

    accountType(){
        if(this.#income <= 4999.99) {
            this.type = 'Standard'
            return `Sua conta é do tipo ${this.type}.`;
        } else if (this.#income > 5000 && this.#income <= 17999.99) {
            this.type = 'Gold'
            return `Sua conta é do tipo ${this.type}.`
        } else if (this.#income > 18000) {
            this.type = 'Premium'
            return `Sua conta é do tipo ${this.type}.`
        }
    }

}

/***const client1 = new Client('Ciane', 12345678900, 456, 7000)
console.log(client1)
const client2 = new Client('Maria', 456123789, 856, 8000)
console.log(client2)**/

module.exports = { Client } 