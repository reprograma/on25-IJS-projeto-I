const { Clients, Gold, Premium, Standard } = require('./Client');
const { BankAccount } = require('./Account');


const doria = new Clients("Dória", 42354, "dooh@gmail.com", 119876564, 10000);
const phy = new Clients("Aileen", 647563, "aileen.com", 119567384, 12000);


const doriaAccount = new BankAccount(doria, '12345', '6789');
const phyAccount = new BankAccount(phy, '23455', '7685');

doriaAccount.createdPix('cpf');
doriaAccount.createdPix('telefone');
doriaAccount.createdPix('e-mail');
doriaAccount.createdPix('chave aleatória');

doriaAccount.creditAmount(1000);

phyAccount.createdPix('cpf');
phyAccount.createdPix('telefone');
phyAccount.createdPix('chave aleatória');

console.log(doriaAccount);
console.log(phyAccount);

doriaAccount.transferPix(500, 647563);

console.log(doriaAccount.balance);
console.log(phyAccount.balance);

