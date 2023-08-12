  //verificar se o cliente GoldAccount é criado corretamente

  const {Account} = require("../Account/Account");
  //const Client = require("../Client/Client");
  const {GoldAccount} = require("../GoldAccount/GoldAccount")

describe('GoldAccount class', () => {
  it('GoldAccount com as propriedades corretas', () => {
    const clienteMirtes = new GoldAccount('Cliente Gold', '002', '67890', 5000);

    expect(clienteMirtes.client).toEqual('Cliente Gold');
    expect(clienteMirtes.agency).toEqual('002');
    expect(clienteMirtes.accountNumber).toEqual('67890');
    expect(clienteMirtes.balance).toEqual(5000);
    expect(clienteMirtes.income).toEqual(17999.99);
    expect(clienteMirtes.dailyTransactionLimit).toEqual(5000);
  });

});

module.exports = {GoldAccount};
