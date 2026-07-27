/**
 * Module 07: Arrays & Objects — Task 01
 *
 * Instructions:
 * 1. Implement each function using array/object methods.
 * 2. Run: npm run example src/07-arrays-and-objects/tasks/task-01.ts
 */

interface Product {
  id: number;
  name: string;
  price: number;
}

const products: Product[] = [
  { id: 1, name: "Pen", price: 1.5 },
  { id: 2, name: "Notebook", price: 3.0 },
  { id: 3, name: "Eraser", price: 0.5 },
  { id: 4, name: "Ruler", price: 2.0 },
];

// TODO: Return total price of all products (use reduce)
function getTotalPrice(items: Product[]): number {
  return 0; // replace with your code
}

// TODO: Return product names as a string array (use map)
function getProductNames(items: Product[]): string[] {
  return []; // replace with your code
}

// TODO: Return products with price less than maxPrice (use filter)
function getAffordable(items: Product[], maxPrice: number): Product[] {
  return []; // replace with your code
}

// TODO: Find product by id (use find), return undefined if not found
function findProductById(items: Product[], id: number): Product | undefined {
  return undefined; // replace with your code
}

// TODO: Return a new product object with an updated price (use spread, do NOT mutate original)
function updatePrice(product: Product, newPrice: number): Product {
  return product; // replace with your code
}

// --- Tests (do not modify) ---
console.log("getTotalPrice:", getTotalPrice(products)); // expected: 7
console.log("getProductNames:", getProductNames(products)); // expected: ["Pen", "Notebook", "Eraser", "Ruler"]
console.log("getAffordable(<2):", getAffordable(products, 2)); // expected: Pen and Eraser
console.log("findProductById(2):", findProductById(products, 2)?.name); // expected: "Notebook"
console.log("updatePrice:", updatePrice(products[0], 2.0)); // expected: { id: 1, name: "Pen", price: 2.0 }
