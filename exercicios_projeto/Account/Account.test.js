const { Account, account1 } = require("./Account")

describe("Testing class Account", () => {
    it("should return an object with the atributes: agency, accountNumber and type (empty)", () => {
        expect((account1)).toBe({"accountNumber": 1, "agency": 1, "type": "", salary: 0})
    })

    it("should return an object that is an instance of Account", () => {
        expect(account1).toBeInstanceOf(Account)
    })

    it("tests the static methos allAccounts", () => {
        expect(Account.allAcounts).toEqual([{"accountNumber": 1, "agency": 1, "type": ""}])
        expect(Account.allAcounts.length).toBe(1)
    })
})