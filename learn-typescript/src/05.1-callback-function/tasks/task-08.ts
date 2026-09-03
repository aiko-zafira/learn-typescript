/**
 * A company has a simple data-processing engine used to analyze transaction records.
 */
type Transaction = {
    id: string
    customer: string
    amount: number
    status: "paid" | "pending" | "cancelled"
}

const transactions: Transaction[] = [
    {
        id: "TRX001",
        customer: "Alya",
        amount: 850000,
        status: "paid"
    },
    {
        id: "TRX002",
        customer: "Budi",
        amount: 1250000,
        status: "pending"
    },
    {
        id: "TRX003",
        customer: "Citra",
        amount: 450000,
        status: "paid"
    },
    {
        id: "TRX004",
        customer: "Dimas",
        amount: 2100000,
        status: "paid"
    },
    {
        id: "TRX005",
        customer: "Eka",
        amount: 780000,
        status: "cancelled"
    }
];

/** TASKS:
 * - Extract customer's name only in array
 * - Determine Transaction Category with rules below:
 *   - ≥ Rp2,000,000 → HIGH VALUE
 *   - ≥ Rp1,000,000 → MEDIUM VALUE
 *   - < Rp1,000,000 → LOW VALUE
 * - Calculate platform fee:
 *   - Paid transactions → 2%
 *   - Pending transactions → 1%
 *   - Cancelled transactions → 0%
 */

function processTransactions<T>(
    arr: Transaction[],
    callback: (trx: Transaction) => T
): T[] {
    const results: T[] = [];
    for (const trx of arr) {
        results.push(callback(trx));
    }
    return results;
}

function getCustomerName(trx: Transaction): string {
    return trx.customer;
}

function getTransactionCategory(trx: Transaction) {
    let category = "LOW VALUE";
    if (trx.amount >= 2000000) {
        category = "HIGH VALUE";
    }
    if (trx.amount >= 1000000 && trx.amount < 2000000) {
        category = "MEDIUM VALUE";
    }
    return { ...trx, category };
}

function getPlatformFee(trx: Transaction) {
    let feeRate = 0;
    if (trx.status === "paid") {
        feeRate = 0.02;
    }
    if (trx.status === "pending") {
        feeRate = 0.01;
    }
    if (trx.status === "cancelled") {
        feeRate = 0;
    }

    const platformFee = trx.amount * feeRate;
    return { ...trx, platformFee };
}

console.log("====== CUSTOMER NAMES ======");
console.log(processTransactions(transactions, getCustomerName));

console.log("====== TRANSACTION CATEGORIES ======");
console.log(processTransactions(transactions, getTransactionCategory));

console.log("====== PLATFORM FEES ======");
console.log(processTransactions(transactions, getPlatformFee));