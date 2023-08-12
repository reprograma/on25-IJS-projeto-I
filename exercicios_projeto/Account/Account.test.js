const { Bank } = require("../Bank/Bank");
const { Standard } = require("../StandardAccount/StandardAccount");
const { Gold } = require("../GoldAccount/GoldAccount");
const { Premium } = require("../PremiumAccount/PremiunAccount");
const { BankAccount } = require("../Account/Account");
const { PixKey } = require('../PixKey/PixKey');

describe('Testes da classe BankAccount', () => {
    let banco, banco2, cliente1, cliente2, cliente3, conta1, conta2, conta3, pix1, pix2, pix3, pix4, amount;
    beforeEach(() => {
        banco = new Bank(100, "Banco do Brasil");
        banco2 = new Bank(101, "Banco Inter");
        
        cliente1 = new Standard("Carla", "123456789", "carla@email.com", 81999999999, 3000);
        cliente2 = new Gold("Dorinha", "159951123", "dorinha@email.com", 81999999999, 8000);
        cliente3 = new Premium("Valentina", "213645978", "valentina@email.com", 81999999999, 19500);
        
        conta1 = new BankAccount(cliente1, banco, 1500); 
        conta2 = new BankAccount(cliente2, banco, 5000);
        conta3 = new BankAccount(cliente3, banco2, 10000);
        
        pix1 = new PixKey("carla123", cliente1, banco);
        pix2 = new PixKey("dorinha123", cliente2, banco);
        pix3 = new PixKey("valentina123", cliente3, banco2); 
        pix4 = new PixKey("123456489", cliente1, banco);

    });
    it('Verificando dados da conta 1', () => { 
        console.log(conta1)
        expect(conta1.client).toEqual(cliente1);
        expect(conta1.bank).toEqual(banco);
        expect(conta1.balance).toEqual(1500);
        expect(conta1.pixKeys).toEqual([]); 
    });
    it('Verificando se a conta 1 é uma instância de BankAccount', () => {
        expect(conta1 instanceof BankAccount).toBeTruthy();
    });
    it('Adicionando chave pix as contas', () => {
        expect(conta1.addPixKey(pix1)).toEqual("Chave pix adicionada com sucesso");
        expect(conta2.addPixKey(pix2)).toEqual("Chave pix adicionada com sucesso");
        expect(conta3.addPixKey(pix3)).toEqual("Chave pix adicionada com sucesso"); 
        expect(conta1.pixKeys).toEqual([{bank: pix1.bank.bankCode, key: pix1.key}]);
        expect(conta2.pixKeys).toEqual([{bank: pix2.bank.bankCode, key: pix2.key}]);
        expect(conta3.pixKeys).toEqual([{bank: pix3.bank.bankCode, key: pix3.key}]);
    });
    it('Adicionando na conta 1 mais de uma chave pix', () =>{
        expect(conta1.addPixKey(pix1)).toEqual("Chave pix adicionada com sucesso");
        expect(conta1.addPixKey(pix4)).toEqual("Chave pix adicionada com sucesso");
        const expectedPixKeys = [
            { bank: pix1.bank.bankCode, key: pix1.key },
            { bank: pix4.bank.bankCode, key: pix4.key }
        ];
        expect(conta1.pixKeys).toEqual(expectedPixKeys);
    });

    it('Verificando se a chave pix já está associada a conta 1', () => {
        expect(conta1.addPixKey(pix1)).toEqual("Chave pix adicionada com sucesso");
        expect(conta1.addPixKey(pix1)).toEqual("Chave pix já associada a conta");

    });
    it('Removendo chave pix da conta 3', () => {
        expect(conta3.addPixKey(pix3)).toEqual("Chave pix adicionada com sucesso");
        expect(conta3.removePixKey(pix3)).toEqual("Chave pix removida com sucesso");
        expect(conta3.pixKeys).toEqual([]);
    });
    it('Transferindo dinheiro por pix da conta 1 para a conta 2', () => {
        amount = 500;
        expect(conta2.addPixKey(pix2)).toEqual("Chave pix adicionada com sucesso");
        expect(conta1.transferPix(amount, conta2, pix2.key)).toEqual(`Transferência de R$${amount} de ${conta1.client.name } para ${conta2.client.name} com a chave pix ${pix2.key} realizada com sucesso!\n Seu novo limite de transação diária é de R$${conta1.client.limitTransaction}` 	 );
        expect(conta1.balance).toEqual(1000);
        expect(conta2.balance).toEqual(5500);
    });
    it('Transferindo dinheiro por pix da conta 1 para a conta 2 com chave pix inválida', () => { 
        expect(conta1.transferPix(500, conta2, "dorinha")).toEqual("Cliente não tem essa chave pix associada a ele");
    });
    it('Limite de transação diária excedido durante tranferência por pix da conta 1 para conta 2', () => { 
        expect(conta2.addPixKey(pix2)).toEqual("Chave pix adicionada com sucesso");
        expect(conta1.transferPix(2000, conta2, pix2.key)).toEqual("Limite de transação diária excedido");
    });
    it('Transferindo dinheiro por pix da conta 3 para a conta 2 com saldo insuficiente', () => { 
        expect(conta2.addPixKey(pix2)).toEqual("Chave pix adicionada com sucesso");
        expect(conta3.transferPix(20000, conta2, pix2.key)).toEqual("Saldo insuficiente");
    });
    it('Transferindo dinheiro por pix da conta 3 para a conta 2 com valor inválido', () => { 
        expect(conta2.addPixKey(pix2)).toEqual("Chave pix adicionada com sucesso");
        expect(conta3.transferPix(0, conta2, pix2.key)).toEqual("Valor inválido");
    });
    it('Transferindo dinheiro por banco da conta 1 para conta inválida', () => { 
        expect(conta1.transfer(500, "conta")).toEqual("Conta inválida");
        expect(conta1.balance).toEqual(1500); 
    });
    it('Transferindo dinheiro por banco da conta 2 para a conta 3', () => {
        amount = 500
        expect(conta2.transfer(amount, conta3)).toEqual(`Transferência de R$${amount} de ${conta2.client.name } para ${conta3.client.name} realizada com sucesso!`);
        expect(conta2.balance).toEqual(4500);
        expect(conta3.balance).toEqual(10500);
    });
    it('Depositando dinheiro na conta 1', () => {
        expect(conta1.deposit(500)).toEqual("Depósito realizado com sucesso");
        expect(conta1.balance).toEqual(2000);
    });
    it('Depositando dinheiro na conta 1 com valor inválido', () => {
        expect(conta1.deposit(0)).toEqual("Valor inválido");
    });
    it('Sacando dinheiro da conta 1', () => {
        expect(conta1.withdraw(500)).toEqual("Saque realizado com sucesso");
        expect(conta1.balance).toEqual(1000);
    });
    it('Sacando dinheiro da conta 1 com valor inválido', () => {
        expect(conta1.withdraw(-100)).toEqual("Valor inválido");
    });
    it('Sacando dinheiro da conta 1 com saldo insuficiente', () => {
        expect(conta1.withdraw(2000)).toEqual("Saldo insuficiente");
    }); 

});
