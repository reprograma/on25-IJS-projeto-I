const { TypeAccount } = require("../TypeAccount");

describe("should create a new TypeAccount instance", () => {
  const TypeAccount1 = new TypeAccount();
  test("should create a new TypeAccount instance", () => {
    expect(TypeAccount1).toBeInstanceOf(TypeAccount);
  });
});
