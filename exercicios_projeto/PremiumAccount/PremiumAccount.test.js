const { Client } = require ('../Client/Client')
const { PremiumAccount } = require('./PremiunAccount')

describe('verify premium account class', () => {

    const client = new Client('Mariana')
    const account = new PremiumAccount(client)

    beforeEach(() => {
        client.income = 22000
    })
    it('should check if is a premium account', () =>{
        expect(client.accountType()).toEqual(`Sua conta é do tipo Premium.`)
    })
    it('should check limit of transactions when the client has limit', () =>{
        expect(account.transactions()).toEqual()
    })
})