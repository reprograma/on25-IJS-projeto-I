
class Client {
    name;
    #cpf;
    email;
    phone;
    #income;
        
    static createdClients = [];

    constructor(name, cpf, income) {
        this.name = name;
        this.#cpf = cpf;
        this.income = income;
        
        
        // this.verifyCpf();

        Client.createdClients.push(this)
    }

    get cpf() {
        return this.#cpf;
    }
    
    get income() {
        return this.#income;
    }

    set income(income) {
        this.#income = income;
    }

    addEmail(email) {
        this.email = email;
        Client.createdClients.email = this.email;

    } 

    addPhone(phone) {
        this.phone = phone;
        Client.createdClients.phone = this.phone;
    }

}

module.exports = { Client }
