const {Account} = require ('../Account/Account')

class GoldAccount extends Account {
    
    #limite = 5000;

    transferTo(anotherAccount, cpf, amount) {

        if(amount > this.#limite){
            console.log(`O seu limite de R$ ${this.#limite} foi ultrapassado.`)
            return
        }

        if (this.getBalance() >= amount) {
            this.getBalance() -= amount
            console.log(`Transferência de R$ ${amount},00 realizada com sucesso. Seu novo saldo é de ${this.getBalance()},00.`)
        } else {
            console.log(`Seu salde é de ${this.getBalance()},00 ,insuficiente para concluir a transação R$ ${amount},00.`)
        }
    }

}

const goldAccount1 = new GoldAccount(33333, 10)
goldAccount1.transferTo(200, '123445', 200)

module.exports = {GoldAccount}