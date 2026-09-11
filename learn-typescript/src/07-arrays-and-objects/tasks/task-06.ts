/**
 * A school library records book borrowing transactions.
 * Tasks:
 * 1. Find all borrowing transactions for "Andi".
 * 2. Find the book information for every borrowing transaction.
 * 3. Find students who borrowed a programming book.
 * 4. Calculate the total number of borrowing transactions.
 * 5. Calculate the average borrowing duration.
 * 6. Find students who borrowed books for more than 7 days.
 */
type Book = {
    id: number
    title: string
    category: string
    stock: number
}

type Borrowing = {
    student: string
    bookId: number
    days: number
}

const books = [
    { id: 1, title: "Clean Code", category: "Programming", stock: 3 },
    { id: 2, title: "Atomic Habits", category: "Self Development", stock: 5 },
    { id: 3, title: "The Pragmatic Programmer", category: "Programming", stock: 2 },
    { id: 4, title: "Design Patterns", category: "Programming", stock: 1 },
];

const borrowings = [
    { student: "Andi", bookId: 1, days: 7 },
    { student: "Budi", bookId: 2, days: 3 },
    { student: "Citra", bookId: 1, days: 10 },
    { student: "Deni", bookId: 3, days: 5 },
    { student: "Eka", bookId: 1, days: 4 },
    { student: "Andi", bookId: 3, days: 8 },
];

const andiBorrowings = borrowings.filter(b => b.student === "Andi");
const borrowingsWithBookInfo = borrowings.map(b => {
    const book = books.find(item => item.id === b.bookId);
    return {
        student: b.student,
        days: b.days,
        book: book ? book : null
    };
});
const programmingBorrowings = borrowings.filter(b => {
    const book = books.find(item => item.id === b.bookId);
    return book && book.category === "Programming";
});
const programmingStudents = Array.from(new Set(programmingBorrowings.map(b => b.student)));
const totalTransactions = borrowings.length;
const totalDays = borrowings.reduce((sum, b) => sum + b.days, 0);
const averageDuration = totalDays / totalTransactions;
const longBorrowings = borrowings.filter(b => b.days > 7);
const studentsWithLongBorrowings = Array.from(new Set(longBorrowings.map(b => b.student)));

console.log("====== 1. ANDI'S BORROWINGS ======");
console.log(andiBorrowings);

console.log("====== 2. BORROWINGS WITH BOOK INFO ======");
console.log(borrowingsWithBookInfo);

console.log("====== 3. STUDENTS WHO BORROWED PROGRAMMING BOOKS ======");
console.log(programmingStudents);

console.log("====== 4. TOTAL NUMBER OF TRANSACTIONS ======");
console.log(totalTransactions);

console.log("====== 5. AVERAGE BORROWING DURATION ======");
console.log(`${averageDuration.toFixed(1)} days`);

console.log("====== 6. STUDENTS WHO BORROWED > 7 DAYS ======");
console.log(studentsWithLongBorrowings);