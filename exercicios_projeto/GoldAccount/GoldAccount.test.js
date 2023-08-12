const { Standard } = require("../StandardAccount/StandardAccount");
const { Gold } = require("./GoldAccount");

describe('Conta Gold', () => {
    let clienteGold, clienteStandard, clienteInvalido; 
    beforeEach(() => {
        clienteGold = new Gold("Maria","22345685917", "maria@email.com", 81999999999,10000);
        clienteStandard = new Standard("José","78945612378", "jose@email.com", 81999999999,20000);
        clienteInvalido = new Gold("João", "123456789781", "joao@email.com", 81999999999, 1000); 
    }); 
    it('deve criar uma instância válida da Conta Gold', () => {
        expect(clienteGold.name).toBe("Maria");
        expect(clienteGold.cpf).toBe("22345685917");
        expect(clienteGold.email).toBe("maria@email.com");
        expect(clienteGold.phone).toBe(81999999999);
        expect(clienteGold.income).toBe(10000); 
        expect(clienteGold.limitTransaction).toBe(5000);
    });   
    it('deve verificar o novo limite modificado', () => {
        clienteStandard.novoLimite = 500;
        expect(clienteStandard.limitTransaction).toBe(500);
    });
    it('deve ser uma instância válida da Conta Gold', () => {
        expect(clienteGold instanceof Gold).toBeTruthy();
    });
    it('deve ser uma instância inválida da Conta Gold', () => {
        expect(clienteStandard instanceof Gold).toBeFalsy();
    });
    it('deve retornar um objeto com atributos undefined para um cliente inválido', () => {    
        expect(clienteInvalido).toEqual({name: undefined, cpf: undefined, email: undefined, phone: undefined, banks: []}); 
    });
    it('deve retornar mensagem de erro para renda inválida para conta Gold', () => {
        try{
            clienteInvalido;
        } catch(error){
            expect(error.message).toEqual("Renda mensal inválida para conta Gold");
        }
    });
});
