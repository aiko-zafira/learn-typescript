/**
 * Module 02: Operators — Examples
 *
 * Run: npm run example src/02-operators/examples/arithmetic-and-logical.ts
 */

const a: number = 10;
const b: number = 3;

// Arithmetic operators
console.log("=== Arithmetic ===");
console.log("a + b =", a + b);
console.log("a - b =", a - b);
console.log("a * b =", a * b);
console.log("a / b =", a / b);
console.log("a % b =", a % b);
console.log("a ** b =", a ** b);

// Comparison operators
console.log("\n=== Comparison ===");
console.log("a > b:", a > b);
console.log("a === b:", a === b);
console.log("a !== b:", a !== b);

// Logical operators
const isAdult = true;
const hasTicket = false;

console.log("\n=== Logical ===");
console.log("isAdult && hasTicket:", isAdult && hasTicket);
console.log("isAdult || hasTicket:", isAdult || hasTicket);
console.log("!hasTicket:", !hasTicket);

// Assignment operators
let counter = 0;
counter += 5;
counter *= 2;
console.log("\n=== Assignment ===");
console.log("counter:", counter);

// Ternary operator
const score = 75;
const result = score >= 60 ? "Pass" : "Fail";
console.log("\n=== Ternary ===");
console.log(`Score ${score}: ${result}`);

// Typeof operator
console.log("\n=== Typeof ===");
console.log('typeof "hello":', typeof "hello");
console.log("typeof 42:", typeof 42);
