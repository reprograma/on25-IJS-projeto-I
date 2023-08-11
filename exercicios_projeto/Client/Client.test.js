const { Client } = require('./Client');

describe("Criar Cliente", () => {
    it("Deve criar o cliente e retornar a conta tipo Standart", () => {
        const client1 = new Client("Daniela", 12345689, 4999.99);
        let output = true;

        expect(client1.tipoConta === 'Standard').toBe(output);
    });

    it("Deve criar o cliente e retornar a conta tipo Gold", () => {
        const client1 = new Client("Daniela", 12345689, 10000);
        let output = true;

        expect(client1.tipoConta === 'Gold').toBe(output);
    });

    it("Deve criar o cliente e retornar a conta tipo Premium", () => {
        const client1 = new Client("Daniela", 12345689, 20000);
        let output = true;

        expect(client1.tipoConta === 'Premium').toBe(output);
    });
});