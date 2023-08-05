const {Account} = require('./Account');

describe("Test the Account Class Attributes", () => {
  let account1;
  
  beforeEach(() => {
    account1 = new Account("Laíssa", 123, 45678);
  })

  // it("Should verify if client is instance of Client", ()=> {
  //   expect(account1.client instanceof Client).toBe(true)
  // })

  it("Shoud return Account Number and Agency", ()=> {
    expect(account1.accountNumber).toBe(123);
    expect(account1.agency).toBe(45678);
  }),

  it("Should verify if pixKeys return undefined", ()=> {
    expect(account1.pixKeys).toEqual( {"cpf": undefined, "email": undefined, "telefone": undefined})
  }),

  it("should verify if the static attribute createdAccounts is receiving the new accounts ", ()=> {
    const account2 = new Account(345, 98768);
    expect(Account.createdAccounts).toContain(account1);
    expect(Account.createdAccounts).toContain(account2);
  })
})