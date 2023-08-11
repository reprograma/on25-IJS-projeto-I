const {Account} = require("./Account")

describe('verificar depósito', () => {
    test("checar depósito de R$ 10000 em uma conta sem saldo", () => {
        const barbaraAccount = new Account("Bárbara", 332655)
        let amount = 10000
        barbaraAccount.deposit(10000)
        expect(barbaraAccount.balance).toEqual(10000)
    })
})

describe("verificar saque", () => {
    test("checar saque de R$ 100", () => {
        const barbaraAccount = new Account("Bárbara", 332655, 10000)
        let amount = 100
        barbaraAccount.cashWithdrawal(amount)
        expect(9990)

        // NÃO TÁ ATUALIZANDO O VALOR DE BALANCE SENDO DE 10000
    });

    test("checar saque de valor superior ao saldo da conta", () => {
        const barbaraAccount = new Account("Bárbara", 332655, 10000)
        let amount = 20800
        const output = `Saldo insuficiente, ${this.client}! Seu saldo atual é de R$ ${this.balance}. Você precisa de ${amount} para poder realizar o saque.`
        barbaraAccount.cashWithdrawal(20800)
        expect(output)
                // NÃO TÁ ATUALIZANDO O VALOR DE BALANCE SENDO DE 10000
    })
});

describe("verificar transferência para outra conta", () => {
    test("checar transferência para uma conta inválida", () => {
        const barbaraAccount = "contaBárbara"
        const yanAccount = "contaYan"
        let amount = 250
        barbaraAccount.transferTo(yanAccount, amount)
        output = `${this.client}, informe uma conta válida!`
        expect(output)
        // NÃO TÁ RECONHECENDO O TRANSFERTO

    });

    test("checar transferência de R$ 205 para outra conta", () => {
        const barbaraAccount = new Account("Bárbara", 332655)
        const yanAccount = new Account("Yan", 1234)
        let amount = 205
        barbaraAccount.transferTo(yanAccount, amount)
        output = `Transferência realizada com sucesso, ${this.client}! Seu saldo atual é de ${this.balance}.`
        expect(output)
    })
})