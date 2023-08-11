const { Account } = require("./Account");

class GoldAccount extends Account{
    client
    numberAccount
    salary

    constructor(client, numberAccount, salary) {
        super(client, numberAccount)
        this.salary = (salary >= 18000)
    }


}