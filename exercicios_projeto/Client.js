class Client {
  name;
  email;
  phone;
  cpf;
  monthlyIncome;
  constructor(name, email, phoneNumber, cpfNumber, monthlyIncome) {
    this.name = name;
    this.email = email;
    this.phone = phoneNumber;
    this.cpf = cpfNumber;
    this.monthlyIncome = monthlyIncome;
  }
}

module.exports = Client;
