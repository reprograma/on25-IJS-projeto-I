const { Account } = require("./Account");
const { Client } = require("../Client/Client");

describe("Verrify Account class", () => {
  let account1;
  let account2;
  let account3

  beforeEach(() => {
    const client1 = new Client("Marina", 42565878, 1000);
    const client2 = new Client("Jorge", 123, 1000);
    const client3 = new Client("Ze", 77731000090, 20000);
    const numberAccount1 = 512;
    const agencyNumber1 = 20;
    const numberAccount2 = 685;
    const agencyNumber2 = 21;
    const numberAccount3 = 700;
    const agencyNumber3 = 30;

    account1 = new Account(client1, numberAccount1, agencyNumber1);
    account2 = new Account(client2, numberAccount2, agencyNumber2);
    account3 = new Account(client3, numberAccount3, agencyNumber3);

    account1.pixKey.push("mama@gmail.com");
    account1.pixKey.push("758.589.558-98");
    account2.pixKey.push("9999-9999");
    account3.pixKey.push("ze@gmail.com");
  });

  test("should create a new account instance", () => {
    expect(account1).toBeInstanceOf(Account);
    expect(account1.client).toBeInstanceOf(Client);
    expect(account1.numberAccount).toBe(512);
    expect(account1.balance).toBe(1000);
    expect(account1.qntTransactionValue).toBe(0);
    expect(account1.MAX_TRANSACTION_VALUE).toBe(1000);
  });

  test("should get pixKey using getter", () => {
    expect(account2.pixKey).toEqual(["9999-9999"]);
  });

  test("should set pixKey using setter", () => {
    account2.pixKey.push("356.879.985-00");
    expect(account2.pixKey[1]).toEqual("356.879.985-00");
  });

  test("check when qntTransactionValue is greater than the MAX_TRANSACTION_VALUE", () => {
    expect(
      account1.qntTransactionValue >= account1.MAX_TRANSACTION_VALUE
    ).toEqual(false);
  });

  test("should correctly increment qntTransactionValue and generate message", () => {
    let amount = 10;
    account1.qntTransactionValue += amount;
    let operation = "Débito de";
   
    let menssage = `Faltam: R$ ${
      account1.MAX_TRANSACTION_VALUE - account1.qntTransactionValue
    } pra atingir seu limite de transição diário. ${operation}: R$ ${amount} realizado. Agora seu saldo é de: R$ ${ account1.balance }.`;
      
    let expectedMessage =
      "Faltam: R$ 990 pra atingir seu limite de transição diário. Débito de: R$ 10 realizado. Agora seu saldo é de: R$ 1000.";
    expect(account1.qntTransactionValue).toEqual(amount);
    expect(menssage).toEqual(expectedMessage);
  });

  test("should correctly calculate withdrawal amount", () => {
    let amount = 10;
    account1.balance -= amount;
    expect(amount > account1.balance).toEqual(false);
    expect(account1.balance).toEqual(990);
  });
  test("should correctly calculate deposit amount", () => {
    let amount = 10;
    account1.balance += amount;
    expect(account1.balance).toEqual(1010);
  });
  test("should correctly transfer between accounts", () => {
    const amount = 10;
    const initialBalance1 = account1.balance;
    const initialBalance2 = account2.balance;
    const anotherCPF = account2.client.cpf;

    account1.transferTo(account2, anotherCPF, amount);

    expect(account1.balance).toEqual(initialBalance1 - amount);
    expect(account2.balance).toEqual(initialBalance2 + amount);
  });
  test("should transfer money using pixKeys", () => {
    const amount = 10;
    account1.balance -= amount;
    account2.balance += amount;
    const pixKey = account2.pixKey[0];
    account1.transferToPix(pixKey, amount);

    expect(account1.balance).toEqual(980);
    expect(account2.balance).toEqual(1010);
  });
  test("should throw an error when transfering more than the balance", () => {
    const amount = 600; 
    account1.balance = 500
    expect(() => account1.transferToPix(account2.pixKey[0], amount)).toThrow(
      "Operação cancelada, valor solicitado maior que saldo atual."
    );
  });
  test("should find the account by pixKey", () => {
    const foundAccount = account1.findAccountByPixKey("mama@gmail.com")
    expect(foundAccount).toEqual(account1);
  });

  test("should throw an error when account is not found by pixKey", () => {
    const invalidPixKey = "invalid_key";
    expect(() => account1.findAccountByPixKey(invalidPixKey)).toThrowError(
      "Conta não encontrada."
    );
  });
});
