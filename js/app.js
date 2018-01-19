
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

let book = new PhoneBook();

let danila = new Person('Danila', 'Kharchilin', 'frost');
let artem = new Person('Artem', 'Malyutin', 'mayartmal');
let vladimir = new Person('Vladimir', 'Lavrischev', 'lavr');

book.appendPerson(artem, '+7 (916) 647-9823');
book.appendPerson(danila, '+7 (455) 647-9823');
book.appendPerson(vladimir, '+7 (999) 234-5456');

for (var key in book.persons) {
  console.log(key);
}




//---------------------------------------------------------------

function onload() {

  let personsRow = document.getElementById('personsRow');

  for (var key in book.persons) {
    let colDiv = document.createElement('div');
    colDiv.className = 'col-md-4';
    console.log(colDiv);

    let thumbnailDiv = document.createElement('div');
    thumbnailDiv.className = 'thumbnail';
    console.log(thumbnailDiv);

    let imgPlace = document.createElement('img');
    imgPlace.src = 'http://via.placeholder.com/350x150';
    console.log(imgPlace);

    let captionDiv = document.createElement('div');
    captionDiv.className = 'caption';
    console.log(captionDiv);

    let textDiv = document.createElement('div');
    textDiv.innerHTML = key;
    console.log(textDiv);

    personsRow.appendChild(colDiv);
    colDiv.appendChild(thumbnailDiv);
    thumbnailDiv.appendChild(imgPlace);
    thumbnailDiv.appendChild(captionDiv);
    thumbnailDiv.appendChild(textDiv);
  }
}
