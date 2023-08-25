const { Client } = require ('./Client');

const cliente1 = new Client('Maria', 12456789, 4000, 'maria@gmail.com', 98765432);

describe('Should return pix', () => {
    it('Return pix number by cpf', () => {
        const result = cliente1.createKeyPix()
        expect(result).toBe(12456789)
    });
});