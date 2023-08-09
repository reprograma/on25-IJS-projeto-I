class Client {
    name;
    #cpf;
    #salary;
    phone;
    email;

    constructor(name, cpf, salary, phone, email){
        this.name = name,
        this.#cpf = cpf,
        this.#salary = salary, 
        this.phone = phone,
        this.email = email
    }

    get cpf(){
        return this.#cpf
    }

    get salary(){
        return this.#salary
    }

    set salary(newSalary){
        this.#salary = newSalary
    }
}

module.exports = { Client }