/**
 * The school cafeteria sells lunch packages to students. Today, Raka purchased 3 fried rice meals, each costing Rp18,000, 
 * and 2 bottles of mineral water, each costing Rp5,000. Because he is a member of the student council, he received a Rp10,000 discount.
 * The cashier wants to calculate:
 *  - Total price of fried rice
 *  - Total price of drinks
 *  - Total price before discount
 *  - Final amount to be paid
 *
 * Task:
 * 1. Use operators to calculate:
 *  - Total food price
 *  - Total drink price
 *  - Grand total
 *  - Final payment
 * 2. Display the calculation results.
 */
const costingf: number = 18000;
const muchf: number = 3;
const costingD: number = 5000;
const muchd: number = 2;
const discount: number = 10000;

const food: number = costingf * muchf;
const drink: number = costingD * muchd;
const total: number = food + drink;
const totaldisc: number = total - discount;

console.log("=== Final Payment ===");
console.log("Food : ", food);
console.log("Drink : ", drink);
console.log("----------");
console.log("Total : ", total);
console.log("Discount : ", totaldisc);