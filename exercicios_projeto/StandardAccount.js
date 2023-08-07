const { Client } = require('./Client');

class Standard extends Client {
    constructor(name, cpf, email, telephone, income) {
    if (income <= 4999.99 ) {
        super(name, cpf, email, telephone, income);
        this.transferLimit = 1000;
        this.type = 'standard';
    } else {
        throw new Error('Sua renda mensal ultrapassa o nivel standard')
    }

    }

}

