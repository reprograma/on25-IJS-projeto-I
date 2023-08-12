const {Account} = require("../Account/Account")
const {Client} = require("../Client/Client")



test("Cadastrar clientes com dados válidos", ()=>{
    const client = new Client();
    const account = new Account();
    expect(client.cadastrarCliente('Elvira', '20335370802', account, 5000).toEqual('Cliente Cadastrado'))
})

