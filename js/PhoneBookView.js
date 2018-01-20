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
