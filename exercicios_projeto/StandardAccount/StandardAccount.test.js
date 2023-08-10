const { Client } = require ('../Client/Client')
const { StandardAccount } = require('./StandardAccount')

describe('verify standard account class', () => {

    const client = new Client('Mariana')
    const account = new StandardAccount(client)

    beforeEach(() => {
        client.income = 2000
    })
    it('should check if is a gold account', () =>{
        expect(client.accountType()).toEqual(`Sua conta é do tipo Standard.`)
    })
    it('should check limit of transactions when the client has limit', () =>{
        expect(account.transactions()).toEqual()
    })
})