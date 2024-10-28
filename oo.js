"use strict";
// Classe base que representa um Livro
// classe base
class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
    getTitle() {
        return this.title;
    }
    getAuthor() {
        return this.author;
    }
    getYear() {
        return this.year;
    }
    setYear(year) {
        this.year = year;
    }
}
//fim da classe base
//classes derivadas
// Classe derivada que representa um Livro Técnico, herda de Book
class TechnicalBook extends Book {
    constructor(title, author, year, field) {
        super(title, author, year); // Chama o construtor da classe base
        this.field = field;
    }
    getField() {
        return this.field;
    }
}
// Classe derivada que representa um Livro de Literatura, herda de Book
class LiteratureBook extends Book {
    constructor(title, author, year, genre) {
        super(title, author, year); // Chama o construtor da classe base
        this.genre = genre;
    }
    getGenre() {
        return this.genre;
    }
}
// classe biblioteca
// Classe que representa uma Biblioteca
class Library {
    constructor() {
        this.books = []; // Propriedade privada para armazenar a lista de livros
    }
    // Método para adicionar um livro à biblioteca
    addBook(book) {
        this.books.push(book);
    }
    // Método para remover um livro da biblioteca pelo título
    removeBook(title) {
        this.books = this.books.filter(book => book.getTitle() !== title);
    }
    // Método para encontrar um livro pelo título
    findBook(title) {
        return this.books.find(book => book.getTitle() === title);
    }
    // Método para listar todos os livros da biblioteca
    listBooks() {
        this.books.forEach(book => {
            if (book instanceof TechnicalBook) {
                console.log(`${book.getTitle()} by ${book.getAuthor()} (${book.getYear()}), Field: ${book.getField()}`);
            }
            else if (book instanceof LiteratureBook) {
                console.log(`${book.getTitle()} by ${book.getAuthor()} (${book.getYear()}), Genre: ${book.getGenre()}`);
            }
            else {
                console.log(`${book.getTitle()} by ${book.getAuthor()} (${book.getYear()})`);
            }
        });
    }
}
//usando as claasses
// Criação da biblioteca
const myLibrary = new Library();
// Adicionando livros técnicos à biblioteca
myLibrary.addBook(new TechnicalBook('Clean Code', 'Robert C. Martin', 2008, 'Software Engineering'));
myLibrary.addBook(new TechnicalBook('The Pragmatic Programmer', 'Andrew Hunt', 1999, 'Software Development'));
// Adicionando livros de literatura à biblioteca
myLibrary.addBook(new LiteratureBook('To Kill a Mockingbird', 'Harper Lee', 1960, 'Fiction'));
myLibrary.addBook(new LiteratureBook('1984', 'George Orwell', 1949, 'Dystopian'));
// Listando todos os livros da biblioteca
console.log('Lista de Livros:');
myLibrary.listBooks();
// Procurando um livro específico
const book = myLibrary.findBook('1984');
if (book) {
    console.log(`Livro encontrado: ${book.getTitle()} por ${book.getAuthor()}`);
}
// Removendo um livro da biblioteca
myLibrary.removeBook('Clean Code');
console.log('Lista de Livros após remoção:');
myLibrary.listBooks();
/*
Explicação Detalhada
Classe Book: Representa um livro genérico com propriedades privadas title, author, e year.

Classe TechnicalBook: Herda de Book e adiciona a propriedade field para especificar a área de especialização.

Classe LiteratureBook: Herda de Book e adiciona a propriedade genre para especificar o gênero literário.

Classe Library: Gerencia uma coleção de livros, permitindo adicionar, remover, encontrar e listar livros.
Usa polimorfismo para lidar com diferentes tipos de livros (TechnicalBook e LiteratureBook).

Herança e Polimorfismo
Herança: TechnicalBook e LiteratureBook herdam de Book, reutilizando o código da classe base e adicionando novas funcionalidades.

Polimorfismo: O método listBooks da classe Library usa polimorfismo para tratar diferentes tipos de livros,
verificando o tipo de cada livro com instanceof.
*/ 
