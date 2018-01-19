
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

set = book.persons;
// for p on set{
//   console.log(1);
// }
console.log(set['frost']);

  console.log(item);
;



//---------------------------------------------------------------

function onload() {


  //let artemPhone = book.getPhoneNumber('Artem');
  //let danilaPhone = book.getPhoneNumber('Danila');

  let personsRow = document.getElementById('personsRow');


  let thumbnailArtem = document.createElement('div');
  thumbnailArtem.className = 'thumbnail'
  let imgThm = document.createElement('img');
  imgThm.src = 'http://via.placeholder.com/350x150';
  let captionDiv = document.createElement('div');
  captionDiv.className = 'caption';
  var textDiv = document.createElement('div');
  textDiv.innerHTML = artem.getFirstName();

  let thumbnailsDiv = document.getElementById('thumbnailsPlace');
  thumbnailsDiv.appendChild(imgThm);
  thumbnailsDiv.appendChild(captionDiv);
  thumbnailsDiv.appendChild(textDiv);



  console.log(thumbnailArtem);
  console.log(imgThm);
  console.log(captionDiv);





}
