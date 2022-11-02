import Book from './src/modules/Book.js';
import { showList, addNewBook, showContact } from './src/modules/Navigation.js';
import { DateTime } from './src/modules/luxon.js';

const ondate = () => {
  const now = DateTime.now().toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
  document.querySelector('.date').innerHTML = now;
};

setInterval(() => {
  ondate();// refreshes the function so the date is updated in every seconde
}, 1000);
// get books data from localStorage if it is null then we give it empty array
const books = new Book((JSON.parse(localStorage.getItem('books')) === null) ? [] : JSON.parse(localStorage.getItem('books')));
// books.set();
// get list of books and append to dom
books.createBookFromLocal();

// select the nav items and listen for clicks
document.getElementById('addnew').addEventListener('click', () => {
  addNewBook();
});

document.getElementById('list').addEventListener('click', () => {
  showList();
});

document.getElementById('contact').addEventListener('click', () => {
  showContact();
});

// when click add btn, data to local and reload the page
document.getElementById('add').addEventListener('click', (e) => {
  books.addBook(e);
});