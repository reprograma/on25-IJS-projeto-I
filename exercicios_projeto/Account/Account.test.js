const {Account} = require('./Account');
const {Client} =  require("../Client/Client")

describe("Test the Account Class", () => {
  let client1;
  let account1;
  
  beforeEach(() => {
    client1 = new Client('Laíssa', 132854789658, 'laissa@teste.com', 998789658, 4000)
    account1 = new Account(client1, 123, 45678);
  })

  describe("Test the Account Class Attributes", () => {  
    it("Should verify if client is instance of Client", ()=> {
      expect(account1.client instanceof Client).toBe(true)
    }),
  
    it("Shoud return Account Number and Agency", ()=> {
      expect(account1.accountNumber).toBe(123);
      expect(account1.agency).toBe(45678);
    }),
  
    it("Should verify if pixKeys return undefined", ()=> {
      expect(account1.pixKeys).toEqual( {"cpf": undefined, "email": undefined, "telefone": undefined})
    }),
  
    it("should verify if the static attribute createdAccounts is receiving the new accounts ", ()=> {
      const client2 = new Client("Lucas", 13256987, 'lucas@teste.com', 12546875, 6000)
      const account2 = new Account(client2, 345, 98768);
      expect(Account.createdAccounts).toContain(account1);
      expect(Account.createdAccounts).toContain(account2);
    })

    // it("should return de Type of the Account 'Standard'", ()=> {
    //   expect(account1.typeOfAccount).toEqual("Standard")
    // })
  })
  
  describe("Test the Account Class Methods", () => {
    describe("Test the registerPixKey() Method", ()=> {
      it("should test the registerPixKey(), in case of invalid key (different of 'cpf', 'email' or 'phone')", () => {
        expect(account1.registerPixKey('anything different', 'teste')).toEqual('Insira um tipo de chave pix válida!');
       })
   
       it("should verify if pixKey 'cpf' is the same of Client's Cpf'", () => {
         expect(account1.registerPixKey('cpf', 132854)).toEqual(`Cpf diferente do cadastrado no banco de dados do Cliente. Verifique e tente novamente.`)
       }),
   
       it("should return a msg de cadastro de chave pix do tipo phone.'", () => {
         expect(account1.registerPixKey('phone', 89658)).toEqual(`Chave Pix: 89658 - do tipo phone, cadastrada com sucesso!`)
       }),
   
       it("should return a msg de chave pix Phone já cadastrada.'", () => {
         account1.pixKeys = {cpf: undefined, email: undefined, phone: 89658 };
         expect(account1.registerPixKey('phone', 89658)).toEqual(`Chave Pix já cadastrada!`)
       })
    })
  })
})