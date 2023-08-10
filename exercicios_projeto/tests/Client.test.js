const { expect, test, beforeEach } = require("@jest/globals");
const Client = require("./../Client");

describe("Testing criation with Bank", () => {
  beforeEach(() => {
    acc = new Client("Isa", "isa@gmail.com", 11985393416, 11985393416, 8000);
  });
  it("Should return true and verify getters", () => {
    expect(acc instanceof Client).toBeTruthy();
    expect(acc.name).toEqual("Isa");
    expect(acc.email).toEqual("isa@gmail.com");
    expect(acc.phone).toEqual(11985393416);
    expect(acc.cpf).toEqual(11985393416);
    expect(acc.monthlyIncome).toEqual(8000);
  });
});
