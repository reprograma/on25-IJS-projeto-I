const { Client } = require("../Client/Client");
const { TypeStandard } = require("../TypeAccount/TypeStandard");
const { TypeGold } = require("../TypeAccount/TypeGold");
const { TypePremium } = require("../TypeAccount/TypePremium");

describe("Verify Client class", () => {
  let client1;
  beforeEach(() => {
    client1 = new Client("Marina", 42565878, 1000);
  });
  test("shoud create a new client with the provided data", () => {
    expect(client1.name).toBe("Marina");
    expect(client1.cpf).toBe(42565878);
    expect(client1.salary).toBe(1000);
  });

  test("should return the correct CPF using getter", () => {
    expect(client1.cpf).toBe(42565878);
  });
  test("should return the correctly type account according with salary", () => {
    expect(client1.typeAccount).toEqual(new TypeStandard());
  });
});
