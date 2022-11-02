/* eslint-disable */

export default class Book {
  constructor(books) {
    this.books = books;
  }

  get() {
    return this.books;
  }

  update() {
    this.books = JSON.parse(localStorage.getItem('books'));
  }

  // method to add book by geting data from dom
  addBook(e) {
    const booksShow = document.querySelector('.books-show');
    booksShow.style.display = 'block';
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    this.books.push({ title, author });
    const book = this.bookToDom(title, author);
    booksShow.append(book);
    localStorage.setItem('books', JSON.stringify(this.books));
    const form = document.querySelector('form');
    form.reset();
    this.update();
    this.showList();
    e.preventDefault();
  }

  // show list after add book func
  // select the nav items
  showList() {
    const list = document.getElementById('list');
    const addnew = document.getElementById('addnew');
    const contact = document.getElementById('contact');
    const addbook = document.querySelector('.area');
    const showbook = document.querySelector('.show-book-list');
    const contactme = document.querySelector('.contact-me');
    showbook.style.display = 'flex';
    addbook.style.display = 'none';
    contactme.style.display = 'none';
  }
  // method to create books and append to dom

  createBookFromLocal() {
    for (let i = 0; i < this.books.length; i += 1) {
      const booksShow = document.querySelector('.books-show');
      booksShow.style.display = 'block';
      const book = this.bookToDom(this.books[i].title, this.books[i].author);
      booksShow.appendChild(book);
    }
  }

  bookToDom(title, author) {
    const book = document.createElement('li');
    book.setAttribute('title', title);
    const p = document.createElement('p');
    p.innerHTML = `${title} by ${author}`;
    book.append(p);
    const remove = document.createElement('button');
    remove.innerText = 'remove';
    remove.addEventListener('click', () => {
      this.remove(title);
    });
    book.append(remove);
    return book;
  }
  // method to remove li by getting title

  remove(title) {
    const removedBooks = this.books.filter((item) => item.title !== title);
    localStorage.setItem('books', JSON.stringify(removedBooks));
    const removedBook = document.querySelector(`li[title='${title}']`);
    removedBook.remove();
    this.update();
    removedBook.style.display = 'none';
    if (this.books.length === 0) {
      const booksShow = document.querySelector('.books-show');
      booksShow.style.display = 'none';
    }
  }
}
