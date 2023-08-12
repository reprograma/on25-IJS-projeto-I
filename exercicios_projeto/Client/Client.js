const { Bank } = require('../Bank/Bank.js'); 
class Client{  
    #cpf  
    constructor(name,cpf,email,phone){
        this.name = name;
        this.#cpf = cpf; 
        this.email = email;
        this.phone = phone; 
        this.banks = [];         
    }
    get cpf(){
        return this.#cpf;
    } 
    addBank(bank){ 
        if(bank instanceof Bank && this.cpf !== undefined){ 
            if(this.banks.includes(bank)){ 
                return 'O cliente já tem esse banco associado a ele.'
            }else{
                this.banks.push(bank);
                bank.qtdClients += 1;
                Bank.updateBankInCreatedBanks(bank.bankCode, bank.qtdClients);
            }
        }else{
            return 'Não é um banco ou cliente válido.'
        }
    }
    removeBank(bank){
        if(bank instanceof Bank && this.cpf !== undefined){
            if(this.banks.includes(bank)){
                this.banks.forEach((bankInArray,index) => {
                    if(bankInArray === bank){
                        this.banks.splice(index,1); 
                    }
                }) 
                bank.qtdClients -= 1;
                Bank.updateBankInCreatedBanks(bank.bankCode, bank.qtdClients);
            }else{
                return 'O cliente não tem esse banco associado a ele.'
            }
        }else{
            return 'Não é um banco válido.'
        }
    }  
    
}
module.exports = { Client };