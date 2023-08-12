const { Standard } = require("./StandardAccount");
const { Gold } = require("../GoldAccount/GoldAccount");

describe('Conta Standard', () => {
    let clienteStandard, clienteGold, clienteInvalido; 
    beforeEach(() => {
        clienteStandard = new Standard("João", "123456789781", "joao@email.com", 81999999999, 3000); 
        clienteGold = new Gold("José","78945612378", "jose@email.com", 81999999999,20000);
        clienteInvalido = new Standard("João", "123456789781", "joao@email.com", 81999999999, 6000); 
    }); 
    it('deve criar uma instância válida da Conta Standard', () => {
        expect(clienteStandard.name).toBe("João");
        expect(clienteStandard.cpf).toBe("123456789781");
        expect(clienteStandard.email).toBe("joao@email.com");
        expect(clienteStandard.phone).toBe(81999999999);
        expect(clienteStandard.income).toBe(3000);
        expect(clienteStandard.limitTransaction).toBe(1000);
    });  
    it('deve verificar o novo limite modificado', () => {
        clienteStandard.novoLimite = 500;
        expect(clienteStandard.limitTransaction).toBe(500);
    });
    it('deve ser uma instância válida da Conta Standard', () => {
        expect(clienteStandard instanceof Standard).toBeTruthy();
    });
    it('deve ser uma instância inválida da Conta Standard', () => {
        expect(clienteGold instanceof Standard).toBeFalsy();
    });
    it('deve retornar um objeto com atributos undefined para um cliente inválido', () => {    
        expect(clienteInvalido).toEqual({name: undefined, cpf: undefined, email: undefined, phone: undefined, banks: []}); 
    });
    it('deve retornar mensagem de erro para renda inválida para conta Standard', () => {
        try{
            clienteInvalido;
        } catch(error){
            expect(error.message).toEqual("Renda mensal inválida para conta Standard");
        }
    });
});
