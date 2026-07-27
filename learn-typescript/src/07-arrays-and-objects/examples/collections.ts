/**
 * Module 07: Arrays & Objects — Examples
 *
 * Run: npm run example src/07-arrays-and-objects/examples/collections.ts
 */

// Array methods
const numbers = [1, 2, 3, 4, 5];

console.log("=== Array Methods ===");
console.log("map (double):", numbers.map((n) => n * 2));
console.log("filter (even):", numbers.filter((n) => n % 2 === 0));
console.log("reduce (sum):", numbers.reduce((sum, n) => sum + n, 0));
console.log("find (>3):", numbers.find((n) => n > 3));
console.log("includes(3):", numbers.includes(3));

// Destructuring
const [first, second, ...rest] = numbers;
console.log("\n=== Destructuring ===");
console.log({ first, second, rest });

// Spread operator
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log("spread array:", arr2);

// Object literal
const book = {
  title: "TypeScript Handbook",
  author: "Microsoft",
  year: 2024,
  getSummary() {
    return `${this.title} by ${this.author} (${this.year})`;
  },
};

console.log("\n=== Objects ===");
console.log(book.getSummary());

// Object destructuring
const { title, author } = book;
console.log({ title, author });

// Spread with objects
const updatedBook = { ...book, year: 2025 };
console.log("updated year:", updatedBook.year);

// Record type
type GradeBook = Record<string, number>;
const grades: GradeBook = { Alice: 90, Bob: 85, Carol: 92 };
console.log("\n=== Record ===");
console.log(grades);
