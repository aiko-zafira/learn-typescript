/**
 * Modul 05: Fungsi — Tugas 01
 *
 * Instruksi:
 * 1. Implementasikan setiap fungsi sesuai deskripsi.
 * 2. Jalankan: npm run example src/05-functions/tasks/task-01.ts
 */

function welcomeMessage(name: string, course: string = "TypeScript"): string {
  return `Hello, ${name}! Welcome to ${course}.`; 
}

function findMax(numbers: number[]): number {
  if (numbers.length === 0) {
    throw new Error("Array kosong");
  }
  let max = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max;
}

function doubleAll(numbers: number[]): number[] {
  return numbers.map(n => n * 2);
}

function filterAbove(numbers: number[], threshold: number): number[] {
  return numbers.filter(n => n > threshold);
}

const square = (n: number): number => {
  return n * n;
};

// --- Tests (do not modify) ---
console.log(welcomeMessage("Alice")); // expected: "Hello, Alice! Welcome to TypeScript."
console.log(welcomeMessage("Bob", "JavaScript")); // expected: "Hello, Bob! Welcome to JavaScript."
console.log("findMax([3, 9, 1, 7]):", findMax([3, 9, 1, 7])); // expected: 9
console.log("doubleAll([1, 2, 3]):", doubleAll([1, 2, 3])); // expected: [2, 4, 6]
console.log("filterAbove([1, 5, 3, 8, 2], 4):", filterAbove([1, 5, 3, 8, 2], 4)); // expected: [5, 8]
console.log("square(6):", square(6)); // expected: 36