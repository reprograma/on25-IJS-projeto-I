const { Client, client1 } = require("./Client") 

describe("Testing Client class", () => {
    it('should return "Standard" when salary is less than or equal to 4999.99', () => {
        const client = new Client(1, 10, 'Maria', '123', 4500);
        expect(client.accountType()).toBe('Standard');
      });
  
      it('should return "Gold" when salary is between 5000 and 17999.99', () => {
        const client = new Client(1, 11, 'Joana', '124', 10000);
        expect(client.accountType()).toBe('Gold');
      });
  
      it('should return "Premium" when salary is greater than 17999.99', () => {
        const client = new Client(1, 12, 'Renata', '125', 20000);
        expect(client.accountType()).toBe('Premium');
      });
    });
