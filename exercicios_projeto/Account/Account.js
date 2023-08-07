
class Account {
    id;
    #agency;
    #accountNumber;
    accountType;
    transactionLimit;
    pixKey;
    client;
    #balance;
    
    //static createdAccounts = [];

    constructor(agency, accountNumber, transactionLimit, client) {
        this.agency = agency;
        this.accountNumber = accountNumber;
        this.transactionLimit = transactionLimit;
        this.client = client;
        this.pixKey = '';
        this.balance = 0;
        this.accountType = {
            standard: standardAccount,
            gold: goldAccount,
            premium : premiumAccount
        }
        
    }

    createPixKey() {
        //to do
    }
    
    toPix(){
        //to do
    }

    toTransfer(){
        //to do
    }

    toDeposit(){
        //to do
    }

    toWithdraw(){
        //to do
    }

}

module.exports = { Account }
