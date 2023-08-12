const { Client } = require("../Client/Client.js");

class Standard extends Client {
    constructor(name, cpf, email, phone, income) {
        try {
            if (income >= 0 && income <= 4999.99) {
                super(name, cpf, email, phone);
                this.income = income;
                this.limitTransaction = 1000;
            } else {
                super();
                throw new Error("Renda mensal inválida para conta Standard");
            }
        } catch (error) {
            console.log(error.message);
        }
    } 

    set novoLimite(value) {
        this.limitTransaction = value;
    }  
}

module.exports = { Standard };
