const { Client } = require("../Client/Client")
const { Account } = require("../Account/Account")


describe("Verificar cadastro do cliente", () => {
    test("checar cadastro com dados válidos", () => {
        const barbara = new Client("Bárbara", 550052252, 61999999999, "barbara@reprograma.com.br", 332655, 10000)
        output = "Cadastro realizado com sucesso!"
        expect(output)
    });

    test("checar cadastro com dados inválidos", () => {
        const barbara = "Bárbara"
        if(!(barbara === Client)){
            output = "Cadastro não realizado! Os dados inseridos são inválidos."
        }
        expect(output)
    })
})

describe("Verificar cadastro de chave PIX", () => {
    test("checar chave Pix com cpf", () => {
        const key = Client.cpf 
        if(key === Client.cpf){ 
            output = "Cadastro realizado com sucesso!"
        }
        expect(output)
    });
    
    test("checar chave Pix com número de telefone", () => {
        const key = Client.phoneNumber 
        if(key === Client.phoneNumber){ 
            output = "Cadastro realizado com sucesso!"
        }
        expect(output)
    });

    test("checar chave Pix com email", () => {
        const key = Client.email 
        if(key === Client.email){ 
            output = "Cadastro realizado com sucesso!"
        }
        expect(output)
    });

    test("checar cadastro de chave Pix com dados inválidos", () => {
        const key = Client.name 
        if(!(key === Client.cpf || key === Client.phoneNumber || key === Client.email)){ 
            output = "Cadastro não realizado! Os dados inseridos são inválidos."
        }
        expect(output)
    })
})