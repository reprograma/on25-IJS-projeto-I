const { Standard } = require("../StandardAccount/StandardAccount");
const { Premium } = require("./PremiunAccount");

describe('Conta Premium', () => {
    let clientePremium, clienteStandard, clienteInvalido; 
    beforeEach(() => {
        clientePremium = new Premium("José","78945612378", "jose@email.com", 81999999999,20000);
        clienteStandard = new Standard("João", "123456789781", "joao@email.com", 81999999999, 6000); 
        clienteInvalido = new Premium("João", "123456789781", "joao@email.com", 81999999999, 6000); 
    }); 
    it('deve criar uma instância válida da Conta Premium', () => {
        expect(clientePremium.name).toBe("José");
        expect(clientePremium.cpf).toBe("78945612378");
        expect(clientePremium.email).toBe("jose@email.com");
        expect(clientePremium.phone).toBe(81999999999);
        expect(clientePremium.income).toBe(20000); 
    });   
    it('deve ser uma instância válida da Conta Premium', () => {
        expect(clientePremium instanceof Premium).toBeTruthy();
    });
    it('deve ser uma instância inválida da Conta Premium', () => {
        expect(clienteStandard instanceof Premium).toBeFalsy();
    });
    it('deve retornar um objeto com atributos undefined para um cliente inválido', () => {    
        expect(clienteInvalido).toEqual({name: undefined, cpf: undefined, email: undefined, phone: undefined, banks: []}); 
    });
    it('deve retornar mensagem de erro para renda inválida para conta Premium', () => {
        try{
            clienteInvalido;
        } catch(error){
            expect(error.message).toEqual("Renda mensal inválida para conta Premium");
        }
    });
});
