// ******* PROJETO NÃO FINALIZADO ********

class Account {
    client;
    accountNumber;
    agencyNumber;
    #balance;
    #income;

    static all = [] 

    constructor(client, accountNumber, agencyNumber, balance, income) {
        if(!(client instanceof Client))
        this.client = client;
        this.accountNumber = accountNumber;
        this.agencyNumber = agencyNumber;
        this.#balance = balance;
        this.#income = income;
        this.constructor.all.push(this);
    }

    get balance() {
        return this.#balance
    }

    set balance(newBalance) {
        this.#balance = newBalance;
    }

    get income() {
        this.#income = income;
    }

    createPix(pixKey, typeKey) {
        this.pixKeys[typeKey] = pixKey;
    }

    deposit(amount) {
        if(amount > this.balance) {
            console.log(`Você não tem saldo suficiente para esta operação. Seu saldo é R$${this.balance}`);
            return;
        } else {
            this.balance += amount;
		    console.log(`O novo saldo da conta é: R$ ${this.balance}`);
        }
    }

    withdraw(amount) {
        if(amount > this.balance) {
            console.log(`Você não tem saldo suficiente para esta operação. Seu saldo é R$${this.balance}`);
            return;
        } else {
            this.#balance -= amount;
		    console.log(`O novo saldo da conta é: R$ ${this.balance}`);
        }
    }

    transferTo(anotherAccount, amount) {
        if(!(anotherAccount instanceof Account)) {
            console.log('Informe uma conta válida!')
            return;
        }

        if(this.balance >= amount) {
            this.balance -= amount;
            anotherAccount.balance += amount;

            console.log(`Transação realizada com sucesso. Seu saldo agora é R$${this.balance}`);
            console.log(`Saldo atual da conta de destino é R$${anotherAccount.balance}`)
        } else {
            console.log(`Saldo insuficiente para realizar esta operação. Seu saldo é R$${this.balance}`);
        }
    }

    transferPix(pixKey, amount) {
        
    }
}

class Client extends Account {
    name;
    #cpf;
    #income;
    #pixKeys;

    constructor(name, cpf, income, accountNumber, agencyNumber, balance) {
        super(accountNumber, agencyNumber, balance)
        this.name = name;
        this.#cpf = cpf;
        this.#income = income;
        this.#pixKeys = {
            cpf: undefined,
            email: undefined,
            telefone: undefined,
        };
    }
     
    get cpf() {
        return this.#cpf
    }

    get income() {
      return this.#income
    }

    get pixKeys() {
        return this.#pixKeys
    }

}

const cliente1 = new Client('Ale', '987.654.321.00', 10000, '4321', '002', '111');
console.log(cliente1)
console.log(cliente1.client)
console.log(cliente1.name)
console.log(cliente1.cpf)
console.log(cliente1.accountNumber);
console.log(cliente1.agencyNumber);
console.log(cliente1.income);

const cliente2 = new Client('João', '123.456.789-10', 5000, '1234', '001', '000')
console.log("Saldo: " + cliente2.balance)
console.log(cliente2.client)
console.log("Nome: " + cliente2.name)
console.log("CPF: " + cliente2.cpf)
console.log("Nº da conta: " + cliente2.accountNumber);
console.log("Agencia bancária: " + cliente2.agencyNumber);
console.log("Renda: " + cliente2.income);

cliente1.createPix('(51)999999999', 'telefone')
console.log("Chave pix: " + cliente1.pixKeys.telefone)

cliente2.createPix('joao@gmail.com', 'email')
console.log("Chave pix: " + cliente2.pixKeys.email)

const account1 = new Account(cliente1, '1234', '5678', 1000);
const account2 = new Account(cliente2, '4321', '8765', 100);

cliente1.deposit(500);

class StandardAccount extends Account {
    transictionLimit = 1000;
}

class GoldAccount extends Account {
    transictionLimit = 5000;
}

class PremiumAccount extends Account {

}