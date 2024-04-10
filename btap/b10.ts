class Book {
    private title: string;
    private author: string;
    private quantity: number;

    constructor(title: string, author: string, quantity: number = 1) {
        this.title = title;
        this.author = author;
        this.quantity = quantity;
    }

    public getTitle(): string {
        return this.title;
    }

    public getAuthor(): string {
        return this.author;
    }

    public getQuantity(): number {
        return this.quantity;
    }

    public increaseQuantity(amount: number): void {
        this.quantity += amount;
    }
}

class Library {
    private books: Book[];

    constructor() {
        this.books = [];
    }

    public addBook(book: Book, quantity: number = 1): void {
        const existingBook = this.books.find(b => b.getTitle() === book.getTitle() && b.getAuthor() === book.getAuthor());
        if (existingBook) {
            existingBook.increaseQuantity(quantity);
        } else {
            let newBook = new Book(book.getTitle(), book.getAuthor(), quantity);
            this.books.push(newBook);
        }
    }

    public viewBooks(): void {
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
