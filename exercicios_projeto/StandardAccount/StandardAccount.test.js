const StandardAccount = require("./StandardAccount");

describe("Testing Standard Account", () => {
  test("Check daily limit is correct", () => {
    const goldAccount = new StandardAccount("123.456.789-12");

    expect(goldAccount.dailyLimit).toEqual(1000)
  })
})