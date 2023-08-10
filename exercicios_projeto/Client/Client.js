
class Client {
    name;
    #cpf;
    email;
    phone;
    #income;
    type;
   
    constructor(name, cpf, email, phone, income){
        this.name = name
        this.#cpf = cpf
        this.email = email
        this.phone = phone
        this.#income = income
    }

    get cpf() {
        return this.#cpf
    }

    get income() {
        return this.#income
    }

    set income(newIncome) {
        this.#income = newIncome
    }

    accountType(){
        if(this.#income <= 4999.99){
            this.type = 'Standard'
            return `Sua conta é do tipo ${this.type}.`
        } else if (this.#income > 5000 && this.#income <= 17999.99){
            this.type = 'Gold'
            return `Sua conta é do tipo ${this.type}.`
        } else if (this.#income > 18000){
            this.type = 'Premium'
            return `Sua conta é do tipo ${this.type}.`
        }
    }

    createdPixKey(pixKey) {
        if(pixKey === this.#cpf || pixKey === this.email || pixKey === this.phone) {
            this.pixKey = pixKey
            return `Operação realizada. Sua chave pix é ${pixKey}.`            
        } else {
            return `Esse tipo de chave pix é inválida! Você pode escolher dentre as seguintes opções: cpf, e-mail ou telefone.`
        }
    }
}

module.exports = { Client }

