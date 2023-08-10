const { expect, test, beforeEach } = require("@jest/globals");

const Bank = require("./../Bank");
const Client = require("./../Client");
const Account = require("./../Account");

beforeEach(() => {
  nubank = new Bank("NuBank", 123);

  yukaClient = new Client(
    "Yuka",
    "yuka@gmail.com",
    11985393416,
    48241770812,
    4000
  );
});

describe("Testing criation with Bank", () => {
  beforeEach(() => {
    bank = new Bank("Banco", 123);
  });
  it("Should return true and verify getters", () => {
    expect(bank instanceof Bank).toBeTruthy();
    expect(bank.bankName).toEqual("Banco");
    expect(bank.bankCode).toEqual(123);
    expect(bank.accs).toEqual([]);
  });
});

describe("Testing method pushAcc when create Acc", () => {
  it("Should return [acc {}]", () => {
    yukaAcc = new Account(yukaClient, nubank);
    expect(nubank.accs).toEqual([{}]);
    expect(nubank.accs[0] instanceof Account).toBeTruthy();
  });
});
