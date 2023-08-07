const { Account } = require('./account');

class Client {
    name;
    cpf;
    account;
    income;

    constructor(agency, account, type, name, cpf, salary) {
        super(agency, account, type);
        this.name = name;
        this.cpf = cpf;
        this.salary = salary;
    }

    registerClient(name, cpf, account, income) {
        if(account instanceof Account) {
        this.name = name;
        this.cpf = cpf;
        this.account = account;
        this.income = income;

        return "Cliente cadastrado com sucesso"
    } else {
        throw new Error("Dados invalidos, erro no cadastro")
    }
}

}

module.exports = {Client}