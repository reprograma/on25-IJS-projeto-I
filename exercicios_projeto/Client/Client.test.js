const { Standard } = require("../StandardAccount/StandardAccount");
const { Bank } = require("../Bank/Bank");

describe('Cliente', () => {
    let cliente, banco, banco2;
    beforeEach(() => {
        cliente = new Standard("João", "123456789781", "joao@email.com", 81999999999, 3000);
        banco = new Bank(100, "Banco do Brasil");  
        banco2 = new Bank(101, "Banco Inter");
    }); 
    it('Associando banco ao cliente', () => {  
        cliente.addBank(banco);
        expect(cliente.banks).toEqual([banco]);
        expect(banco.qtdClients).toBe(1); 

    });   
    it('Removendo banco associado ao cliente', () => { 
        cliente.removeBank(banco);
        expect(cliente.banks).toEqual([]);
        expect(banco.qtdClients).toBe(0); 
    });
    it('Adicionar mais de um banco ao cliente', () => {
        cliente.addBank(banco);
        cliente.addBank(banco2);
        expect(cliente.banks).toEqual([banco, banco2]);
        expect(banco.qtdClients).toBe(1);
        expect(banco2.qtdClients).toBe(1); 
    });
    it('Não deve adicionar um banco que já está associado ao cliente', () => {
        cliente.addBank(banco);
        expect(cliente.addBank(banco)).toEqual('O cliente já tem esse banco associado a ele.');
        expect(cliente.banks).toEqual([banco]);
        expect(banco.qtdClients).toBe(1);  
    }); 
    it('Não deve remover um banco que não está associado ao cliente', () => {
        expect(cliente.removeBank(banco)).toEqual('O cliente não tem esse banco associado a ele.');  
        
    });
    it('Não deve adicionar um banco que não é uma instância de Bank', () => {
        expect(cliente.addBank("banco")).toEqual('Não é um banco ou cliente válido.'); 
    });


});
