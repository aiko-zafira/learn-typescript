/**
 * A warehouse stores the stock quantity of each product in following array.
 * Warehouse Rules:
 * - Out of Stock → quantity = 0
 * - Low Stock → quantity < 10
 * - Safe Stock → quantity ≥ 10
 * 
 * Students have to Calculate:
 * - Number of Out of Stock products
 * - Number of Low Stock products
 * - Number of Safe Stock products
 * - Total inventory
 * - Average stock quantity
 */

const stocks = [
    25, 0, 18, 6, 42,
    9, 0, 55, 13, 2,
    30, 8, 41, 0, 16
];

// 1. Initialize variables for counting categories and total inventory
let outOfStockCount = 0;
let lowStockCount = 0;
let safeStockCount = 0;
let totalInventory = 0;

// 2. Iterate through the stock array using a loop
for (let i = 0; i < stocks.length; i++) {
    const currentStock = stocks[i];
    
    // Add the current item's quantity to the total inventory
    totalInventory += currentStock;

    // 3. Use conditional logic to categorize the stock levels
    if (currentStock === 0) {
        outOfStockCount++;
    } else if (currentStock < 10) {
        // We check < 10 here, but because we already checked for 0 above, 
        // this only catches numbers from 1 to 9.
        lowStockCount++;
    } else {
        // Anything 10 or greater falls into this category
        safeStockCount++;
    }
}

// 4. Calculate the average stock quantity
const averageStock = totalInventory / stocks.length;

// Display the results
console.log(`Out of Stock: ${outOfStockCount}`);
console.log(`Low Stock: ${lowStockCount}`);
console.log(`Safe Stock: ${safeStockCount}`);
console.log(`Total Inventory: ${totalInventory}`);
console.log(`Average Stock: ${averageStock}`);