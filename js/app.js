
class Person {
  constructor(firstName) {
    this.firstName = firstName;
  }
  greet(){
    console.log('Hello! My name is ' + this.firstName);
  }
}

class PhoneBook {
  constructor() {
    this.persons = {};
  }
  appendPerson(person, phone) {
    let pmap = {
      person: person,
      phone: phone,
    };

    let key = person.firstName;
    this.persons[key] = pmap;
  }
  getPhoneNumber(firstName){
    let person = this.persons[firstName];
    let phone = person.phone;
    return phone;
  }

}

let book = new PhoneBook();
let danila = new Person('Danila');
let artem = new Person('Artem');

book.appendPerson(artem, '+7 (916) 647-9823')
book.appendPerson(danila, '+7 (455) 647-9823')

//---------------------------------------------------------------

function onload() {
  let aphone = book.getPhoneNumber('Artem');
  let div = document.getElementById('person');
  let
  div.innerHTML = aphone;
}
