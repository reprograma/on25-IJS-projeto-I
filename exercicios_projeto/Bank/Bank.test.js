const { Bank } = require("../Bank/Bank");

describe('Banco', () => {
    let banco;
    beforeEach(() => { 
        banco = new Bank(100, "Banco do Brasil");   
    }); 
    it('Verificando os dados de banco', () => {
        expect(banco.bankCode).toBe(100);
        expect(banco.bankName).toBe("Banco do Brasil");
        expect(banco.qtdClients).toBe(0);
    });
    it('Deve ser uma instância válida de banco', () => {
        expect(banco instanceof Bank).toBeTruthy();
    });
    it('Não deve ser uma instância válida de banco', () => {	
        expect('banco' instanceof Bank).toBeFalsy();
    }); 
    it('Deve atualizar a quantidade de clientes de um banco', () => {
        Bank.updateBankInCreatedBanks(100, 2);
        expect(Bank.createdBanks[0].qtdClients).toBe(2); 
    }); 
    
});
