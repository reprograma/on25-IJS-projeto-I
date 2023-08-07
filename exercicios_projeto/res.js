const Bank = require("./Bank");
const Client = require("./Client");
const Account = require("./Account");

const nubank = new Bank("Nubank", 123);

console.log(nubank);

const yuka = new Client(
  "Yuka",
  "yuka@gmail.com",
  11985393416,
  48241770812,
  4000
);

console.log(yuka);

const yukaAcc = new Account(yuka, nubank);

console.log(yukaAcc);
