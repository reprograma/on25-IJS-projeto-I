  //verificar se o cliente GoldAccount é criado corretamente

  const {Account} = require("../Account/Account");
  //const Client = require("../Client/Client");
  const {PremiumAccount} = require("../PremiumAccount/PremiunAccount")
  
  describe('GoldAccount class', () => {
    it('PremiumAccount com as propriedades corretas', () => {
      const clienteRita = new PremiumAccount('Cliente Premium', '002', '67891', Infinity);
  
      expect(clienteRita.client).toEqual('Cliente Premium');
      expect(clienteRita.agency).toEqual('002');
      expect(clienteRita.accountNumber).toEqual('67891');
      //expect(clienteRita.balance).toEqual(5000);
      expect(clienteRita.income).toEqual(18001);
      expect(clienteRita.dailyTransactionLimit).toEqual(Infinity);
    });
  
  });

module.exports = {PremiumAccount};
  