const { Account } = require("../Account/Account.js");

class Client {
    name;
    #cpf;
    email;
    mobile;
    income;

    constructor(name, cpf, email, mobile, income){
        this.name = name;
        this.#cpf = cpf;
        this.email = email;
        this.mobile = mobile;
        this.income = income;
    }

    get cpf(){
        return this.#cpf;
    }

    registerClient(name, cpf, email, mobile, income) {
            if(account instanceof Account) {
                this.name =  name;
                this.#cpf = cpf;
                this.email = email;
                this.mobile = mobile;
                this.income = income;
    
                return "Cliente cadastrado com sucesso";
            }else {
                throw new Error("Erro no cadastro, dados inválidos")
            }
        }
   
}


const client1 = new Client("Lélia Gonzalez", "12457896314", "lelia@gonzalez.com", "11995431221", 15000);
const client2 = new Client("Carolina Maria de Jesus", "23456112178", "carolina@mariajesus.com", "11995513221", 4500);
const client3 = new Client("Maya Angelou", "35412354511", "maya@angelou.com", "11996513244", 22000);

console.log(client1);
console.log(client2);
console.log(client3);





module.exports = { Client, client1, client2, client3 };


