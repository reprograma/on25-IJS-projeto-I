const { TypePremium } = require("../TypePremium");

describe("should create a new TypeGold instance", () => {
  const typePremium = new TypePremium();
  test("should create a new TypeAccount instance", () => {
    expect(typePremium).toBeInstanceOf(TypePremium);
  });
  test("should return the correctly transactionLimit", () => {
    expect(typePremium.transactionLimit).toBe("Sem limite de transação.");
  });
});
