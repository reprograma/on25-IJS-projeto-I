const { Account } = require ('../Account/Account')
const { Client } = require ('../Client/Client')

describe('verify functions of account class', () => {

    const client = new Client('Mariana')
    const client2 = new Client('Martha')
    const account = new Account()
    const account2 = new Account()

    beforeEach(() => {
        client.pixKey = 'mariana@reprograma.br'

        account.client = client
        account.bank = 'boxBank'
        account.accountNumber = 123456
        account.agencyNumber = 98765
        account.type = ''
        account.balance = 2000

        account2.client = client2
        account2.balance = 0
    })

    it('should check get account number', () => {
        expect(account.accountNumber).toBe(123456)
    })
    it('should check get agency number', () => {
        expect(account.agencyNumber).toBe(98765)
    })
    it('should check get balance account', () => {
        expect(account.balance).toBe(2000)
    })
    it('should check a new balance account', () => {
        account.balance(3000);
        expect(account.balance).toBe(3000)
    })
    it('should check customer registration with valid data', () => { 
        expect(account.registerClientAccount(account, 'Mariana', 12345678900, 2000)).toEqual('Cliente cadastrado')
    })
    it('should check customer registration with not valid data', () => { 
        expect(account.registerClientAccount('conta', 'Mariana', 12345678900, 2000)).toEqual('Erro no cadastro, dados inválidos')
    })
    it('should check deposit in account', () => {
        account.deposit(500);
        expect(account.balance).toBe(2500)
    })
    it('should check withdrawal in account when the client has balance', () => {
        account.withdraw(500);
        expect(account.balance).toBe(1500)
    })
    it('should check withdraw in account when the client has not balance', () => {
        const output = 'Você não possui saldo suficiente para realizar esta operação.'
        
        expect(account.withdraw(2500)).toBe(output)
    })
    it('should check transfer to another account', () => {
        account.transferTo(account2, 11122233344, 1000)
        expect(account.balance).toBe(1000)
        expect(account2.balance).toBe(1000)
    })

    it('should check transfer to another account when the client has not balance', () => {
        const output = 'Você não possui saldo suficiente para realizar esta operação.'
        
        expect(account.transferTo(account2, 11122233344, 3000)).toBe(output)
    })
    it('should check transfer pix to another account', () => {
        expect(account.transferPix(500, 'mariana@reprograma.br')).toEqual('Pix realizado. Seu saldo atual é de R$ 1500,00.')
    })
    it('should check transfer pix to another account when the client has not balance', () => {
        expect(account.transferPix(3500, 'mariana@reprograma.br')).toEqual('Você não possui saldo suficiente para realizar esta operação.')
    })   
    it('should check function find account by pix key', () => {
        const findAccount = account.findAccountByPixKey('mariana@reprograma.br')
        expect(findAccount).toEqual(account)
    })
})