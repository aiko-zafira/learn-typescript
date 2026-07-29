/**
 * Module 08: Generics & Type Utilities — Task 01
 *
 * Instructions:
 * 1. Implement the generic functions and types as described.
 * 2. Run: npm run example src/08-generics/tasks/task-01.ts
 */

// TODO: Create a generic function `getFirst` that returns the first element of an array
function getFirst<T>(arr: T[]): T | undefined {
  return undefined; // replace with your code
}

// TODO: Create a generic function `swap` that returns a tuple with two elements swapped
function swap<T, U>(a: T, b: U): [U, T] {
  return [b, a]; // verify this is correct or fix it
}

// TODO: Create a generic interface `Pair<K, V>` with properties key: K and value: V

// TODO: Create a type `Employee` with id, name, department, salary
//       Then create `EmployeePreview` using Pick to only include id, name, department

// --- Tests (do not modify) ---
console.log("getFirst([1,2,3]):", getFirst([1, 2, 3])); // expected: 1
console.log('getFirst(["a","b"]):', getFirst(["a", "b"])); // expected: "a"
console.log("swap(1, 'hello'):", swap(1, "hello")); // expected: ["hello", 1]

// Uncomment after creating Pair and EmployeePreview:
/*
const pair: Pair<string, number> = { key: "score", value: 95 };
console.log("Pair:", pair);

type Employee = { id: number; name: string; department: string; salary: number };
type EmployeePreview = Pick<Employee, "id" | "name" | "department">;
const preview: EmployeePreview = { id: 1, name: "Alice", department: "Engineering" };
console.log("EmployeePreview:", preview);
*/

console.log("Complete the TODOs above, then uncomment the Pair/EmployeePreview tests.");
