/**
 * Module 01: Data Types — Examples
 *
 * Run: npm run example src/01-data-types/examples/basic-types.ts
 */

// Primitive types
const studentName: string = "Alice";
const age: number = 20;
const isEnrolled: boolean = true;

// Arrays
const scores: number[] = [85, 90, 78];
const subjects: Array<string> = ["Math", "English", "Science"];

// Tuple — fixed length and type order
const studentRecord: [string, number] = ["Bob", 22];

// Enum — named constants
enum Grade {
  A = "Excellent",
  B = "Good",
  C = "Average",
}

// Any — avoid when possible; use when type is truly unknown
let flexibleValue: any = "hello";
flexibleValue = 42;

// Unknown — safer alternative to any
let userInput: unknown = "some input";
if (typeof userInput === "string") {
  console.log(userInput.toUpperCase());
}

// Void — function returns nothing
function logMessage(message: string): void {
  console.log(message);
}

// Null and Undefined
let emptyValue: null = null;
let notAssigned: undefined = undefined;

console.log("=== Basic Types ===");
console.log({ studentName, age, isEnrolled });
console.log({ scores, subjects });
console.log({ studentRecord, grade: Grade.A });
logMessage("Data types example completed!");
