const { Client } = require("../Client/Client")

class GoldAccount extends Client {


    withDrawal(amount){
        if(super.this.dailyAmountTranfered >=5000){
            `Você não pode realizar esta operação pois atingiu o limite diário`
        } else {
        super.withDrawal()
        }
    }
}

module.exports = { GoldAccount }

