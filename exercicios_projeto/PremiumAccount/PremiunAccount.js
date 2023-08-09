const { Account } = require('../Account/Account')

class PremiunAccount extends Account {
    constructor(client, accountNumber, agencyNumber){
        super(client, accountNumber, agencyNumber)
        
        if(this.client.salary < 18000){
            Account.accountCreated = Account.accountCreated.filter(account => account.client !== this.client);
            return new Error(`Sorry, you can't created a Premiun Account.\nTo have a Premium account, the monthly income must be greater than or equal to $18000.`);
        }
    }
}

module.exports = { PremiunAccount }