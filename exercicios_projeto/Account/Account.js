const { Standard } = require("../StandardAccount/StandardAccount.js");
const { Gold } = require("../GoldAccount/GoldAccount.js");
const { Premium } = require("../PremiumAccount/PremiunAccount.js");
const { PixKey } = require('../PixKey/PixKey.js');

class BankAccount{
    constructor(client,bank, balance){ 
        if(client.cpf !== undefined && bank.bankCode !== undefined){
            this.client = client;
            this.bank = bank; 
            this.balance = balance;  
            this.pixKeys = [];
        }else{
            this.client = undefined;
            this.bank = undefined;
            this.balance = undefined;
            this.pixKeys = undefined;
            return 'Dados inválidos'
        }
    }
    addPixKey(pixKey){
        if(pixKey instanceof PixKey && this.client !== undefined){ 
            const pixKeyExists = this.pixKeys.find(item => item.key === pixKey.key && item.bank === pixKey.bank.bankCode);
            if(pixKeyExists){  
                return 'Chave pix já associada a conta'
            } else if (pixKey.bank.bankCode !== this.bank.bankCode){
                console.log(`O cliente não é associado ao banco ${pixKey.bank.bankCode} para cadastrar uma chave pix.`)
            } else if (pixKey.client.cpf !== this.client.cpf){
                return 'O cliente não é associado a essa chave pix.'
            } else{
                this.pixKeys.push({key: pixKey.key, bank: pixKey.bank.bankCode});
                return 'Chave pix adicionada com sucesso'
            }
        } else {
            return 'Chave pix inválida'
        }
    }
    removePixKey(pixKey){
        if(pixKey instanceof PixKey && this.client !== undefined){
            const pixKeyExists = this.pixKeys.find(item => item.key === pixKey.key && item.bank === pixKey.bank.bankCode);
            if(pixKeyExists){
                this.pixKeys = this.pixKeys.filter(item => item.key !== pixKey.key && item.bank !== pixKey.bank.bankCode);
                return 'Chave pix removida com sucesso'
            } else {
                return 'O cliente não tem essa chave pix associada a ele.'
            }
        } else {
            return 'Chave pix inválida'
        }
    }
    deposit(value){
        if (value > 0 && this.client !== undefined){
            this.balance += value;
            return 'Depósito realizado com sucesso'
        } else {
            return 'Valor inválido'
        } 
    }
    withdraw(value){
        if (value < 0){
            return 'Valor inválido'
        } else if(this.balance >= value && this.client !== undefined){
            this.balance -= value;
            return 'Saque realizado com sucesso'
        } else {
            return 'Saldo insuficiente'
        }
    }
    transferPix(value, account, keyPix){  
        let novoLimite;
        const pixKeyExists = account.pixKeys.find(item => item.key === keyPix); 
        if (this.client instanceof Standard && account instanceof BankAccount && this.client !== undefined){
            if(value > 0){
                if (pixKeyExists ){ 
                    if(value <= this.client.limitTransaction){
                        if(this.balance >= value){
                            this.balance -= value;
                            account.balance += value;
                            novoLimite = this.client.limitTransaction - value
                            this.client.novoLimite = novoLimite;
                            return `Transferência de R$${value} de ${this.client.name } para ${account.client.name} com a chave pix ${keyPix} realizada com sucesso!\n Seu novo limite de transação diária é de R$${this.client.limitTransaction}` 	 
                        } else {
                            return "Saldo insuficiente";
                        }
                    } else {
                        return "Limite de transação diária excedido";
                    }
                } else {
                    return "Cliente não tem essa chave pix associada a ele";
                }
            } else {
                return 'Valor inválido'
            }
            
        } else if (this.client instanceof Gold && account instanceof BankAccount && this.client !== undefined){
            if (value > 0){
                if (pixKeyExists){
                    if( value <= this.client.limitTransaction){
                        if(this.balance >= value){
                            this.balance -= value;
                            account.balance += value;
                            novoLimite = this.client.limitTransaction - value
                            this.client.novoLimite = novoLimite;
                            return `Transferência de R$${value} de ${this.client.name } para ${account.client.name} com a chave pix ${keyPix} realizada com sucesso!\n Seu novo limite de transação diária é de R$${this.client.limitTransaction}`
                        } else {
                            return "Saldo insuficiente";
                        }
                    } else {
                        return "Limite de transação diária excedido";
                    }
                } else {
                    return "Cliente não tem essa chave pix associada a ele";
                }
            } else {
                return 'Valor inválido'
            }
            
        } else if (this.client instanceof Premium && account instanceof BankAccount && this.client !== undefined){
            if (value > 0){
                if (pixKeyExists){
                    if (this.balance >= value ){
                        this.balance -= value;
                        account.balance += value; 
                        return `Transferência de R$${value} de ${this.client.name } para ${account.client.name} com a chave pix ${keyPix} realizada com sucesso!`
                    } else {
                        return "Saldo insuficiente";
                    }
                } else {
                    return "Cliente não tem essa chave pix associada a ele";
                }
            } else {
                return 'Valor inválido'
            }
        } else {
            return "Conta inválida";
        }
    }
    transfer(value,account){ 
        if (account instanceof BankAccount && this.client !== undefined){
            if(value < 0){
                return 'Valor inválido'
            } else if(this.balance >= value){
                this.balance -= value;
                account.balance += value; 
                return `Transferência de R$${value} de ${this.client.name } para ${account.client.name} realizada com sucesso!`
            } else {
                return "Saldo insuficiente";
            } 
        } else {
            return "Conta inválida";
        }
    }
}
module.exports = { BankAccount };