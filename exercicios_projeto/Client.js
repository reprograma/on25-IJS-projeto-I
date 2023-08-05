class Clients {
    name;
    #cpf;
    #monthlyIncome;
    email;
    telefone;

    constructor(name, cpf, email, telefone, monthlyIncome) {
        this.name = name;
        this.#cpf = cpf;
        this.email = email;
        this.telefone = telefone;
        this.#monthlyIncome = monthlyIncome;

    }

    get cpf() {
        return this.#cpf;
    }

    get monthlyIncome() {
        return this.#monthlyIncome;
    }
}

class Standard extends Clients {
    constructor(name, cpf, email, telefone, monthlyIncome) {
        if (monthlyIncome <= 4999.99) {
            super(name, cpf, email, telefone, monthlyIncome);
            this.transferLimit = 1000;
            this.type = 'standard';
        } else {
            throw new Error('Não foi possível criar a conta Standard');
        }
    }
}

class Gold extends Clients {
    constructor(name, cpf, email, telefone, monthlyIncome) {
        if (monthlyIncome >= 5000 && monthlyIncome <= 17999.99) {
            super(name, cpf, email, telefone, monthlyIncome);
            this.transferLimit = 5000;
            this.type = 'gold';
        } else {
            throw new Error('Não foi possível criar a conta Gold');
        }
    }
}

class Premium extends Clients {
    constructor(name, cpf, email, telefone, monthlyIncome) {
        if (monthlyIncome >= 18000) {
            super(name, cpf, email, telefone, monthlyIncome);
            this.type = 'premium';
        } else {
            throw new Error('Não foi possível criar a conta Premium');
        }
    }
}

module.exports = { Clients, Gold, Premium, Standard };