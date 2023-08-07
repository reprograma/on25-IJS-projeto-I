const { Client } = require('./Client');

class Gold extends Client {
    constructor(name, cpf, email, telephone, income) {
    if (income => 18000.00 ) {
        super(name, cpf, email, telephone, income);
        this.transferLimit = 100000000;
        this.type = 'gold';
    } else {
        throw new Error('Sua renda mensal não atinge o nivel premium')
    }

    }

}