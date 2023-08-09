const { TypeStandard } = require("../TypeStandard");

describe("should create a new TypeGold instance", () => {
  const typeStandard = new TypeStandard();
  test("should create a new TypeAccount instance", () => {
    expect(typeStandard).toBeInstanceOf(TypeStandard);
  });
  test("should return the correctly transactionLimit", () => {
    expect(typeStandard.transactionLimit).toBe(1000);
  });
});
