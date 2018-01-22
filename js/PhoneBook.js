class PhoneBook {

  constructor() {
    this.persons = {};
  }

  appendPerson(person, phone) {
    let pmap = {
      personObject: person,
      phone: phone,
    };
    let key = person.login;
    this.persons[key] = pmap;
  }

  getPhoneNumber(firstName) {
    let person = this.persons[firstName];
    let phone = person.phone;
    return phone;
  }

  loadBookFromServer(book) {
    let danila = new Person('Danila', 'Kharchilin', 'frost');
    let artem = new Person('Artem', 'Malyutin', 'mayartmal');
    let vladimir = new Person('Vladimir', 'Lavrischev', 'lavr');
    let alexander = new Person('Alexander', 'Vlasov', 'sosna');
    let nastya = new Person('Nastya', 'Grishunina', 'nastya');
    let sergey = new Person('Sergey', 'Tyulenev', 'marleeeeeey');
    book.appendPerson(artem, '+7 (916) 647-9823');
    book.appendPerson(danila, '+7 (455) 647-9823');
    book.appendPerson(vladimir, '+7 (999) 234-5456');
    book.appendPerson(alexander, '+7 (333) 777-5677');
    book.appendPerson(nastya, '+345678');
    book.appendPerson(sergey, '+72345678');
  }

}
