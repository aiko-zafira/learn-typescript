/**
 * A school library wants to create a digital system for managing books.
 * 
 * Each book has:
 * - ISBN
 * - Title
 * - Author
 * - Total pages
 * - Borrowing status
 * 
 * The library wants to prevent users from directly changing the borrowing status.
 * Instead, the status can only change through:
 * - borrow()
 * - returnBook()
 * 
 * Business Rules
 * - A book can only be borrowed when: status = available
 * - When a book is borrowed: available → borrowed
 * - A borrowed book cannot be borrowed again.
 * - When the book is returned: borrowed → available
 * - An available book cannot be returned.
 * 
 * Tasks:
 * - create class Book that minimum has property and method below:
 *   - private status: string;
 *   - borrow()
 *   - returnBook()
 *   - showInfo()
 *   - isAvailable()
 * - implement class with at least 2 objects
 */
class Book {
    private status: string;

    constructor(
        public isbn: string,
        public title: string,
        public author: string,
        public totalPages: number
    ) {
        this.status = "available";
    }

    borrow(): boolean {
        if (this.status === "available") {
            this.status = "borrowed";
            console.log(`[Success] You borrowed "${this.title}".`);
            return true;
        }
        console.log(`[Borrow Failed] "${this.title}" is already borrowed.`);
        return false;
    }

    returnBook(): boolean {
        if (this.status === "borrowed") {
            this.status = "available";
            console.log(`[Success] You returned "${this.title}".`);
            return true;
        }
        console.log(`[Return Failed] "${this.title}" is already in the library.`);
        return false;
    }

    showInfo(): void {
        console.log("--------------------------------------------------");
        console.log(`ISBN        : ${this.isbn}`);
        console.log(`Title       : ${this.title}`);
        console.log(`Author      : ${this.author}`);
        console.log(`Total Pages : ${this.totalPages}`);
        console.log(`Status      : ${this.status}`);
        console.log("--------------------------------------------------");
    }

    isAvailable(): boolean {
        return this.status === "available";
    }
}

const book1 = new Book("978-0132350884", "Clean Code", "Robert C. Martin", 464);
const book2 = new Book("978-0201633610", "Design Patterns", "Erich Gamma", 395);

book1.showInfo();
book2.showInfo();
book1.borrow();
book1.borrow(); 
book2.returnBook(); 
book1.returnBook(); 

console.log(`Is "${book1.title}" available? ${book1.isAvailable()}`);