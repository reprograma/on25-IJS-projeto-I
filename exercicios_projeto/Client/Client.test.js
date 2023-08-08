const Client = require('./Client');

describe("Client Type", () => {
  test('Registered client without account', () => {
    const client = new Client("Mary Smith", "111.222.333-44", 4000);

    expect(client.accountType).toEqual("");
    expect(client.account).toEqual(null);
  })

  test('Get account type for Standard Client', () => {
    const client = new Client("Jonh Doe", "111.222.333-44", 2000);
    client.registerAccount();

    expect(client.accountType).toEqual("Standard");
  })

  test('Get account type for Gold Client', () => {
    const client = new Client("Jane Doe", "111.222.333-44", 10000);
    client.registerAccount();

    expect(client.accountType).toEqual("Gold");
  })

  test('Get account type for Premium Client', () => {
    const client = new Client("Jane Doe", "111.222.333-44", 20000);
    client.registerAccount();

    expect(client.accountType).toEqual("Premium");
  })
})