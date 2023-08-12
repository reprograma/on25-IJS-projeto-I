const { Client } = require("../Client/Client.js");
//Clientes com conta Gold são so clientes intermediários do banco com renda mensal de R$5000,00 até R$17.999,99. Eles também tem limite de transação de 5000 reais por dia.

class Gold extends Client{
    constructor(name,cpf,email,phone,income){
        try{
            if (income > 5000 && income <= 17999) {
                super(name,cpf,email,phone);
                this.income = income;
                this.limitTransaction = 5000;
            } else {
                super();
                throw new Error("Renda mensal inválida para conta Gold");
            }
        } catch (error) {
            console.log(error.message);
        } 
        
    } 
    set novoLimite(value){
        this.limitTransaction = value;
    }
}
module.exports = { Gold };