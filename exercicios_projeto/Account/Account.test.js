const { Account } = require('./Account');
const { Client } = require('../Client/Client');

describe("verifies everything", () => {
  let client1;
  let bankAccount1;
  let client2;
  let bankAccount2;

  beforeEach(() => {
    client1 = new Client("Raquel Davino", "11897655423", 5000);
    bankAccount1 = new Account("0281", "123456-9", client1);

    client2 = new Client("Zoe Davino", "9154786612", 3000);
    bankAccount2 = new Account("0281", "33333-9", client2);

    bankAccount1.balance = 1000;
    client2.addPhone("982940541")
    bankAccount2.createPixKey("phone")

  });


  describe("verifies isAccount function", () => {
    it("Should return true if account is an Account instance", () => {
        expect(Account.isAccount(bankAccount1)).toEqual(true)
    });

    it("Should return false if account isn't an Account instance", () => {
        const client1 = new Client();

        expect(Account.isAccount(client1)).toEqual(false);
    });
});

  describe("verifies if an instantiation of Account was created correctly", () => {
    it("should create an account", () => {
        const client1 = new Client("Raquel Davino", "11698733658", 6000);
        const bankAccount1 = new Account("0281", "123456-9", client1);
        expect(bankAccount1).toBeTruthy();
    })

  })

  describe("verifies createPixKey function", () => {
      it("should create a pixKey and return its value", () => {
        
        bankAccount1.createPixKey("cpf")
      expect(bankAccount1.pixKey).toBe("9154786612");
      })
  })

  describe("verifies toDeposit function", () => {
    it("should increase balance according to informed amount", () => {
      bankAccount1.toDeposit(1000);

      expect(bankAccount1.balance).toBe(2000);
    })
  })

  describe("verifies toPix function", () => {
      
    // bankAccount1.balance = 1000;
      it("should transfer an amount from one account to another using pixKey", () => {
        bankAccount1.toPix("982940541", 1000)
        expect(bankAccount2.balance).toBe(1000);
      })
      
      it("should debit an amount from one account to another when pix", () => {
        bankAccount1.toPix("982940541", 1000)
        expect(bankAccount1.balance).toBe(0);
      })
      
  })


})

