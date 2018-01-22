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

<<<<<<< HEAD:templates/js/PhoneBook.js
  loadBookFromServer(){
=======
  loadBookFromServer(book) {
>>>>>>> 0a529ee3ace1105e632b985d683b76328fc6ce18:js/PhoneBook.js
    let danila = new Person('Danila', 'Kharchilin', 'frost');
    let artem = new Person('Artem', 'Malyutin', 'mayartmal');
    let vladimir = new Person('Vladimir', 'Lavrischev', 'lavr');
    let alexander = new Person('Alexander', 'Vlasov', 'sosna');
    let nastya = new Person('Nastya', 'Grishunina', 'nastya');
    let sergey = new Person('Sergey', 'Tyulenev', 'marleeeeeey');
    let qwe = new Person('qqqq', 'Tyulenev', 'qwe');
    this.appendPerson(artem, '+7 (916) 647-9823');
    this.appendPerson(danila, '+7 (455) 647-9823');
    this.appendPerson(vladimir, '+7 (999) 234-5456');
    this.appendPerson(alexander, '+7 (333) 777-5677');
    this.appendPerson(nastya, '+345678');
    this.appendPerson(sergey, '+72345678');
    this.appendPerson(qwe, '+72345678');
  }

}
