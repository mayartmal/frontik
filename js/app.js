
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
  loadBookFromServer(){
    let danila = new Person('Danila', 'Kharchilin', 'frost');
    let artem = new Person('Artem', 'Malyutin', 'mayartmal');
    let vladimir = new Person('Vladimir', 'Lavrischev', 'lavr');
    let alexander = new Person('Alexander', 'Vlasov', 'sosna');
    let nastya = new Person('Nastya', 'Grishunina', 'nastya')
    book.appendPerson(artem, '+7 (916) 647-9823');
    book.appendPerson(danila, '+7 (455) 647-9823');
    book.appendPerson(vladimir, '+7 (999) 234-5456');
    book.appendPerson(alexander, '+7 (333) 777-5677');
    book.appendPerson(nastya, '+345678');
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
        //создаем массив для хранения содержимого thumbnailDiv'а

        let thumbnailChailds = [];

        let imgPlace = document.createElement('img');
        imgPlace.src = 'http://via.placeholder.com/350x150';
        thumbnailChailds.push(imgPlace);

        let captionDiv = document.createElement('div');
        captionDiv.className = 'caption';
        thumbnailChailds.push(captionDiv);

        let thumbnailLabel = document.createElement('h3');
        thumbnailLabel.innerHTML = personFirstName + ' ' + personSecondName;
        thumbnailChailds.push(thumbnailLabel);

        let loginField = document.createElement('span');
        loginField.innerHTML = 'User login: ' + personLogin + ' ';
        thumbnailChailds.push(loginField);

        let phoneField = document.createElement('span');
        phoneField.innerHTML = 'User phone: ' + personPhone;
        thumbnailChailds.push(phoneField);

        personsRow.appendChild(colDiv);
        colDiv.appendChild(thumbnailDiv);

        for (let i = 0; i < thumbnailChailds.length; i++) {
          thumbnailDiv.appendChild(thumbnailChailds[i]);
        }

      }
  }
}

let book = new PhoneBook();
book.loadBookFromServer();



//---------------------------------------------------------------

function onload() {

  let view = new PhoneBookView(book);

}
