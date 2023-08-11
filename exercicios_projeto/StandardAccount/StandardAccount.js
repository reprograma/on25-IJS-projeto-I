const { Account } = require("../Account/Account");

class StandardAccount extends Account {
    transactionLimitDay = 1000.00;

    constructor(agencyNumber, accountNumber, client){
        super(agencyNumber, accountNumber, client)

        if(this.income <= 4999.00){
            this.transactionLimitDay === 1000.00;
        }
        
    }

}


module.exports = { StandardAccount };

