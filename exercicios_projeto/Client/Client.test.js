const { Client } = require("./Client");

describe("Test the Client Class Attributes", () => {
  let client1;

  beforeEach(() => {
    client1 = new Client("Laíssa", 1325, "laissa@teste.com", 12344568, 4000);
  });

  it("should return the client's name 'Laíssa'", () => {
    expect(client1.name).toBe("Laíssa");
  }),
    it("should return the private attribute Cpf '1325'", () => {
      expect(client1.cpf).toEqual(1325);
    }),
    it("should set a new income", () => {
      expect(client1.income).toBe(4000);
      client1.income = 5000;
      expect(client1.income).toBe(5000);
    });
});
