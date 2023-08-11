const Client = require("./Client");

test("create client", () => {
  const client = new Client("Ana", 3000);
  expect(client.name).toBe("Ana");
  expect(client.monthlyIncome).toBe(3000);
});
