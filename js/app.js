
class Person {
  constructor(firstName, secondName, login) {
    this.firstName = firstName;
    this.secondName = secondName;
    this.login = login;
  }
  getFirstName(){
    return this.firstName;
  }
  getSecondName(){
    return  this.secondName
  }
  getLogin(){
    return this.login
  }
}

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
  getPhoneNumber(firstName){
    let person = this.persons[firstName];
    let phone = person.phone;
    return phone;
  }
}

class PhoneBookView {
  constructor(book) {
  let personsRow = document.getElementById('personsRow');
    for (var key in book.persons) {
      // getting sets
      let person = book.persons[key];
      let personObject = person['personObject'];
      // getting user info
      let personPhone = person['phone'];
      let personLogin = personObject.getLogin();
      let personFirstName = personObject.getFirstName();
      let personSecondName = personObject.getSecondName();
      // tags prepearing
      let colDiv = document.createElement('div');
      colDiv.className = 'col-md-4';
      let thumbnailDiv = document.createElement('div');
      thumbnailDiv.className = 'thumbnail';
      let imgPlace = document.createElement('img');
      imgPlace.src = 'http://via.placeholder.com/350x150';
      let captionDiv = document.createElement('div');
      captionDiv.className = 'caption';
      let thumbnailLabel = document.createElement('h3');
      thumbnailLabel.innerHTML = personFirstName + ' ' + personSecondName;
      let loginField = document.createElement('span');
      loginField.innerHTML = 'User login: ' + personLogin + ' ';
      let phoneField = document.createElement('span');
      phoneField.innerHTML = 'User psone: ' + personPhone;
      personsRow.appendChild(colDiv);
      colDiv.appendChild(thumbnailDiv);
      thumbnailDiv.appendChild(imgPlace);
      thumbnailDiv.appendChild(captionDiv);
      thumbnailDiv.appendChild(thumbnailLabel);
      thumbnailDiv.appendChild(loginField);
      thumbnailDiv.appendChild(phoneField);
    }
  }
}

let book = new PhoneBook();

let danila = new Person('Danila', 'Kharchilin', 'frost');
let artem = new Person('Artem', 'Malyutin', 'mayartmal');
let vladimir = new Person('Vladimir', 'Lavrischev', 'lavr');

book.appendPerson(artem, '+7 (916) 647-9823');
book.appendPerson(danila, '+7 (455) 647-9823');
book.appendPerson(vladimir, '+7 (999) 234-5456');

//---------------------------------------------------------------

function onload() {

  let view = new PhoneBookView(book);

}
