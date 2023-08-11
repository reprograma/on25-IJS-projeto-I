const Account = require("./Account");
const Client = require("./../Client/Client");

test("deposit and withdraw", () => {
  const client = new Client("Mary", 4000);
  const account = new Account(client);

  account.deposit(1000);
  expect(account.balance).toBe(1000);

  account.withdraw(500);
  expect(account.balance).toBe(500);
});

test("do not allow withdrawal exceeding balance", () => {
  const client = new Client("Joe", 2000);
  const account = new Account(client);

  account.deposit(500);
  account.withdraw(1000);
  expect(account.balance).toBe(500);
});
