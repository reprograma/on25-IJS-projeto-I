const { Account, account1 } = require("./Account")

describe("Testing class Account", () => {
    it("should return an object with the atributes: agency, accountNumber and type (empty)", () => {
        expect((account1)).toEqual({"accountNumber": 1, "agency": 1, "type": ""})
    })

    it("should return an object that is an instance of Account", () => {
        expect(account1).toBeInstanceOf(Account)
    })
})