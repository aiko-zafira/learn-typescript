/**
 * An online marketplace sells thousands of products every day. 
 * To display complete product information, the system stores a product code, product name, selling price, 
 * stock quantity, product weight, average customer rating, and whether the product is currently discounted.
 * 
 * Task:
 * 1. Define a proper type for the product information.
 * 2. Implement a type that you defined on 3 products data.
 * 
 * display the product data using console.log.
 */
const product1: { productCode: string; productName: string; sellingPrice: number; stockQuantity: number; productWeight: number; averageCustomerRating: number; isDiscounted: boolean } = {
  productCode: "PRD001",
  productName: "Wireless Mouse",
  sellingPrice: 250000,
  stockQuantity: 50,
  productWeight: 150,
  averageCustomerRating: 4.5,
  isDiscounted: true
};

const product2: { productCode: string; productName: string; sellingPrice: number; stockQuantity: number; productWeight: number; averageCustomerRating: number; isDiscounted: boolean } = {
  productCode: "PRD002",
  productName: "Mechanical Keyboard",
  sellingPrice: 600000,
  stockQuantity: 30,
  productWeight: 1200,
  averageCustomerRating: 4.8,
  isDiscounted: false
};

const product3: { productCode: string; productName: string; sellingPrice: number; stockQuantity: number; productWeight: number; averageCustomerRating: number; isDiscounted: boolean } = {
  productCode: "PRD003",
  productName: "USB-C Hub",
  sellingPrice: 150000,
  stockQuantity: 100,
  productWeight: 200,
  averageCustomerRating: 4.2,
  isDiscounted: true
};

console.log("Product 1:", product1);
console.log("Product 2:", product2);
console.log("Product 3:", product3);
