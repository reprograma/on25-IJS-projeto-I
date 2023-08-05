const { Clients, Gold, Premium, Standard } = require('./Client');
const { BankAccount } = require('./Account');


const doria = new Clients("Dória", 42354, "dooh@gmail.com", 119876564, 10000);
console.log(doria);

const doriaAccount = new BankAccount(doria, '12345', '6789');

doriaAccount.createdPix('cpf');
doriaAccount.createdPix('telefone');
doriaAccount.createdPix('e-mail');
doriaAccount.createdPix('chave aleatória');

console.log(doriaAccount.pixKeys);