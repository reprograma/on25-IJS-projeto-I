const { Account } = require("../Account/Account.js");


class GoldAccount extends Account {
    transactionLimitDay = 5000.00;
    

    constructor(agencyNumber, accountNumber, client){
        super(agencyNumber, accountNumber, client)
           
            if(this.income >= 5000.00 && this.income <= 17999.00){
                this.transactionLimitDay === 5000.00;
            }
    }

}




module.exports = { GoldAccount };