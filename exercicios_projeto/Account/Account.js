
class Account{
    #agencyNumber;
    #accountNumber;
    #balance = 0;
    keysPix;
    
    static all = []

    constructor(agencyNumber, accountNumber){
        this.#agencyNumber = agencyNumber;
        this.#accountNumber = accountNumber;
        this.keysPix = {
            cpf: undefined,
            email: undefined,
            telefone: undefined,
        }
        Account.all.push(this);
    }


    get agencyNumber(){
        return this.#agencyNumber
    }
    get accountNumber(){
        return this.#accountNumber
    }
    get balance() {
		return this.#balance;
	}
    
	set balance(newBalance) {
		this.#balance = newBalance;
	}

    registerKeysPix(keyPix, numberPix){
        switch(keyPix) {
            case 'cpf':
                this.keysPix.cpf = numberPix;
                break;
            case 'email':
                this.keysPix.email = numberPix;
                break;
            case 'telefone':
                this.keysPix.telefone = numberPix;
                break;
            default:
                return 'Chave PIX inválida!';
        }
    }
    
    deposit(amount) {
        if(typeof amount === 'string' || typeof amount === 'boolean'){
            return ('Insira um valor númerico')
        }
        if(amount > 0){
            this.#balance += amount;
            return `Depósito de: R$${amount}`;
        }else{
            return 'Não é possível depositar valores negativos';
        }
	};

    withdrawal(amount){
        if(typeof amount === 'string' || typeof amount === 'boolean'){
            return 'Insira um valor númerico';
        }
        if(amount > this.#balance){
			return `Você não possui saldo suficiente para retirar dinheiro. Seu saldo é de ${this.#balance}`
		}
		if(this.#balance >= amount){
            this.#balance -= amount;
            return `Saque de R$${amount}`
		}
    }
    transferTo(anotherAccount, amount) {
        if(typeof amount === 'string' || typeof amount === 'boolean'){
            return 'Insira um valor númerico';
        }
        if(!(anotherAccount instanceof Account)){
            return 'Conta inválida';
            
        }
		if (this.#balance >= amount) {
			this.#balance -= amount;
			anotherAccount.deposit(amount)
			return `O novo saldo da conta é de R$${this.#balance}`;
		} else {
			return `Saldo insuficiente para realizar a transferência. Seu saldo atual é de ${
					this.#balance}`;
		}
	}
   
    
    pix(keyPix, amount) {
        if (keyPix in this.keysPix) {
            if (this.#balance >= amount) {
                this.#balance -= amount;
                console.log(`Transferencia de ${amount} para ${keyPix} realizada com sucesso.`) 
            } else {
                console.log(`Não foi possível fazer a transferencia. Saldo insuficiente`);
            }
        } else {
            console.log('Chave PIX inválida');
        }
    }
}

    
module.exports = { Account }
