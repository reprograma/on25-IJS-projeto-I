
class Client {
    id;
    name;
    #cpf;
    email;
    phone;
    #income;
    
    
    //static createdClients = [];

    constructor(name, cpf, income) {
        this.name = name;
        this.#cpf = cpf;
        this.income = income;
        
    }

    get cpf() {
        //to do
    }

    createClient() {
        //to do
    }

    addEmail() {
        //to do
    } 

    addPhone() {
        //to do
    }

}

module.exports = { Client }
