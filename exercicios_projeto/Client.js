class Client {
  name;
  email;
  phone;
  cpf;
  monthlyIncome;
  constructor(name, accEmail, phoneNumber, numberOfCPF, monthlyIncome) {
    this.name = name;
    this.email = accEmail;
    this.phone = phoneNumber;
    this.cpf = numberOfCPF;
    this.monthlyIncome = monthlyIncome;
  }
}

module.exports = Client;
