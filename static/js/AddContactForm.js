class AddContactForm {
  constructor() {

    let formDiv = document.getElementById('addContactFormPlace');

    let form = document.createElement('form');
    form.action = '/contact_list/new';
    form.name = 'formName'
    form.method ='post';
    form.className = 'form-inline';
    form.role = 'form';

    formDiv.appendChild(form);



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


    let submitBtnDiv = document.createElement('div');
    submitBtnDiv.className = 'form-group';

    let submitBtnInput = document.createElement('input');
    submitBtnInput.className = 'btn btn-info';
    submitBtnInput.type = 'submit';
    submitBtnInput.value = 'Send';
    submitBtnDiv.appendChild(submitBtnInput);

    form.appendChild(firstNameDiv);
    form.appendChild(secondNameDiv);
    form.appendChild(phoneNumberDiv);
    form.appendChild(submitBtnDiv);




    //
    // <<form role="form" class="form-inline">
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
