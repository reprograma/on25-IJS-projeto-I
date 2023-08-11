const { Account } = require("../Account/Account");
class PremiumAccount extends Account {
        
    constructor(agencyNumber, accountNumber, client){
        super(agencyNumber, accountNumber, client)

        if(this.income >= 18000.00){
            this.transactionLimitDay === unlimited;
        }
        
    }



}



module.exports = { PremiumAccount };

