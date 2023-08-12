const Client = require('../Client/Client');
const Account = require('./Account');

describe("Test the constructor and get functions", () => {
  beforeEach(() => {
    this.account = new Account("123.456.789-12")
  })

  test("Check the constructor", () => {
    expect(this.account).toEqual({
      "accountType": "",
      "dailyLimit": 0,
    })
  })

  test("Check get cpf function", () => {
    expect(this.account.cpf).toEqual("123.456.789-12")
  })

  test("Check get balance function", () => {
    expect(this.account.balance).toEqual(0)
  })
})

describe("Testing the methods", () => {
  beforeEach(() => {
    this.account = new Account("123.456.789-12")
  })

  test("Check the deposit funciton return true", () => {
    expect(this.account.deposit(100)).toEqual(true)
  })

  test("Check if the deposit function return error when amount is not a number", () => {
    expect(this.account.deposit("number")).toEqual("amount is not a number, digit a valid value")
  })
})
