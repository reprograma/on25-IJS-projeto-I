const { Account } = require("./Account");
const { Client } = require("../Client/Client");

describe("Test the Account Class", () => {
  let client1;
  let account1;
  let client2;
  let account2;
  let client3;
  let account3;

  beforeAll(() => {
    client1 = new Client(
      "Laíssa",
      132854789658,
      "laissa@teste.com",
      998789658,
      4000
    );
    account1 = new Account(client1, 123, 45678);
    client2 = new Client("Lucas", 13256987, "lucas@teste.com", 12546875, 6000);
    account2 = new Account(client2, 345, 98768);
    client3 = new Client("Tania", 13254857, "tania@teste.com", 68751254, 12000);
    account3 = new Account(client3, 678, 76988);
  });

  describe("Test the Account Class Attributes", () => {
    it("Should verify if client is instance of Client", () => {
      expect(account1.client instanceof Client).toBe(true);
    }),
      it("Should return Account Number and Agency", () => {
        expect(account1.accountNumber).toBe(123);
        expect(account1.agency).toBe(45678);
      }),
      it("Should verify if pixKeys return undefined", () => {
        expect(account1.pixKeys).toEqual({
          cpf: undefined,
          email: undefined,
          telefone: undefined,
        });
      }),
      it("should verify if the static attribute createdAccounts is receiving the new accounts ", () => {
        expect(Account.createdAccounts).toContain(account1);
        expect(Account.createdAccounts).toContain(account2);
      }),
      it("should generate the type of Account, and return Standard and Gold", () => {
        expect(account1.generateTypeAccount()).toEqual("Standard");
        expect(account2.generateTypeAccount()).toEqual("Gold");
      });
  });

  describe("Test the Account Class Methods", () => {
    describe("Test the registerPixKey() Method", () => {
      it("should test the registerPixKey(), in case of invalid key (different of 'cpf', 'email' or 'phone')", () => {
        expect(account1.registerPixKey("anything different", "teste")).toEqual(
          "Insira um tipo de chave pix válida!"
        );
      });

      it("should verify if pixKey 'cpf' is the same of Client's Cpf'", () => {
        expect(account1.registerPixKey("cpf", 132854)).toEqual(
          `Cpf diferente do cadastrado no banco de dados do Cliente. Verifique e tente novamente.`
        );
      }),
        it("should return a msg de cadastro de chave pix do tipo phone.'", () => {
          expect(account1.registerPixKey("phone", 89658)).toEqual(
            `Chave Pix: 89658 - do tipo phone, cadastrada com sucesso!`
          );
          expect(account2.registerPixKey("email", "lucas@test.com")).toEqual(
            `Chave Pix: lucas@test.com - do tipo email, cadastrada com sucesso!`
          );
        }),
        it("should return a msg de chave pix Phone já cadastrada.'", () => {
          expect(account1.registerPixKey("phone", 89658)).toEqual(
            `Chave Pix já cadastrada!`
          );
        });
    }),
      describe("Test hasPixKeysRegisteredInCreatedAccount()", () => {
        it("should find the key and value and return the Object", () => {
          expect(
            Account.hasPixKeysRegisteredInCreatedAccount(
              "email",
              "lucas@test.com"
            )
          ).toEqual({
            client: { name: "Lucas" },
            dailyTransactionUsed: 0,
            pixKeys: {
              cpf: undefined,
              email: "lucas@test.com",
              phone: undefined,
            },
            typeOfAccount: "Gold",
          });
        }),
          it("shouldn't find a pix key and return 'Chave Pix não encontrada' ", () => {
            expect(
              Account.hasPixKeysRegisteredInCreatedAccount(
                "email",
                "laissa@test.com"
              )
            ).toBeNull();
          });
      });

    describe("Test all banking operations", () => {
      beforeAll(() => {
        account1.creditAmount(1000);
      });

      it("Should test creditAmount(1000), and return the account balance: R$1000,00", () => {
        expect(account1.balance).toBe(1000);
      }),
        it("Should debit the amount of R$90,00 and return R$910,00", () => {
          expect(account1.debitAmount(90)).toBe(
            "O seu saldo atual é R$910,00."
          );
        }),
        it("should verify if anotherAccount is instaceof Account, before transfer money", () => {
          expect(account1.transferTo("qualquercoisa", 500)).toBe(
            `Insira uma conta válida!`
          );
        }),
        it("should test the transferTo method - Considering that account1 has R$910,00 and account2 has R$0,00", () => {
          account1.transferTo(account2, 200);
          expect(account1.balance).toBe(710);
          expect(account2.balance).toBe(200);
        }),
        it("should return 'invalid operation' due to no balance", () => {
          expect(account2.transferTo(account1, 900)).toEqual(
            `Operação negada. Você não tem saldo suficiente.`
          );
        }),
        it("should test transferPix() and return the updated balance of account1 e account2", () => {
          account2.registerPixKey("phone", 99878);
          expect(account1.transferPix("phone", 99878, 100)).toBe(
            `Pix de R$100,00 realizado com sucesso! Seu saldo atual é de R$610,00`
          );
          expect(account2.balance).toBe(300);
          expect(account1.balance).toBe(610);
        });

      it("should return the 'dailyTransactionUsed' Account1 and Account2", () => {
        expect(account1.dailyTransactionUsed).toBe(390);
        expect(account2.dailyTransactionUsed).toBe(0);
      });

      describe("Test verifyDailyTransactionLimit()", () => {
        it("should return 'Limite diário atingido', because account3 has a Gold Status and has 5000 of daily limit", () => {
          account3.creditAmount(10000);
          account3.debitAmount(1000);
          account3.transferTo(account1, 2000);
          account2.registerPixKey("phone", 99878);
          account3.transferPix("phone", 99878, 2000);
          expect(account3.generateTypeAccount()).toEqual("Gold");
          expect(account3.verifyDailyTransactionLimit(1)).toBe(
            "Limite diário atingido."
          );
          expect(account3.dailyTransactionUsed).toBe(5000);
        });
      });
    });
  });
});
