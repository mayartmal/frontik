sclass AddContactForm {
  constructor() {
    let formDiv = document.getElementById('addContactFormPlace');

    let form = document.createElement('form');
    form.className = 'form-inline';
    form.role = 'form';



    let firstNameDiv = document.createElement('div');
    firstNameDiv.className = 'form-group';
    let firstNameLabel = document.createElement('label');
    firstNameLabel.htmlFor = 'firstName'
    firstNameLabel.innerHTML = 'First Name';
    let firstNameInput = document.createElement('input');
    firstNameInput.className = 'form-control';
    firstNameInput.placeholder = 'First Name';
    firstNameInput.name = 'firstName';
    firstNameInput.type = 'text';
    firstNameDiv.appendChild(firstNameLabel);
    firstNameDiv.appendChild(firstNameInput);



    let secondNameDiv = document.createElement('div');
    secondNameDiv.className = 'form-group';
    let secondNameLabel = document.createElement('label');
    secondNameLabel.htmlFor = 'secondName'
    secondNameLabel.innerHTML = 'Second Name';
    let secondNameInput = document.createElement('input');
    secondNameInput.className = 'form-control';
    secondNameInput.placeholder = 'Second Name';
    secondNameInput.name = 'secondName';
    secondNameInput.type = 'text';
    secondNameDiv.appendChild(secondNameLabel);
    secondNameDiv.appendChild(secondNameInput);



    let phoneNumberDiv = document.createElement('div');
    phoneNumberDiv.className = 'form-group';
    let phoneNumberLabel = document.createElement('label');
    phoneNumberLabel.htmlFor = 'phoneNumber'
    phoneNumberLabel.innerHTML = 'Phone Number';
    let phoneNumberInput = document.createElement('input');
    phoneNumberInput.className = 'form-control';
    phoneNumberInput.placeholder = 'Phone Number';
    phoneNumberInput.name = 'phoneNumber';
    phoneNumberInput.type = 'text';
    phoneNumberDiv.appendChild(phoneNumberLabel);
    phoneNumberDiv.appendChild(phoneNumberInput);




    formDiv.appendChild(firstNameDiv);
    formDiv.appendChild(secondNameDiv);
    formDiv.appendChild(phoneNumberDiv);




    //
    // <!-- <form role="form" class="form-inline">
    //    <div class="form-group">
    //       <label for="firstName">Имя</label>
    //       <input name="name" type="text"  class="form-control" placeholder="Имя"/>
    //    </div>
    //    <div class="form-group">
    //       <label for="email">E-mail</label>
    //       <input name="email" type="email" class="form-control" placeholder="E-mail"/>
    //    </div>
    //    <div class="form-group">
    //       <input type="submit" class="btn btn-info" value="Отправить" />
    //    </div>
    // </form> -->
  }


}
