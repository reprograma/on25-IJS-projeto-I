class Account{
    #accountNumber;
    #agency;
    #balance = 0;
    pixKey

    constructor(accountNumber, agency, balance) {
        this.#accountNumber = accountNumber;
        this.#agency = agency;
        this.#balance = balance;
        this.pixKeys = {
          cpf: undefined,
          email: undefined,
          telefone: undefined,
        };
    }
    
    getBalance() {
        return this.#balance;
    }
    
    getAgency() {
        return this.#agency;
    }
    
    getAccountNumber() {
        return this.#accountNumber;
    }
    
    createAccount(accountNumber, agency, balance) {
        if (accountNumber.length === 5 && agency.length === 4 && balance > 0) {
            this.#accountNumber = accountNumber;
            this.#agency = agency;
            this.#balance = balance;
            return 'Sua conta foi criada com sucesso!';
        } else {
            throw new Error('Sua conta não pôde ser criada');
        }
    }

    deposit(value) {
        if (value > 0) {
            this.#balance += value;
        } else {
            throw new Error('Não é um valor válido');
        }
    }

    createPixKey(keyValue, keyType) {
        const frase = 'Chave pix criada com sucesso';
        switch (keyType.toUpperCase()) {
            case 'CPF':
                if (keyValue.length == 11) {
                    this.pixKeys.cpf = keyValue;
                    return frase;
                } else {
                    throw new Error('CPF inválido');
                }
            case 'EMAIL':
                if ((typeof keyValue  === 'string') && keyValue.includes('@')) {
                    this.pixKeys.email = keyValue;
                    return frase;
                }
            case 'TELEFONE':
                if (keyValue.length == 9 ) {
                    this.pixKeys.telefone = keyValue;
                    return frase;
                }
            default:
                return 'Chave inválida';
        }
    }
    
    pixTransfer(keyType, keyValue, transferValue) {
        if (this.#balance >= transferValue) {
            this.#balance -= transferValue;
            return 'Pix realizado com sucesso';
        } else {
            throw new Error(`Saldo insuficiente R$ ${this.#balance} para esta operação. Pix não foi realizado.`);
        }
    }
    
    withDraw(withDrawValue) {
        if (this.#balance >= withDrawValue) {
            this.#balance -= withDrawValue;
            return `Saque realizado com sucesso. Seu saldo atual é de R$ ${this.#balance}`;
        } else {
            throw new Error(`Não foi possível realizar saque. Saldo insuficiente R$ ${this.#balance}`);
        }
    }
}

module.exports = { Account };