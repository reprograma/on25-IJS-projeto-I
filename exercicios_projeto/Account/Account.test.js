const Account = require('./Account');

describe('Account class', () => {
  let client1, client2;

  beforeEach(() => {
    client1 = new Account('Standard');
    client2 = new Account('Gold');
  });

  test('should deposit money correctly', () => {
    client1.deposit(1000);
    expect(client1.balance).toBe(1000);
  });

  test('should withdraw money correctly', () => {
    client1.deposit(1000);
    client1.withdraw(500);
    expect(client1.balance).toBe(500);
  });

  test('should not withdraw more than available balance', () => {
    client1.deposit(500);
    const success = client1.withdraw(1000);
    expect(success).toBe(false);
    expect(client1.balance).toBe(500);
  });

  test('should transfer money between accounts correctly', () => {
    client1.deposit(1000);
    client1.transfer(300, client2);
    expect(client1.balance).toBe(700);
    expect(client2.balance).toBe(300);
  });

  test('should not transfer if amount exceeds balance', () => {
    client1.deposit(500);
    const success = client1.transfer(1000, client2);
    expect(success).toBe(false);
    expect(client1.balance).toBe(500);
    expect(client2.balance).toBe(0);
  });
});
