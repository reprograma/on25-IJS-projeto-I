const { GoldAccount } = require ('../GoldAccount/GoldAccount')
const { Client } = require ('../Client/Client')

describe('verify gold account class', () => {

    const client = new Client('Mariana')
    const account = new GoldAccount(client)

    beforeEach(() => {
        client.income = 8000
    })
    it('should check if is a gold account', () =>{
        expect(client.accountType()).toEqual(`Sua conta é do tipo Gold.`)
    })
    it('should check limit of transactions when the client has limit', () =>{
        expect(account.transactions()).toEqual()
    })
})