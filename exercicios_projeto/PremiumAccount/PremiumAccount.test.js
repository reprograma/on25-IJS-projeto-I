const PremiumAccount = require("./PremiumAccount");

describe("Testing Premium Account", () => {
  test("Check daily limit is correct", () => {
    const goldAccount = new PremiumAccount("123.456.789-12");

    expect(goldAccount.dailyLimit).toEqual(null)
  })
})