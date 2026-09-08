/**
 * An online store has customer orders.
 * Tasks:
 * 1. Get only completed orders.
 * 2. Calculate the total value of each order.
 * 3. Find the customer who spent the most.
 * 4. Calculate the total revenue from completed orders.
 * 5. Find all products that have been purchased.
 */

type OrderItem = {
    product: string
    price: number
    quantity: number
}

type Order = {
    id: number
    customer: string
    status: "completed" | "cancelled" | "pending"
    items: OrderItem[]
}

const orders = [
    {
        id: 101,
        customer: "Andi",
        status: "completed",
        items: [
            { product: "Keyboard", price: 350000, quantity: 1 },
            { product: "Mouse", price: 150000, quantity: 2 },
        ],
    },
    {
        id: 102,
        customer: "Budi",
        status: "cancelled",
        items: [
            { product: "Monitor", price: 2500000, quantity: 1 },
        ],
    },
    {
        id: 103,
        customer: "Citra",
        status: "completed",
        items: [
            { product: "Monitor", price: 2500000, quantity: 2 },
            { product: "Keyboard", price: 350000, quantity: 1 },
        ],
    },
];

const completedOrders = orders.filter(order => order.status === "completed");
const ordersWithTotal = orders.map(order => {
    const orderTotal = order.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    return {
        ...order,
        totalValue: orderTotal
    };
});
const customerSpending: { [key: string]: number } = {};
orders
    .filter(order => order.status === "completed")
    .forEach(order => {
        const orderTotal = order.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        if (!customerSpending[order.customer]) {
            customerSpending[order.customer] = 0;
        }
        customerSpending[order.customer] += orderTotal;
    });

let topCustomer = "";
let maxSpent = 0;
for (const customer in customerSpending) {
    if (customerSpending[customer] > maxSpent) {
        maxSpent = customerSpending[customer];
        topCustomer = customer;
    }
}
const totalRevenue = completedOrders.reduce((sum, order) => {
    const orderTotal = order.items.reduce((itemSum, item) => itemSum + (item.price * item.quantity), 0);
    return sum + orderTotal;
}, 0);
const purchasedProducts = Array.from(
    new Set(
        orders
            .filter(order => order.status === "completed")
            .flatMap(order => order.items.map(item => item.product))
    )
);

console.log("====== 1. COMPLETED ORDERS ======");
console.log(completedOrders);

console.log("====== 2. ORDERS WITH TOTAL VALUE ======");
console.log(ordersWithTotal);

console.log("====== 3. TOP SPENDING CUSTOMER ======");
console.log({ customer: topCustomer, totalSpent: maxSpent });

console.log("====== 4. TOTAL REVENUE ======");
console.log(`Rp${totalRevenue.toLocaleString()}`);

console.log("====== 5. PURCHASED PRODUCTS ======");
console.log(purchasedProducts);