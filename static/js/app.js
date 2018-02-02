function loadContactsFromServer() {
  let book = new PhoneBook();
  book.loadBookFromServer(book);
  let view = new PhoneBookView(book);
}

function createContact(){
  console.log('ready');
  let addContactForm = new AddContactForm();
  console.log('ok');

}


function onload() {




  // 1) let view = new PhoneBookView(book);
  // 2) view.loadBookFromServer();
}
