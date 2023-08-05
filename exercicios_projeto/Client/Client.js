class Client {
    id
    name
    cpf
    rendaMensal
    saldo

    constructor(id, name, cpf, rendaMensal, saldo){
        this.id = id
        this.name = name
        this.cpf = cpf
        this.rendaMensal = rendaMensal
        this.saldo = saldo
    }
}

module.exports = { Client }