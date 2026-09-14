/**
 * An online store supports several payment methods.
 * Every payment has:
 * - Transaction ID
 * - Amount
 * 
 * But each payment method processes the transaction differently.
 * -  Credit card's processing fee is 2% of payment amount
 * -  Bank Transfer's processing fee is 5000
 * -  E Wallet's processing 1% of payment amount
 * 
 * Example transactions:
 * ---------------------
 * Credit Card
 * Transaction: TRX001
 * Amount: Rp1,000,000
 * ---------------------
 * Bank Transfer
 * Transaction: TRX002
 * Amount: Rp750,000
 * ---------------------
 * E-Wallet
 * Transaction: TRX003
 * Amount: Rp500,000
 * ---------------------
 */

class Payment {
    constructor(
        public transactionId: string,
        public amount: number
    ) { }

    calculateFee(): number {
        return 0;
    }

    getTotalAmount(): number {
        return this.amount + this.calculateFee();
    }
}

class CreditCardPayment extends Payment {
    calculateFee(): number {
        return this.amount * 0.02;
    }
}

class BankTransferPayment extends Payment {
    calculateFee(): number {
        return 5000;
    }
}

class EWalletPayment extends Payment {
    calculateFee(): number {
        return this.amount * 0.01;
    }
}

const payments: Payment[] = [
    new CreditCardPayment("TRX001", 1000000),
    new BankTransferPayment("TRX002", 750000),
    new EWalletPayment("TRX003", 500000)
];

for (const payment of payments) {
    const fee = payment.calculateFee();
    const total = payment.getTotalAmount();
    
    console.log(
        `[${payment.transactionId}] Amount: Rp${payment.amount.toLocaleString('id-ID')} | ` +
        `Fee: Rp${fee.toLocaleString('id-ID')} | ` +
        `Total: Rp${total.toLocaleString('id-ID')}`
    );
}