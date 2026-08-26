/**
 * 
 * The school library is building a digital catalog to help students search for books. 
 * Every book must store its ISBN number, title, author's name, total number of pages, 
 * book category, and whether the book is currently available for borrowing.
 * 
 * Task:
 * 1. Define a proper type for the book information.
 * 2. Implement a type that you defined on 3 books data.
 * 
 * display the book data using console.log.
 */

const book1:{ isbn:string; title:string; author:string; totalPages: number; category: string; isAvailable: boolean } = {
  isbn: "978-3-16-148410-0",
  title: "Our Home",
  author: "John Doe",
  totalPages: 180,
  category: "Fiction",
  isAvailable: true
};

const book2:{ isbn: string; title: string; author: string; totalPages: number; category: string; isAvailable: boolean } = {
  isbn: "978-0-14-044913-6",
  title: "Babel Tower",
  author: "Margaret Atwood",
  totalPages: 430,
  category: "Fiction",
  isAvailable: false
};

const book3:{ isbn: string; title: string; author: string; totalPages: number; category: string; isAvailable: boolean } = {
  isbn: "978-0-307-74176-9",
  title: "Doraemon",
  author: "Shinzo Oba",
  totalPages: 498,
  category: "Non-Fiction",
  isAvailable: true
};

console.log("Book 1:", book1);
console.log("Book 2:", book2);
console.log("Book 3:", book3);
