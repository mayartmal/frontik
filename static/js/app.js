function loadContactsFromServer() {
    //alert('wertyuio');
    let xhr = new XMLHttpRequest();
    xhr.open('GET', '/contacts/', false);
    xhr.send();

    if (xhr.status != 200) {
      console.log(xhr.status + ':' + xhq.statusText);

    } else {
      console.log(xhr.responseText);
      let contacts = JSON.parse(xhr.responseText);
      console.log(contacts);
      console.log(contacts.contacts);
    }
}

function onload() {

  let book = new PhoneBook();
  book.loadBookFromServer(book);

  1) let view = new PhoneBookView(book);
  2) view.loadBookFromServer();
}
