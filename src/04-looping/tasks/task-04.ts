/**
 * An online store wants to analyze today's sales transactions. 
 * Each transaction amount is stored in an array.
 * ---------------------------------
 * const sales = [
 * 125000,
 * 350000,
 * 78000,
 * 910000,
 * 150000,
 * 420000,
 * 275000,
 * 99000,
 * 640000,
 * 18000
 * ]
 * -------------------------------------
 * 
 * Student task in calculate:
 * 1. Total sales revenue
 * 2. Highest transaction
 * 3. Lowest transaction
 * 4. Number of transactions worth Rp300,000 or more
 * 5. Average transaction value
 */

const sales = [
    125000,
    350000,
    78000,
    910000,
    150000,
    420000,
    275000,
    99000,
    640000,
    18000
];

// Initialize variables
let totalRevenue = 0;
let highestTransaction = sales[0]; // Start by assuming the first sale is the highest
let lowestTransaction = sales[0];  // Start by assuming the first sale is the lowest
let highValueCount = 0;

// Loop through all the transactions
for (let i = 0; i < sales.length; i++) {
    const currentSale = sales[i];

    // 1. Calculate total sales revenue
    totalRevenue += currentSale;

    // 2. Find the highest transaction
    if (currentSale > highestTransaction) {
        highestTransaction = currentSale;
    }

    // 3. Find the lowest transaction
    if (currentSale < lowestTransaction) {
        lowestTransaction = currentSale;
    }

    // 4. Count transactions worth Rp300,000 or more
    if (currentSale >= 300000) {
        highValueCount++;
    }
}

// 5. Calculate average transaction value
const averageTransaction = totalRevenue / sales.length;

// Display the results
console.log(`Total Sales Revenue: ${totalRevenue}`);
console.log(`Highest Transaction: ${highestTransaction}`);
console.log(`Lowest Transaction: ${lowestTransaction}`);
console.log(`Transactions >= Rp300,000: ${highValueCount}`);
console.log(`Average Transaction: ${averageTransaction}`);