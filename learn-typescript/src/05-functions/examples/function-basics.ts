/**
 * Module 05: Functions — Examples
 *
 * Run: npm run example src/05-functions/examples/function-basics.ts
 */

// Function declaration
function greet(name: string): string {
  return `Hello, ${name}!`;
}

// Function expression
const multiply = function (a: number, b: number): number {
  return a * b;
};

// Arrow function
const divide = (a: number, b: number): number => a / b;

// Default parameters
function createUser(name: string, role: string = "student"): string {
  return `${name} (${role})`;
}

// Optional parameters
function buildMessage(title: string, subtitle?: string): string {
  return subtitle ? `${title} — ${subtitle}` : title;
}

// Rest parameters
function sumAll(...numbers: number[]): number {
  return numbers.reduce((total, n) => total + n, 0);
}

// Function as a parameter (callback)
function applyOperation(a: number, b: number, op: (x: number, y: number) => number): number {
  return op(a, b);
}

console.log("=== Functions ===");
console.log(greet("Alice"));
console.log("multiply(4, 5):", multiply(4, 5));
console.log("divide(10, 2):", divide(10, 2));
console.log(createUser("Bob"));
console.log(createUser("Carol", "teacher"));
console.log(buildMessage("TypeScript"));
console.log(buildMessage("TypeScript", "Lesson 5"));
console.log("sumAll(1, 2, 3, 4):", sumAll(1, 2, 3, 4));
console.log("applyOperation(10, 3, (a, b) => a - b):", applyOperation(10, 3, (a, b) => a - b));
