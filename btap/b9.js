"use strict";
class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
    getTitle() {
        return this.title;
    }
    getAuthor() {
        return this.author;
    }
}
class Library {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    viewBooks() {
        this.books.forEach((book, index) => {
            console.log(index + 1, book.getTitle(), book.getAuthor());
        });
    }
}
let book1 = new Book("a", "a");
let book2 = new Book("b", "b");
let book3 = new Book("c", "c");
let book4 = new Book("d", "d");
let book5 = new Book("e", "e");
let library = new Library();
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);
library.addBook(book5);
library.viewBooks();
