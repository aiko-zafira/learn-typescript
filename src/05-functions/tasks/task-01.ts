/**
 * Module 05: Functions — Task 01
 *
 * Instructions:
 * 1. Implement each function as described.
 * 2. Run: npm run example src/05-functions/tasks/task-01.ts
 */

// TODO: Return a greeting string: "Hello, {name}! Welcome to {course}."
function welcomeMessage(name: string, course: string = "TypeScript"): string {
  return ""; // replace with your code
}

// TODO: Return the maximum value in the array (do NOT use Math.max)
function findMax(numbers: number[]): number {
  return 0; // replace with your code
}

// TODO: Return a new array with each number doubled (use .map)
function doubleAll(numbers: number[]): number[] {
  return []; // replace with your code
}

// TODO: Return only numbers greater than threshold (use .filter)
function filterAbove(numbers: number[], threshold: number): number[] {
  return []; // replace with your code
}

// TODO: Implement using an arrow function assigned to a const
const square = (n: number): number => {
  return 0; // replace with your code
};

// --- Tests (do not modify) ---
console.log(welcomeMessage("Alice")); // expected: "Hello, Alice! Welcome to TypeScript."
console.log(welcomeMessage("Bob", "JavaScript")); // expected: "Hello, Bob! Welcome to JavaScript."
console.log("findMax([3, 9, 1, 7]):", findMax([3, 9, 1, 7])); // expected: 9
console.log("doubleAll([1, 2, 3]):", doubleAll([1, 2, 3])); // expected: [2, 4, 6]
console.log("filterAbove([1, 5, 3, 8, 2], 4):", filterAbove([1, 5, 3, 8, 2], 4)); // expected: [5, 8]
console.log("square(6):", square(6)); // expected: 36
