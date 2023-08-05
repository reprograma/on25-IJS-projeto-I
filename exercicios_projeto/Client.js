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
    // monthlyIncomeMax = 4999.99;
    transferLimit = 1000;
    type = 'standard';

    constructor(name, cpf, email, telefone, monthlyIncome) {
        super(name, cpf, email, telefone, monthlyIncome);
    }
}

class Gold extends Clients {
    //monthlyIncomeMin = 5000;
    //monthlyIncomeMax = 17999.99;
    transferLimit = 5000;
    type = 'gold';

    constructor(name, cpf, email, telefone, monthlyIncome) {
        super(name, cpf, email, telefone, monthlyIncome);
    }
}

class Premium extends Clients {
    // monthlyIncomeMin = 18000;
    type = 'premium';

    constructor(name, cpf, email, telefone, monthlyIncome) {
        super(name, cpf, email, telefone, monthlyIncome);
    }
}

module.exports = { Clients, Gold, Premium, Standard };