const { Client } = require("../Client/Client.js");
//Clientes com conta premium são aqueles que possuem renda mensal a partir de R$18.000,00. Eles não tem limite de transação por dia.

class Premium extends Client{
    constructor(name,cpf,email,phone,income){
        try {
            if (income >= 18000) {
                super(name, cpf, email, phone);
                this.income = income; 
            } else {
                super();
                throw new Error("Renda mensal inválida para conta Premium");
            }
        } catch (error) {
            console.log(error.message);
        } 
    }  
}
module.exports = { Premium };