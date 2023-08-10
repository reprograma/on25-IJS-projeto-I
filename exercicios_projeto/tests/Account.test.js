const { expect, test, beforeEach } = require("@jest/globals");

const Bank = require("./../Bank");
const Client = require("./../Client");
const Account = require("./../Account");

beforeEach(() => {
  nubank = new Bank("NuBank", 123);

  bolabank = new Bank("BolaBank", 456);

  yukaClient = new Client(
    "Yuka",
    "yuka@gmail.com",
    11985393416,
    48241770812,
    4000
  );

  lanClient = new Client(
    "Lan",
    "lan@gmail.com",
    11985393234,
    46281570312,
    6000
  );

  lewClient = new Client(
    "Lew",
    "lew@gmail.com",
    11985393554,
    30541570312,
    19000
  );
});

// testar criaçao
describe("Testing criation with Account", () => {
  beforeEach(() => {
    acc = new Account(yukaClient, nubank);
  });
  it("Should return true and verify getters", () => {
    expect(acc instanceof Account).toBeTruthy();
    expect(acc.client).toEqual(yukaClient);
    expect(acc.bank).toEqual(nubank);
    expect(acc.balance).toEqual(0);
    expect(acc.pixKeys).toEqual({
      email: null,
      cpf: null,
      phone: null,
      random: [],
    });
  });
});

// testar deposit
describe("Testing method Deposit", () => {
  beforeEach(() => {
    yukaAcc = new Account(yukaClient, nubank);
  });
  it("Should return deposito feito!", () => {
    expect(yukaAcc.deposit(1000)).toEqual("Foi feito o deposito!");
  });
  it("Should throw Error", () => {
    expect(() => yukaAcc.deposit(-1000)).toThrow(
      Error("Não é possivel depositar valores negativos")
    );
  });
  it("Should throw Error", () => {
    expect(() => yukaAcc.deposit("mil")).toThrow(
      Error("Não é possivel depositar valores que nao sejam numeros inteiros")
    );
  });
});

// testar draw
describe("Testing method draw", () => {
  beforeEach(() => {
    yukaAcc = new Account(yukaClient, nubank);
    yukaAcc.deposit(5000);
  });
  it("Should return saque feito", () => {
    expect(yukaAcc.draw(1000)).toEqual("Saque feito!");
  });
  it("Should throw Error de numeros negativos", () => {
    expect(() => yukaAcc.draw(-1000)).toThrow(
      Error("Não é possivel retirar (sacar) valores negativos")
    );
  });
  it("Should throw Error maior o valor da retirada", () => {
    expect(() => yukaAcc.draw(6000)).toThrow(
      Error("Erro valor de retirada maior do que o balance")
    );
  });
  it("Should throw Error de ser uma string ou bool", () => {
    expect(() => yukaAcc.draw("dinheiro")).toThrow(
      Error(
        "Não é possivel retirar (sacar) valores que nao sejam numeros inteiros"
      )
    );
  });
});
// testar tedTransfer
describe("Testing method tedTransfer", () => {
  beforeEach(() => {
    yukaAcc = new Account(yukaClient, nubank);
    yukaAcc.deposit(5000);
    lanAcc = new Account(lanClient, nubank);
    lanAcc.deposit(6000);
    lanAcc.tedTransfer(yukaAcc, 48241770812, 5000);
    lewAcc = new Account(lewClient, bolabank);
    lewAcc.deposit(5000);
    impostor = {};

    //yukaAcc = 10000 lanAcc = 1000
  });

  it("Should return transferencia feita", () => {
    expect(yukaAcc.tedTransfer(lanAcc, 46281570312, 1000)).toEqual(
      "Transferencia via TED feita"
    );
  });
  it("Should return transferencia feita mesmo sendo de outro banco", () => {
    expect(yukaAcc.tedTransfer(lewAcc, 30541570312, 1000)).toEqual(
      "Transferencia via TED feita"
    );
  });

  it("Should throw Error da conta", () => {
    expect(() => yukaAcc.tedTransfer(impostor, 0, 1000)).toThrow(
      Error("Erro Não é uma conta")
    );
  });

  it("Should throw Error do balance", () => {
    expect(() => lewAcc.tedTransfer(lanAcc, 46281570312, 6000)).toThrow(
      Error("Erro valor amount maior do que o balance")
    );
  });

  it("Should throw Error transactionThreshold", () => {
    expect(() => lanAcc.tedTransfer(lewAcc, 30541570312, 100)).toThrow(
      Error("Erro valor amount maior do que o permitido")
    );
  });

  it("Should throw Error cpf", () => {
    expect(() => yukaAcc.tedTransfer(lewAcc, 30541570313, 100)).toThrow(
      Error("Erro cpf não esta certo")
    );
  });
});
// testar createPixKey
describe("Testing method createPixKey", () => {
  beforeEach(() => {
    yukaAcc = new Account(yukaClient, nubank);
    yukaAcc.createPixKey("cpf");
  });

  it("Should return Created pix key", () => {
    expect(yukaAcc.createPixKey("email")).toEqual("Criada chave pix");
  });

  it("Should throw Error chave pix repetida", () => {
    expect(() => yukaAcc.createPixKey("cpf")).toThrow(
      Error("Erro chave pix repetida")
    );
  });

  it("Should throw Error of creation", () => {
    expect(() => yukaAcc.createPixKey("qualquer coisa")).toThrow(
      Error("Erro de criaçao de chave pix")
    );
  });
});

// testar pixTransfer

describe("Testing method pixTransfer", () => {
  beforeEach(() => {
    nubank = new Bank("NuBank", 123);
    bolabank = new Bank("BolaBank", 456);

    yukaAcc = new Account(yukaClient, nubank);
    yukaAcc.deposit(5000);
    yukaAcc.createPixKey("email");
    lanAcc = new Account(lanClient, nubank);
    lanAcc.deposit(6000);
    lanAcc.tedTransfer(yukaAcc, 48241770812, 5000);
    lanAcc.createPixKey("email");
    lewAcc = new Account(lewClient, bolabank);
    lewAcc.createPixKey("email");
  });
  it("Should return Pix efetuado", () => {
    expect(yukaAcc.pixTransfer("lan@gmail.com", "email", nubank, 1000)).toEqual(
      "Pix efetuado"
    );
  });
  it("Should return Error balance insufficient", () => {
    expect(() =>
      yukaAcc.pixTransfer("lan@gmail.com", "email", nubank, 11000)
    ).toThrow(Error("Erro valor amount maior do que o balance"));
  });

  it("Should return Error transaction threshold insufficient", () => {
    expect(() =>
      lanAcc.pixTransfer("yuka@gmail.com", "email", nubank, 100)
    ).toThrow(Error("Erro valor amount maior do que o permitido"));
  });

  it("Should return Error is not the same bank", () => {
    expect(() =>
      yukaAcc.pixTransfer("lew@gmail.com", "email", bolabank, 100)
    ).toThrow(Error("Erro não é o mesmo banco"));
  });
});
