const {Account} = require('./Account');
const {Client} =  require("../Client/Client")

describe("Test the Account Class", () => {
  let client1;
  let account1;
  
  beforeAll(() => {
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
         expect(account1.registerPixKey('phone', 89658)).toEqual(`Chave Pix já cadastrada!`)
       })
    }),

    describe("Test all banking operations", ()=> {
      let client3;
      let account3;
      beforeAll(()=> {
        account1.creditAmount(1000);

        client3 = new Client('Lucas', 13285478, 'lucas@teste.com', 99878, 6000)
        account3 = new Account(client3, 123, 45656);
      })

      it("Should test creditAmount(1000), and return the account balance: R$1000,00", () => {
        expect(account1.balance).toBe(1000);
      }),

      it("Should debit the amount of R$90,00 and return R$910,00", () => {
        expect(account1.debitAmount(90)).toBe('O seu saldo atual é R$910,00.');
      }),

      it("should verify if anotherAccount is instaceof Account, before transfer money", () => {
        expect(account1.transferTo("qualquercoisa", 500)).toBe(`Insira uma conta válida!`);
      }),

      it("should test the transferTo method - Considering that account1 has R$910,00 and account3 has R$0,00", () => {
        account1.transferTo(account3, 200);
        expect(account1.balance).toBe(710);
        expect(account3.balance).toBe(200);
      }),

      it("should return 'invalid operation' due to no balance", () => {
        expect(account1.transferTo(account3, 900)).toEqual(`Operação negada. Você não tem saldo suficiente.`)
      })

    })
  })
})