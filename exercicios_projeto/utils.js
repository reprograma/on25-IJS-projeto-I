const { Bank } = require("./Bank/Bank");
const { Standard } = require("./StandardAccount/StandardAccount");
const { Gold } = require("./GoldAccount/GoldAccount");
const { Premium } = require("./PremiumAccount/PremiunAccount");
const { BankAccount } = require("./Account/Account");
const { PixKey } = require('./PixKey/PixKey');

let banco = new Bank(100, "Banco do Brasil");
let banco2 = new Bank(101, "Banco Inter");

let cliente1 = new Standard("Carla", "123456789", "carla@email.com", 81999999999, 3000);
let cliente2 = new Gold("Dorinha", "159951123", "dorinha@email.com", 81999999999, 8000);
let cliente3 = new Premium("Valentina", "213645978", "valentina@email.com", 81999999999, 19500);

let conta1 = new BankAccount(cliente1, banco, 1500); 
let conta2 = new BankAccount(cliente2, banco, 5000);
let conta3 = new BankAccount(cliente3, banco2, 10000);

let pix1 = new PixKey("carla123", cliente1, banco);
let pix2 = new PixKey("dorinha123", cliente2, banco);
let pix3 = new PixKey("valentina123", cliente3, banco2); 
let pix4 = new PixKey("123456489", cliente1, banco);

let amount; // Talvez você queira atribuir algum valor aqui

module.exports = { banco, banco2, cliente1, cliente2, cliente3, conta1, conta2, conta3, pix1, pix2, pix3, pix4, amount };
