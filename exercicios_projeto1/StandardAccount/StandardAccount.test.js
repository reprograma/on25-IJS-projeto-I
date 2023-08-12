  //verificar se o cliente GoldAccount é criado corretamente

  const {Account} = require("../Account/Account");
  //const Client = require("../Client/Client");
  const {StandardAccount} = require("../StandardAccount/StandardAccount")
  
  describe('StandartAccount class', () => {
    it('StandartAccount com as propriedades corretas', () => {
      const clienteRita = new StandardAccount('Cliente Standard', '003', '67892', 1000);
  
      expect(clienteRita.client).toEqual('Cliente Standard');
      expect(clienteRita.agency).toEqual('003');
      expect(clienteRita.accountNumber).toEqual('67892');
      //expect(clienteRita.balance).toEqual(5000);
      expect(clienteRita.income).toEqual(4999.99);
      expect(clienteRita.dailyTransactionLimit).toEqual(1000);
    });
  
  });

  