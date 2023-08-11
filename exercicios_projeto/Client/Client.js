class Client {
  nome;
  #cpf;
  #rendaMensal;
  tipoConta;

  constructor(nome, cpf, rendaMensal) {
    this.nome = nome;
    this.#cpf = cpf;
    this.#rendaMensal = rendaMensal;
    this.tipoConta = this.definirTipoConta(rendaMensal);
  }

  get cpf(){
    return this.#cpf
  }

  get rendaMensal(){
    return this.#rendaMensal
  }

  definirTipoConta(rendaMensal) {
    if (rendaMensal < 5000) {
      return 'Standard';
    } else if (rendaMensal < 18000) {
      return 'Gold';
    } else {
      return 'Premium';
    }
  }
}

module.exports = { Client };

const client1 = new Client( 'dani', 12345689, 4999.99)
console.log('client1', client1)