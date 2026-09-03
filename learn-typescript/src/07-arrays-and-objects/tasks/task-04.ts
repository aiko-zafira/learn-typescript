/**
 * A customer has a shopping cart below.
 * Tasks:
 * 1. Count subtotal of all products (expected result: 3.350.000)
 * 2. Calculate discount with this rules.
 *  - subtotal >= 3,000,000 → 10% discount
 *  - subtotal >= 2,000,000 → 5% discount
 *  - otherwise             → 0%
 * 
 * 3. Calculate final subtotal after given discount
 * 4. Find expensive product ( > 1.000.000)
 */
type CartItem = {
    product: string
    price: number
    quantity: number
}

const cart = [
    {
        product: "Keyboard",
        price: 350000,
        quantity: 2,
    },
    {
        product: "Mouse",
        price: 150000,
        quantity: 1,
    },
    {
        product: "Monitor",
        price: 2500000,
        quantity: 1,
    },
];

// 1. Count subtotal of all products
const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

// 2. Calculate discount based on rules
let discountRate = 0;
if (subtotal >= 3000000) {
    discountRate = 0.10;
} else if (subtotal >= 2000000) {
    discountRate = 0.05;
}

const discountAmount = subtotal * discountRate;
const finalSubtotal = subtotal - discountAmount;
const expensiveProducts = cart.filter(item => item.price > 1000000);

console.log("====== 1. SUBTOTAL ======");
console.log(`Rp${subtotal.toLocaleString()}`);

console.log("====== 2. DISCOUNT ======");
console.log(`${discountRate * 100}% (Rp${discountAmount.toLocaleString()})`);

console.log("====== 3. FINAL SUBTOTAL ======");
console.log(`Rp${finalSubtotal.toLocaleString()}`);

console.log("====== 4. EXPENSIVE PRODUCTS (> Rp1,000,000) ======");
console.log(expensiveProducts);