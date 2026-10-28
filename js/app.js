// import { books, addBook } from "./state.js";

const bookTitle = document.getElementById("book-title");
const bookAuthor = document.getElementById("book-author");
const bookYear = document.getElementById("book-year");
const bookGenre = document.getElementById("book-genre");
const bookDescription = document.getElementById("book-description");
const bookStatus = document.getElementById("book-status");
const addBookForm = document.getElementById("add-book-form");
const booksList = document.getElementById("books-list");

let books;
let newBook;
function loadBooks() {
  if (localStorage.product != null) {
    books = JSON.parse(localStorage.product);
  } else {
    books = [];
  }
}

function saveBooks() {
  books.push(newBook);
  localStorage.setItem("product", JSON.stringify(books));
}

function displayBooks() {
  booksList.innerHTML = "";
  books.forEach((newBook) => {
    const card = document.createElement("div");
    card.classList.add("span-col-1", "bg-white", "rounded-lg", "border", "p-4");

    const title = document.createElement("h3");
    title.classList.add("text-dark-bleu", "font-bold");
    title.textContent = newBook.title;

    const author = document.createElement("p");
    author.classList.add("text-dark-bleu", "font-medium");
    author.textContent = newBook.author;

    const yearGenre = document.createElement("p");
    yearGenre.classList.add("text-dark-bleu");
    yearGenre.textContent = `${newBook.year} .${newBook.genre} `;

    const description = document.createElement("p");
    description.classList.add("text-dark-bleu", "font-s");
    description.textContent = newBook.description;

    const status = document.createElement("p");
    status.textContent = `Status : ${newBook.status}`;

    card.append(title, author, yearGenre, description, status);
    booksList.appendChild(card);
  });
}

addBookForm.addEventListener("submit", (e) => {
  e.preventDefault();
  newBook = {
    title: bookTitle.value,
    author: bookAuthor.value,
    year: bookYear.value,
    genre: bookGenre.value,
    description: bookDescription.value,
    status: bookStatus.value,
  };
  loadBooks();
  saveBooks();
  displayBooks();
});
loadBooks();
displayBooks();
