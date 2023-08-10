const { Client } = require ('./Client')

describe('verify functions of client class', () => {

    const client = new Client();
    beforeEach(() => {
        client.name = 'Mariana'
        client.cpf = 12345678900
        client.email = 'mariana@reprograma.br'
        client.phone = 99990000
        client.income = 2000
    })

    it('should check if client instance is doing well', () => {
        expect(client instanceof Client).toBe(true)
    })
    it('should check get cpf', () => {
        expect(client.cpf).toBe(12345678900)
    })
    it('should check get income', () => {
        expect(client.income).toBe(2000)
    })
    it('should check get a new income', () => {
        client.income(3000)
        expect(client.income).toBe(3000)
    })
    it('should check standard account type', () => {
        expect(client.accountType()).toEqual(`Sua conta é do tipo Standard.`)
    }) 
    it('should check gold account type', () => {
        client.income = 12000
        expect(client.accountType()).toEqual(`Sua conta é do tipo Gold.`)
    })
    it('should check premium account type', () => {
        client.income = 22000
        expect(client.accountType()).toEqual(`Sua conta é do tipo Premium.`)
    })
    it('should check error in createdPixKey function', () => {
        expect(client.createdPixKey('chave aleatória')).toEqual(`Esse tipo de chave pix é inválida! Você pode escolher dentre as seguintes opções: cpf, e-mail ou telefone.`)
    })
    it('should check createdPixKey function', () => {
        expect(client.createdPixKey('mariana@reprograma.br')).toEqual(`Operação realizada. Sua chave pix é mariana@reprograma.br.`)
    })
})
