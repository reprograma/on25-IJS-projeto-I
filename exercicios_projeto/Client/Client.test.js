const { StandardAccount } = require('../StandardAccount/StandardAccount');
const { GoldAccount } = require('../GoldAccount/GoldAccount');
const { Client } = require('./Client');
const { PremiumAccount } = require('../PremiumAccount/PremiunAccount');
const { Account } = require('../Account/Account');

let standardClient, goldClient, premiumClient

beforeAll(() => {
    standardClient = new Client('Yela', 708, 4800, 'Money Bank', 112);
    standardClient.account.balance = 5500;
    standardClient.account.registerKeysPix('cpf', 708)
    

    goldClient = new Client('Eva', 757, 7000, 'Money Bank', 113);
    
    premiumClient = new Client('Luna', 654, 27000, 'Money Bank', 114)
})

describe('Test the type account of the client depending on the income', () => {
    it('test the Standard account', () =>{
        expect(standardClient.typeAccount()).toBe('Standard')
    })
    it('test the Gold account', () =>{
        expect(goldClient.typeAccount()).toBe('Gold')
    })
    it('test the Premium account', () =>{
        expect(premiumClient.typeAccount()).toBe('Premium')
    })
       
})
describe('Test the transaction Limit for each type of account', () => {
    it('Check the transaction Limit of the StandardAccount', () =>{
        expect(standardClient.account.transactionLimit).toBe(1000)
    })
    it('Check the transaction Limit of the GoldAccount', () =>{
        expect(goldClient.account.transactionLimit).toBe(5000);
    })
    it('Check the transaction Limit of the PremiumAccount', () =>{
        expect(premiumClient.account.transactionLimit).toBe(Infinity);
    })
})
describe('Check the methods of the class Account integrated with the Class Client in Standard Account', () => {
    it('Check the deposit of the StandardClient', () => {
        const deposit = standardClient.account.deposit(2000);
        const depositError = standardClient.account.deposit('i')
        const depositNegativeNumber = standardClient.account.deposit(-50)

        expect(deposit).toBe('Depósito de: R$2000')
        expect(depositError).toBe('Insira um valor númerico');
        expect(depositNegativeNumber).toBe('Não é possível depositar valores negativos')
    })

    it('Check the withdrawal method Standard Account', () => {
        const withdrawal = standardClient.account.withdrawal(1500)
        expect(withdrawal).toBe('O valor excede seu limite de transações diarias.')

    });
    
    
})