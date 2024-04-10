"use strict";
class Book {
    constructor(title, author, quantity = 1) {
        this.title = title;
        this.author = author;
        this.quantity = quantity;
    }
    getTitle() {
        return this.title;
    }
    getAuthor() {
        return this.author;
    }
    getQuantity() {
        return this.quantity;
    }
    increaseQuantity(amount) {
        this.quantity += amount;
    }
}
class Library {
    constructor() {
        this.books = [];
    }
    addBook(book, quantity = 1) {
        const existingBook = this.books.find(b => b.getTitle() === book.getTitle() && b.getAuthor() === book.getAuthor());
        if (existingBook) {
            existingBook.increaseQuantity(quantity);
        }
        else {
            let newBook = new Book(book.getTitle(), book.getAuthor(), quantity);
            this.books.push(newBook);
        }
    }
    viewBooks() {
        console.log("Books in the library:");
        this.books.forEach((book, index) => {
            console.log(index + 1, book.getTitle(), book.getAuthor(), book.getQuantity());
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
library.addBook(book1, 2);
library.viewBooks();
