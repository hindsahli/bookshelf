export let books;

export function loadBooks() {
  if (localStorage.product != null) {
    books = JSON.parse(localStorage.product);
  } else {
    books = [];
  }
}

export function saveBooks(newBook) {
  if (newBook) {
    books.push(newBook);
  }
  localStorage.setItem("product", JSON.stringify(books));
}
