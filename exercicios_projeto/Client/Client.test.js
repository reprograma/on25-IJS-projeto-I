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

describe("Test get functions", () => {
  beforeEach(() => {
    this.client = new Client("Mary Doe", "123.123.123-12", 20000);
  })

  test("Testing the get cpf function", () => {
    expect(this.client.cpf).toEqual("123.123.123-12");
  })

  test("Testing the get income function", () => {
    expect(this.client.income).toEqual(20000)
  })
})

describe("Check the register account function", () => {
  beforeEach(() => {
    this.client = new Client("John Doe", "154.145.654-98", 2000)
  })

  test("Check the return", () => {
    expect(this.client.registerAccount()).toEqual("Account created.")
  })
  test("Instance standard account with cpf to equal cpf client", () => {
    this.client.registerAccount()
    expect(this.client.account.cpf).toEqual(this.client.cpf)
  })
})