const { Account } = require("./Account");

// Criando a Conta
const barbaraAccount = new Account("Bárbara", 332655)
const yanAccount = new Account("Yan", 1234)

console.log(barbaraAccount)
console.log(yanAccount)


// Depósito
barbaraAccount.deposit(10000)
console.log(barbaraAccount)
yanAccount.deposit(40000)
console.log(yanAccount)


// Saque
barbaraAccount.cashWithdrawal(10)
barbaraAccount.cashWithdrawal(15000)
yanAccount.cashWithdrawal(2500)
yanAccount.cashWithdrawal(50000)


// Transferência para outra conta
barbaraAccount.transferTo(yanAccount, 650)


// Categoria da conta do cliente