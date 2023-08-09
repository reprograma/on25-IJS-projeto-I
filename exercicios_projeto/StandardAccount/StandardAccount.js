const { Client } = require("../Client/Client")

class StandardAccount extends Client {


    withDrawal(amount){
        if(this.dailyAmountTranfered >=1000){
            `Você não pode realizar esta operação pois atingiu o limite diário`
        } else {
        super.withDrawal()
        }
    }
}

module.exports = { StandardAccount }

const standardAccount1 = new StandardAccount(10, 2, "Brena", 1234, 5000, "brena@", 99887744)
console.log(standardAccount1)
standardAccount1.withDrawal(5000)