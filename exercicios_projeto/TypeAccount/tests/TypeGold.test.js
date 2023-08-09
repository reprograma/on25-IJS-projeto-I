const { TypeGold } = require("../TypeGold");

describe("should create a new TypeGold instance", () => {
  const typeGold1 = new TypeGold();
  test("should create a new TypeAccount instance", () => {
    expect(typeGold1).toBeInstanceOf(TypeGold);
  });
  test("should return the correctly transactionLimit", () => {
    expect(typeGold1.transactionLimit).toBe(5000);
  });
});
