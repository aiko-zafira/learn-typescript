/**
 * The warehouse checks customer orders before shipping based on array below.
 * 
 * Business Rules
 * An order is ready to ship only if:
 * - Payment has been completed.
 * - Stock is available.
 * 
 * Student Task:
 * Loop through every order and calculate:
 * - Number of orders ready to ship
 * - Number of unpaid orders
 * - Number of orders waiting for stock
 * - Display all order IDs that are ready to ship
 */
const orders = [
  { id: "ORD001", paid: true, stockAvailable: true },
  { id: "ORD002", paid: false, stockAvailable: true },
  { id: "ORD003", paid: true, stockAvailable: false },
  { id: "ORD004", paid: true, stockAvailable: true },
  { id: "ORD005", paid: false, stockAvailable: false },
  { id: "ORD006", paid: true, stockAvailable: true }
];

// 1. Initialize counters and the array to hold ready IDs
let readyToShipCount = 0;
let unpaidCount = 0;
let waitingForStockCount = 0;
const readyToShipIds = [];

// 2. Loop through every order
for (let i = 0; i < orders.length; i++) {
    const order = orders[i];

    // 3. Check if ready to ship (BOTH conditions must be true)
    if (order.paid === true && order.stockAvailable === true) {
        readyToShipCount++;
        readyToShipIds.push(order.id);
    }

    // 4. Check if unpaid
    if (order.paid === false) {
        unpaidCount++;
    }

    // 5. Check if waiting for stock
    if (order.stockAvailable === false) {
        waitingForStockCount++;
    }
}

// Display the results
console.log(`Ready to Ship: ${readyToShipCount}`);
console.log(`Unpaid Orders: ${unpaidCount}`);
console.log(`Waiting for Stock: ${waitingForStockCount}`);
console.log(`Ready to Ship IDs: ${readyToShipIds.join(", ")}`);