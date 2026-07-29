/**
 * An internet café charges customers Rp8,000 per hour. 
 * Customers are billed for every started hour. If the total playing time exceeds 5 hours, they receive a 15% discount.
 * Today, a customer used a computer for:
 * 7 hours and 35 minutes
 * 
 * 
 * You need to determine:
 * - Total playing time in minutes
 * - Remaining minutes after full hours
 * - Total billed hours
 * - Total payment before discount
 * - Discount amount
 * - Final payment
 */

const ratePerHour: number = 8000;
const totalHours: number = 7;
const totalMinutes: number = 35;

const totalPlayingTime: number = totalHours * 60 + totalMinutes;
const remainingMinutes: number = totalPlayingTime % 60;
const totalBilledHours: number = Math.ceil(totalPlayingTime / 60);
const totalPaymentBeforeDiscount: number = totalBilledHours * ratePerHour;
const discount: number = totalPaymentBeforeDiscount * 0.15;
const finalPayment: number = totalPaymentBeforeDiscount - discount;

console.log("Total Playing Time (minutes):", totalPlayingTime);
console.log("Remaining Minutes:", remainingMinutes);
console.log("Total Billed Hours:", totalBilledHours);
console.log("Total Payment Before Discount:", totalPaymentBeforeDiscount);
console.log("Discount Amount:", discount);
console.log("Final Payment:", finalPayment);
