
function onload() {

  let book = new PhoneBook();
  book.loadBookFromServer(book);
  let view = new PhoneBookView(book);

}
