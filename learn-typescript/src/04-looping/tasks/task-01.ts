/**
 * Module 04: Looping — Task 01
 *
 * Instructions:
 * 1. Implement each function using loops.
 * 2. Run: npm run example src/04-looping/tasks/task-01.ts
 */

function sumUpTo(n: number): number {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

function getEvensUpTo(n: number): number[] {
  const evens: number[] = [];
  for (let i = 2; i <= n; i += 2) {
    evens.push(i);
  }
  return evens;
}

function factorial(n: number): number {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

function findIndex(arr: number[], target: number): number {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

console.log("sumUpTo(10):", sumUpTo(10)); 
console.log("getEvensUpTo(10):", getEvensUpTo(10)); 
console.log("factorial(5):", factorial(5)); 
console.log("findIndex([10, 20, 30], 20):", findIndex([10, 20, 30], 20)); 
console.log("findIndex([10, 20, 30], 99):", findIndex([10, 20, 30], 99)); 
