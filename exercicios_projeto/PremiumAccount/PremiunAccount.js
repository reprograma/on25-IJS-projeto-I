const { Client } = require ('../Client/Client');
const { Account } = require ('../Account/Account');

class PremiumAccount extends Account {
    
    constructor(client, bankCode) {
        super(client, bankCode);
    }
              
}

