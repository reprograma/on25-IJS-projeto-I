const { Client } =  require('../Client/Client');

class Account {
  cliente;
	agencyNumber;
	accountNumber;
  #saldo

  constructor(cliente, agencyNumber, accountNumber) {
    this.cliente = cliente;
    this.agencyNumber = agencyNumber;
    this.accountNumber = accountNumber;
    this.#saldo = 0
  }

  get saldo(){
    return this.#saldo
  }

  deposito(valor) {
    this.#saldo += valor;
    console.log(`Depósito de ${valor} realizado na conta de ${this.cliente.nome}. Saldo atual: ${this.#saldo}`);
    return true
  }

  transferencia(contaDestino, valor) {

    if(this.cliente.tipoConta === 'Standard'){
      if (valor > 1000){ 
        return 'Valor maior que o seu limite diário.'
      }else if(this.#saldo >= valor ) {
        this.#saldo -= valor;
        contaDestino.deposito(valor);
        console.log(`O saldo atual da conta de origem é de R$ ${this.saldo}`);
        return true

      } else{
        return 'Saldo insuficiente.' 
      }
    }

    if(this.cliente.tipoConta === 'Gold'){
      if (valor > 5000){ 
        return 'Valor maior que o seu limite diário.'
      }else if(this.#saldo >= valor ) {
        this.#saldo -= valor;
        contaDestino.deposito(valor)
        console.log(`O saldo atual da conta de origem é de R$ ${this.saldo}`);
        return true  
      }else{
        return 'Saldo insuficiente.' 
      }
    }

    if(this.cliente.tipoConta === 'Premium'){
       if(this.#saldo >= valor ) {
        this.#saldo -= valor;
        contaDestino.deposito(valor)
        console.log(`O saldo atual da conta de origem é de R$ ${this.saldo}`);
        return true

      } else{
        return 'Saldo insuficiente.' 
      }
    }
  }

  saque(valor){
    if(this.cliente.tipoConta === 'Standard'){
      if (valor > 1000){ 
        return 'Valor maior que o seu limite diário.'
      }else if(this.#saldo >= valor ) {
        this.#saldo -= valor;
        console.log(`O saldo atual da conta é de R$ ${this.saldo}`);
        return true
      } else{
        return 'Saldo insuficiente.' 
      }
    }

    if(this.cliente.tipoConta === 'Gold'){
      if (valor > 5000){ 
        return 'Valor maior que o seu limite diário.'
      }else if(this.#saldo >= valor ) {
        this.#saldo -= valor;
        console.log(`O saldo atual da conta é de R$ ${this.saldo}`);  
        return true
      } else{
        return 'Saldo insuficiente.' 
      }
    }

    if(this.cliente.tipoConta === 'Premium'){
       if(this.#saldo >= valor ) {
        this.#saldo -= valor;
        console.log(`O saldo atual da conta é de R$ ${this.saldo}`);
        return true  
      } else{
        return 'Saldo insuficiente.' 
      }
    }

  }
}

module.exports = { Account };

const client1 = new Client( 'Dani', 12345689, 4999.99)
const client2 = new Client( 'Daniela', 987456122, 5000)
const conta1 = new Account(client1, 123,456)
const conta2 = new Account(client2, 123, 896)
conta2.deposito(1500)
conta2.transferencia(conta1, 1100)
conta2.saque(200)
console.log('deposito', conta2.deposito(1500))

console.log('conta', conta1)
console.log('conta2', conta2.saldo)