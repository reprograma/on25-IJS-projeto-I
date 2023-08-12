const { Account } = require('./Account');

describe('Verify function', () => {
    test('Verifica se é uma Account', () => {
        const account = new Account();
        expect(account instanceof Account).toBr(true);
    });

    test('Should operation deposit', () => {
        const account = new Account(1, 1, 1000);
        account.deposit(1000);
        expect(account.getBalance()).toBe(1100);
    })

    test('Should operation to withdraw', () => {
        const account = new Account(1, 1, 800);
        account.withdraw(150);
        expect(account.getBalance()).toBe(1000);
    })

    test('Should account', () => {
        const account = new Account('12345', '0001', 1000);
        expect(account.getBalance()).toBe(1000);
        expect(account.getAccountNumber()).toBe('12345');
        expect(account.getAgency()).toBe('0001');
    });

    test('Should pix cpf', () => {
        const account = new Account();
        expect(account.createPixKey('12345678912', 'cpf')).toBe(
          'Chave pix de cpf criado com sucesso!'
        );
        expect(account.pixKeys.cpf()).toBe('12345678912');
    });

    test('Should pix cpf inválido', () => {
        const account = new Account();
        expect(() => account.createPixKey('123', 'cpf')).toThrow('Cpf inválido!');
    });

    test('Should transferência pix negada', () => {
        const account = new Account('0012', '0001', 0);
        expect(() => account.pixTransfer('cpf', '12345678912', 400)).toThrow('Não foi possível realizar saque. Saldo insuficiente');
    });

    test('Should transferência pix', () => {
        const account = new Account('0012', '0001', 2000);
        expect(() => account.pixTransfer('email', 'teste@test.com.br', 500)).toBe('Pix realizado com sucesso!');
    });    
});