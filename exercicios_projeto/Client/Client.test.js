const Client = require('./Client');

describe('Client class', () => {
  let client1, client2;

  beforeEach(() => {
    client1 = new Client('João', 3000, 'Standard');
    client2 = new Client('Maria', 8000, 'Gold');
  });

  test('should have correct name', () => {
    expect(client1.name).toBe('João');
  });

  test('should register PIX key correctly', () => {
    client1.registerPixKey('email', 'joao@example.com');
    expect(client1.pixKeys.email).toBe('joao@example.com');
  });

});
