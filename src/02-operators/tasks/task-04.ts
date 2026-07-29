/**
 * An online store is processing a customer's shopping cart.
 * The customer purchased:
 * 
 * | Product             |  Price | Quantity |
 * | ------------------- | -----: | -------: |
 * | Mechanical Keyboard | 850000 |        1 |
 * | Wireless Mouse      | 275000 |        2 |
 * | Mouse Pad           | 120000 |        1 |
 * 
 * Business Rules:
 * - Customers receive 10% discount if the total purchase exceeds Rp1,000,000.
 * - Only Premium members receive free shipping.
 * - Every purchased product increases the total item counter.
 * 
 * Additional Information: Current customer is Premium member.
 * 
 * Task:
 *  - Calculate subtotal.
 *  - Count the total purchased items using an increment operator.
 *  - Determine whether a discount should be applied.
 *  - Calculate the final payment.

 */const mechanicalKeyboardPrice: number = 850000;
const wirelessMousePrice: number = 275000;
const mousePadPrice: number = 120000;  

const mechanicalKeyboardQuantity: number = 1;
const wirelessMouseQuantity: number = 2;
const mousePadQuantity: number = 1;

const isPremiumMember: boolean = true;

// Calculate subtotal
const subtotal: number = (mechanicalKeyboardPrice * mechanicalKeyboardQuantity) +
                         (wirelessMousePrice * wirelessMouseQuantity) +
                         (mousePadPrice * mousePadQuantity);

// Count total purchased items
let totalItems: number = 0;
totalItems += mechanicalKeyboardQuantity;
totalItems += wirelessMouseQuantity;
totalItems += mousePadQuantity;

// Determine discount
let discount: number = 0;
if (subtotal > 1000000) {
  discount = subtotal * 0.10; // 10% discount
}

// Calculate final payment
const finalPayment: number = subtotal - discount;

console.log("Subtotal:", subtotal);
console.log("Total Items Purchased:", totalItems);
console.log("Discount Applied:", discount);
console.log("Final Payment:", finalPayment);
