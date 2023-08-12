const GoldAccount = require("./GoldAccount")

describe("Testing Gold Account", () => {
  test("Check daily limit is correct", () => {
    const goldAccount = new GoldAccount("123.456.789-12");

    expect(goldAccount.dailyLimit).toEqual(5000)
  })
})