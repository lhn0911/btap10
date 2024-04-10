class Book {
    private title: string;
    private author: string;

    constructor(title: string, author: string) {
        this.title = title;
        this.author = author;
    }

    public getTitle(): string {
        return this.title;
    }

    public getAuthor(): string {
        return this.author;
    }
}

class Library {
    private books: Book[];

    constructor() {
        this.books = [];
    }

    public addBook(book: Book): void {
        this.books.push(book);
    }

    public viewBooks(): void {
        this.books.forEach((book, index) => {
            console.log(index + 1, book.getTitle(), book.getAuthor());
        });
    }
}

let book1 = new Book("a","a");
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
