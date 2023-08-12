const { BankAccount } = require("./Account/Account");
const { Standard } = require("./StandardAccount/StandardAccount");
const { Gold } = require("./GoldAccount/GoldAccount");
const { Premium } = require("./PremiumAccount/PremiunAccount");
const { Bank } = require("./Bank/Bank"); 
const { PixKey } = require("./PixKey/PixKey");


//Clientes com tipo de conta
let client1 = new Standard("João", "123456789781", "joao@email.com", "81999999999", 4000); 
let client = new Standard("Maria", "987654321", "maria@email.com", "81888888888", 8000); // Renda mensal inválida para tipo de conta
let client2 = new Gold("Maria","22345685917", "maria@email.com", 81999999999,10000);
let client3 = new Premium("José","78945612378", "jose@email.com", 81999999999,20000);

 //Bancos
let bank1 = new Bank("Banco do Brasil", 100);
let bank2 = new Bank("Banco Inter", 200);
 
 //Adicionando bancos aos clientes 

client1.addBank(bank1); 
client1.addBank(bank2); //Não deve ser adicionado pois o cliente já tem esse banco
client1.addBank(bank2);
client2.addBank(bank1);
client3.addBank(bank1); 

//Adicionando clientes aos bancos
let account1 = new BankAccount(client1,bank1, 5000);
let account2 = new BankAccount(client2,bank1, 2000);
let account3 = new BankAccount(client3,bank2, 1500);  


   
//Criando chaves pix associando clientes e bancos
let pix1 = new PixKey("joao123", client1, bank1);
let pix2 = new PixKey("maria123", client2, bank1);
let pix3 = new PixKey("maria123", client2, bank1); 
let pix4 = new PixKey("jose123", client2, bank2); 
let pix5 = new PixKey("jose@123", client3, bank2); 
let pix6 = new PixKey("asjdoiajdioasd", client1, bank1); //Mais uma chave para o mesmo cliente e banco


//Adicionando chaves pix às contas
account1.addPixKey(pix1);
account2.addPixKey(pix2); 
account2.addPixKey(pix3); //Não deve ser adicionado pois a chave já está associada ao cliente
account2.addPixKey(pix4); //Não deve ser adicionado pois o banco não está associado ao cliente
account3.addPixKey(pix5);  
account3.addPixKey(pix6); 

// Verificando contas criadas
console.log(account1)
console.log(account2)
console.log(account3)

//Transferencia por chave pix
account1.transferPix(-100,account2,"maria123") //Operação não deve ser realizada pois o valor é negativo
account1.transferPix(100,account2,"chavenaoexiste") //Não deve ser transferido pois a chave não está associada ao cliente
account1.transferPix(1100,account3,"jose@123") //Não deve ser transferido pois atingiu o limite de transferencia diária
account1.transferPix(900,account2,"maria123") 
account2.transferPix(300,account3,"jose@123")
account3.transferPix(250,account1,"joao123")

console.log(account1.balance) //Deve ser 4350
console.log(account2.balance) //Deve ser 2600
console.log(account3.balance) //Deve ser 1550

//Transferencia por conta
account1.transfer(300,account3) 
console.log(account1.balance) //Deve ser 4050
console.log(account3.balance) //Deve ser 1850

//Saques
account1.withdraw(100)
console.log(account1.balance) //Deve ser 3950

//Depósitos
account1.deposit(100)
console.log(account1.balance) //Deve ser 4050
