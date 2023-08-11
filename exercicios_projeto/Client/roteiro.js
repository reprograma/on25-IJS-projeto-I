// Importações
const { Client } = require("../Client/Client")
const { Account } = require("../Account/Account")

// Cliente
const barbara = new Client("Bárbara", 550052252, 61999999999, "barbara@reprograma.com.br", 332655, 10000)
const barbaraAccount = new Account("Bárbara", 332655)
const yan = new Client("Yan", 32305502159, 11966933987, "yan@reprograma.com.br", 1234, 40000)
const yanAccount = new Account("Yan", 1234)
//console.log(barbara)

//Cadastrando o Cliente no Banco
//barbara.registerClient("Bárbara", 550052252, barbaraAccount, 10000)
yan.registerClient("Yan", 32305502159, yanAccount, 40000)


// Cadastrando a Chave PIX
//barbara.registerPixKey("barbara@reprograma.com.br") // Chave cadastrada
//barbara.registerPixKey("Bárbara") // Chave não cadastrada
yan.registerPixKey("yan@reprograma.com.br")

// Transferência por PIX
barbara.pixTransfer("yan@reprograma.com.br", 25) // - TÁ DANDO ERRO - CHAVE PIX INVÁLIDA

