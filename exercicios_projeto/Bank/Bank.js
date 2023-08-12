class Bank{
    static createdBanks = []; 
    constructor(bankCode,bankName){
        this.bankCode = bankCode;
        this.bankName = bankName; 
        this.qtdClients = 0; 
        Bank.createdBanks.push({ bankCode: this.bankCode, qtdClients: 0});
    } 
    static updateBankInCreatedBanks(bankCode, qtdClients) {
        const bankIndex = Bank.createdBanks.findIndex(bank => bank.bankCode === bankCode);
        if (bankIndex !== -1) {
            Bank.createdBanks[bankIndex].qtdClients = qtdClients;
        }
    }  
}
module.exports = { Bank };