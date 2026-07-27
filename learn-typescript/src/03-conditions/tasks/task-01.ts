/**
 * Module 03: Conditions — Task 01
 *
 * Instructions:
 * 1. Implement the functions using if/else or switch.
 * 2. Run: npm run example src/03-conditions/tasks/task-01.ts
 */

// TODO: Return grade based on score:
//   90-100 → "A", 80-89 → "B", 70-79 → "C", 60-69 → "D", below 60 → "F"
function getGrade(score: number): string {
  return ""; // replace with your code
}

// TODO: Return the number of days in the given month (ignore leap years).
// Use a switch statement. month is 1-12.
function daysInMonth(month: number): number {
  return 0; // replace with your code
}

// TODO: Return "positive", "negative", or "zero"
function checkSign(num: number): string {
  return ""; // replace with your code
}

// --- Tests (do not modify) ---
console.log("getGrade(95):", getGrade(95)); // expected: "A"
console.log("getGrade(72):", getGrade(72)); // expected: "C"
console.log("getGrade(45):", getGrade(45)); // expected: "F"
console.log("daysInMonth(2):", daysInMonth(2)); // expected: 28
console.log("daysInMonth(4):", daysInMonth(4)); // expected: 30
console.log('checkSign(5):', checkSign(5)); // expected: "positive"
console.log('checkSign(-3):', checkSign(-3)); // expected: "negative"
console.log('checkSign(0):', checkSign(0)); // expected: "zero"
