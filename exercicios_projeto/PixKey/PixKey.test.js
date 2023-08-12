const { PixKey } = require("./PixKey"); 
const { Standard } = require("../StandardAccount/StandardAccount");
const { Bank } = require("../Bank/Bank");

describe('Chaves Pix', () => {
    let cliente, banco, pix;
    beforeEach(() => {
        cliente = new Standard("João", "123456789781", "joao@email.com", 81999999999, 3000);
        banco = new Bank(100, "Banco do Brasil"); 
        pix = new PixKey("jose@123", cliente, banco); 
    }); 
    it('deve criar uma instância válida da chave Pix', () => {  
        expect(pix.key).toBe("jose@123");
        expect(pix.client).toEqual(cliente);
        expect(pix.bank).toEqual(banco);
    });
    it('deve ser uma instância válida da chave Pix', () => {
        expect(pix instanceof PixKey).toBeTruthy();
    });  

});
