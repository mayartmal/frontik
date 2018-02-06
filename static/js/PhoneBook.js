class PhoneBook {

  constructor() {
    this.contactList = {};
  }

  loadBookFromServer(){

    let xhr = new XMLHttpRequest();
    xhr.open('GET', '/contact_list/', false);
    xhr.send();

    if (xhr.status != 200) {
      console.log(xhr.status + ':' + xhq.statusText);

    } else {
      //console.log(xhr.responseText);
      let contactsDBFileData = JSON.parse(xhr.responseText);
      var contactList = contactsDBFileData.contacts;
      //console.log(contacts);
      //console.log(contacts.contacts);
    }

    for (let phone in contactList) {
      //console.log(phoneNumber);
      let contact = contactList[phone];
      let firstName = contact.first_name;
      let secondName = contact.second_name;
      this.appendContact(phone, firstName, secondName);

    }
  }
  

  appendContact(phone, firstName, secondName){
      this.contactList[phone] = {
        firstName: firstName,
        secondName: secondName,
      }
    }


}
