const { Account } = require("./Account");
const { Client } = require("../Client/Client");

const client1 = new Client("Daniela", 12345689, 4999.99);
const conta1 = new Account(client1, 123, 456);

const client2 = new Client("Lara", 56978545612, 10000);
const conta2 = new Account(client2, 123, 321);

const client3 = new Client("Blanc", 78965415632, 20000);
const conta3 = new Account(client3, 123, 789);
describe("Criar Conta", () => {
  it("Deve criar uma conta com o cliente 1", () => {
    const output = conta1;
    expect(conta1).toBe(output);
  });
});

describe("Teste da função de Deposito", () => {
  const deposito = conta1.deposito(500);
  it("Deve fazer um deposito de R$ 500,00", () => {
    const output = true;
    expect(deposito).toBe(output);
  });
});

describe("Teste da função de Sacar conta tipo Standard", () => {
  it("Deve fazer um saque de R$ 10,00", () => {
    const sacar = conta1.saque(10);
    const output = true;
    expect(sacar).toBe(output);
  });

  it("Deve fazer um saque de R$1200,00 e não conseguir pois é um valor maior que o limite da conta", () => {
    const sacar = conta1.saque(1200);
    const output = "Valor maior que o seu limite diário.";
    expect(sacar).toBe(output);
  });

  it("Deve fazer um saque de R$ 700,00 e não conseguir por saldo insuficiente", () => {
    const sacar = conta1.saque(700);
    const output = "Saldo insuficiente.";
    expect(sacar).toBe(output);
  });
});

describe("Teste da função de Sacar conta tipo Gold", () => {
  conta2.deposito(2000);
  it("Deve fazer um saque de R$ 10,00", () => {
    const sacar = conta2.saque(10);
    const output = true;
    expect(sacar).toBe(output);
  });

  it("Deve fazer um saque de R$6000,00 e não conseguir pois é um valor maior que o limite da conta", () => {
    const sacar = conta2.saque(6000);
    const output = "Valor maior que o seu limite diário.";
    expect(sacar).toBe(output);
  });

  it("Deve fazer um saque de R$ 2500,00 e não conseguir por saldo insuficiente", () => {
    const sacar = conta2.saque(2500);
    const output = "Saldo insuficiente.";
    expect(sacar).toBe(output);
  });
});

describe("Teste da função de Sacar conta tipo Premium", () => {
  conta3.deposito(2000);
  it("Deve fazer um saque de R$ 100,00", () => {
    const sacar = conta3.saque(100);
    const output = true;
    expect(sacar).toBe(output);
  });

  it("Deve fazer um saque de R$ 2500,00 e não conseguir por saldo insuficiente", () => {
    const sacar = conta3.saque(2500);
    const output = "Saldo insuficiente.";
    expect(sacar).toBe(output);
  });
});

describe("Teste da função de Transferir conta tipo Standard", () => {
  it("Deve fazer uma transferencia de R$ 100,00", () => {
    const transferir = conta1.transferencia(conta2, 100);
    const output = true;
    expect(transferir).toBe(output);
  });

  it("Deve fazer uma transferencia de R$1200,00 e não conseguir pois é um valor maior que o limite da conta", () => {
    const transferir = conta1.transferencia(conta2, 1200);
    const output = "Valor maior que o seu limite diário.";
    expect(transferir).toBe(output);
  });

  it("Deve fazer uma transferencia de R$ 250,00 e não conseguir por saldo insuficiente", () => {
    const transferir = conta1.transferencia(conta2, 600);
    const output = "Saldo insuficiente.";
    expect(transferir).toBe(output);
  });
});

describe("Teste da função de Transferir conta tipo Gold", () => {
  it("Deve fazer uma transferencia de R$ 100,00", () => {
    const transferir = conta2.transferencia(conta3, 100);
    const output = true;
    expect(transferir).toBe(output);
  });

  it("Deve fazer uma transferencia de R$1200,00 e não conseguir pois é um valor maior que o limite da conta", () => {
    const transferir = conta2.transferencia(conta3, 5500);
    const output = "Valor maior que o seu limite diário.";
    expect(transferir).toBe(output);
  });

  it("Deve fazer uma transferencia de R$ 4000,00 e não conseguir por saldo insuficiente", () => {
    const transferir = conta2.transferencia(conta3, 4000);
    const output = "Saldo insuficiente.";
    expect(transferir).toBe(output);
  });
});

describe("Teste da função de Transferir conta tipo Premium", () => {
  it("Deve fazer uma transferencia de R$ 100,00", () => {
    const transferir = conta3.transferencia(conta2, 100);
    const output = true;
    expect(transferir).toBe(output);
  });

  it("Deve fazer uma transferencia de R$ 10000,00 e não conseguir por saldo insuficiente", () => {
    const transferir = conta3.transferencia(conta2, 10000);
    const output = "Saldo insuficiente.";
    expect(transferir).toBe(output);
  });
});