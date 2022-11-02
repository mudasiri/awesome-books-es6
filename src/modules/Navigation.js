// select the nav items areas
const addbook = document.querySelector('.area');
const showbook = document.querySelector('.show-book-list');
const contactme = document.querySelector('.contact-me');

// show list
const showList = () => {
  showbook.style.display = 'flex';
  addbook.style.display = 'none';
  contactme.style.display = 'none';
};
// add new Book

const addNewBook = () => {
  addbook.style.display = 'flex';
  showbook.style.display = 'none';
  contactme.style.display = 'none';
};

// show contact Page
const showContact = () => {
  addbook.style.display = 'none';
  showbook.style.display = 'none';
  contactme.style.display = 'flex';
};

export { showList, addNewBook, showContact };