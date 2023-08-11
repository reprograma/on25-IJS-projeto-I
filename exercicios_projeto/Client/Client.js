const { Account } = require('../Account/Account');

class Client extends Account {
    name;
    #cpf;
    email;
    phone;
    #salary;
    type;

    constructor(name, cpf, email, phone, salary, type, accountNumber, agencyNumber) {
        super(accountNumber, agencyNumber)
        this.name = name;
        this.#cpf = cpf;
        this.email = email;
        this.phone = phone;
        this.#salary = salary;
        this.type = type;
    }

    get cpf() {
        return this.#cpf
    }

    get salary() {
        return this.#salary
    }  

    set salary(newSalary) {
        this.#salary = newSalary
    }

accountType() {
    if(this.#salary <= 4999.99){
        this.type = 'Standard'
        return `Sua conta é do tipo ${this.type}.`
    } else if (this.#salary > 5000 && this.#salary <= 17999.99) {
        this.type = 'Gold'
        return `Sua conta é do tipo ${this.type}.`
    } else if (this.#salary > 18000){
        this.type = 'Premium'
        return `Sua conta é do tipo ${this.type}.`
    }
    }

createPixKey(pixKey) {
        if (pixKey === this.cpf) {
            this.pixKey = pixKey;
            return `Chave pix criada - ${this.pixKey.cpf}`
        } else if (pixKey === this.phone) {
            this.pixKey = pixKey;
            return `Chave pix criada - ${this.pixKey.phone}`
        } else if (pixKey === this.email) {
            this.pixKey = pixKey;
            return `Chave pix criada - ${this.pixKey.email}`
    } else {
        return "Chave pix inválida"
    }
}
}


module.exports = { Client }

  
