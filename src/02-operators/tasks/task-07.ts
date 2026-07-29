/**
 * A hotel calculates a guest's payment based on the following information.
 * | Information          | Value  |
 * | -------------------- | ------ |
 * | Room Price per Night | 650000 |
 * | Nights Stayed        | 4      |
 * | Service Charge       | 120000 |
 * | Tax                  | 11%    |
 * | VIP Member           | Yes    |
 * 
 * Business Rules
 * - VIP guests receive a 12% room discount.
 * - Tax is calculated after the discount.
 * - Service charge is not discounted.
 * - The hotel also offers free breakfast if the guest stays at least 3 nights or is a VIP member.
 * 
 * The system must calculate:
 * - Room subtotal
 * - Discount
 * - Tax
 * - Final payment
 * - Whether the guest is eligible for free breakfast
<<<<<<< HEAD
 */

const roomPricePerNight: number = 650000;
const nightsStayed: number = 4;
const serviceCharge: number = 120000;
const taxRate: number = 0.11;
const isVIPMember: boolean = true;

// Calculate room subtotal
const roomSubtotal: number = roomPricePerNight * nightsStayed;

// Calculate discount
const discount: number = isVIPMember ? roomSubtotal * 0.12 : 0;

// Calculate tax
const tax: number = (roomSubtotal - discount + serviceCharge) * taxRate;

// Calculate final payment
const finalPayment: number = roomSubtotal - discount + serviceCharge + tax;

// Determine free breakfast eligibility
const isEligibleForFreeBreakfast: boolean = nightsStayed >= 3 || isVIPMember;

console.log("Room Subtotal:", roomSubtotal);
console.log("Discount:", discount);
console.log("Tax:", tax);
console.log("Final Payment:", finalPayment);
console.log("Eligible for Free Breakfast:", isEligibleForFreeBreakfast);
=======
 */
>>>>>>> assign/main
