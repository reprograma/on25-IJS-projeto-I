
class Account {
    #agency;
    #accountNumber;
    #balance;
    accountType;
    transactionLimit;
    transactionTotal;
    pixKey;
    client;
    static createdAccounts = [];
   
    constructor(agency, accountNumber, client) {
        this.#agency = agency;
        this.#accountNumber = accountNumber;
        this.client = client;
        this.#balance = 0;
        this.transactionTotal = 0;
        this.pixKey = undefined;
        this.defineAccountType();

        Account.createdAccounts.push(this);
    }
    
    static isAccount(account){
        return account instanceof Account;
    }

    get accountNumber() {
        return this.#accountNumber;
    }

    get agency() {
        return this.#agency;
    }

    get balance() {
        return this.#balance;
    }

    set balance(value) {
        this.#balance = value;
    }

    defineAccountType() {
        
       if(this.client['income'] < 4999.99) {
        this.accountType = 'standard';
        this.transactionLimit = 1000;
       } else if(this.client['income'] < 17999.99) {
        this.accountType = 'gold';
        this.transactionLimit = 5000;
       } else {
            this.accountType = 'premium';
            this.transactionLimit = undefined;
       }  
    }



    createPixKey(keyType) {
        switch(keyType) {
            case "email":
                this.pixKey = this.client.email;
                break;
            case "phone": 
                this.pixKey = this.client.phone;
                break;
            case "cpf":
                this.pixKey = this.client.cpf;
                break;
            default:
                this.pixKey = null;
                console.log("Invalid pix key");
        }   
        Account.createdAccounts.pixKey = this.pixKey;
        console.log(`Success: Your request has been processed and the operation is complete. Pix key created: ${this.pixKey}`)
    }

    verifyBalance(value) {
        if(this.#balance >= value) {
            return true;
        } else {
            console.log(`Your account balance is insufficient to complete the requested operation. Current balance: ${this.#balance}`);
            return false;
        }
    }

    verifyTransactionLimit() {

        //Acho que tem forma melhor de escrever essa lógica.
        if(this.transactionLimit == "undefined" || this.transactionLimit == null) {
            return true;
        }

        if(this.transactionTotal >= this.transactionLimit) {
            console.log(`Transaction Failed: You have reached your daily transaction limit.`);
            return false;
        } else {
            return true;
        }
    }

    verifyValidValue(value){
        if(value <= 0 || typeof value !== "number") {
            console.log("Impossible to proceed due to invalid value. To continue, please enter a valid number");
            return false;
        } else {
            return true;
        }
    }

    findAccount(identificationKey, identificationKeyType) {
        let auxAccount;
        
        if (identificationKey.cpf && identificationKeyType === "cpf") {
           auxAccount = Account.createdAccounts.find(account => account.client.cpf === identificationKey.cpf)
        }
        if (identificationKeyType === "pixKey") {
           auxAccount = Account.createdAccounts.find(account => account.pixKey == identificationKey);           
        } 

        if(auxAccount.#accountNumber === this.#accountNumber) {
            console.log("Impossible to continue. Please inform an account different from your own.")
            return;
        }
        return auxAccount;
    }

    toDebit(recipientAccount, amountToBeTransfered) {

        if(!(Account.isAccount(recipientAccount))){
            return;
        }

        this.#balance -= amountToBeTransfered;
        recipientAccount.balance += amountToBeTransfered;
        this.transactionTotal += amountToBeTransfered;

        console.log(`Success: Your tranfer request to ${recipientAccount.#accountNumber} has been processed and the operation is complete. Transfer amount: ${amountToBeTransfered}. Current balance: ${this.#balance}`);

    }
    
    toPix(recipientAccountPixKey, amountToBeTransfered){
       if(!this.verifyValidValue(amountToBeTransfered)){
        return;
       }

        if (!this.verifyTransactionLimit()) {
            return
        }

        if(!this.verifyBalance(amountToBeTransfered)) {
            return;
        }

        if(recipientAccountPixKey === undefined || recipientAccountPixKey === null) {
            console.log("Impossible to proceed. No matcing pix key was found. To continue, please enter an existant pix key.");
            return;
        }
        
        let auxrecipientAccount = this.findAccount(recipientAccountPixKey, "pixKey");
        this.toDebit(auxrecipientAccount, amountToBeTransfered);
    }
    
    toTransfer(recipientAccountNumber, cpf, amountToBeTransfered){
        if(!this.verifyValidValue(amountToBeTransfered)){
            console.log("1")
            return;
        }
        
        if (!this.verifyTransactionLimit()) {
            console.log("2")
            return
        }
        
        if(!this.verifyBalance(amountToBeTransfered)) {
            console.log("3")
            return;
        }

        let identificationKey = {
            accountNumber: recipientAccountNumber,
            cpf: cpf
        }

        let auxrecipientAccount = this.findAccount(identificationKey, "cpf");
        this.toDebit(auxrecipientAccount, amountToBeTransfered);
    }

    toDeposit(amountToBeTransfered){
        this.verifyValidValue(amountToBeTransfered);
       this.#balance += amountToBeTransfered;
        
        console.log(`Success: Your deposit request has been processed and the operation is complete. Current balance: ${this.#balance}`)
    }

    toWithdraw(amountToBeWithdraw){

        if(!this.verifyValidValue(amountToBeWithdraw)) {
            return;
        }
        
        if(!this.verifyBalance(amountToBeWithdraw)){
            return;
        }
    
        if (!this.verifyTransactionLimit()) {
            return
        }

        this.#balance -= amountToBeWithdraw;
        console.log(`Success: Your withdrawal request has been processed and the operation is complete. Current balance ${this.#balance}`)

    }
}

module.exports = { Account }

