const { Account, account1 } = require("../Account/Account")

class Client extends Account {
    name
    cpf
    salary

    constructor(agency, accountNumber, name, cpf, salary){ // não preciso passar o type aqui e nem no super
        super(agency, accountNumber)
        this.name = name
        this.cpf = cpf
        this.salary = salary
    }

   accountType(){
       if(this.salary <= 4999.99){
           this.type = "Standard"
       } else if (this.salary >= 5000 && this.salary <= 17999.99){
           this.type = "Gold"
       } else {
           this.type = "Premium"
       }

       return this.type
   }

}

const client1 = new Client(account1.agency, account1.accountNumber, "brena", 122, 6000) // não preciso passar o type aqui pq ele já inicializa vazio lá na Account
console.log(client1)
client1.accountType()
console.log(client1)
module.exports = { Client, client1 }

