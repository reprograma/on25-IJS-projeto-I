
class Client {
    name;
    cpf;
    salary;
    email;
    phone;
    pix;
    
    constructor(name, cpf, salary, email, phone) {
        this.name = name;
        this.cpf = cpf;
        this.salary = salary;
        this.email = email;
        this.phone = phone;
        this.pix = '';
        
    }

    createKeyPix() {
        this.pix = this.cpf;
    }
}

module.exports = { Client }

/*
const client1 = new Client('Maria', 12456789, 5500, 'maria@gmail.com', 98765432);

client1.createKeyPix();

console.log(client1);
*/
