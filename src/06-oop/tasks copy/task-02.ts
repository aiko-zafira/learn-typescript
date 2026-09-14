/**
 * A digital wallet application stores information about a user's account.
 * 
 * A wallet has:
 * - Owner name
 * - Wallet ID
 * - Balance
 * 
 * For example, Jude Bellingham creates a wallet with:
 * | Property        | Value           |
 * | --------------- | --------------- |
 * | Wallet ID       | WAL001          |
 * | Owner           | Harry Maguire   |
 * | Initial Balance | Rp500,000       |
 * 
 * The application allows the user to:
 * - Deposit money
 * - Withdraw money
 * - Check the current balance
 * However, the balance must not be changed directly from outside the class.
 * 
 * Student Tasks:
 * Create: class DigitalWallet
 * Use:
 * - private balance: number;
 * 
 * The class should provide public methods:
 * - deposit(amount)
 * - withdraw(amount)
 * - getBalance()
 * - showWalletInfo()
 * 
 * Business Rules
 * deposit():
 * - Amount must be greater than 0.
 * 
 * withdraw():
 * - Amount must be greater than 0.
 * - Amount cannot exceed the current balance.
 */
class DigitalWallet {
    private balance: number;

    constructor(
        public walletId: string,
        public owner: string,
        initialBalance: number
    ) {
        this.balance = initialBalance >= 0 ? initialBalance : 0;
    }

    deposit(amount: number): void {
        if (amount <= 0) {
            console.log(`[Deposit Failed] Amount must be greater than Rp0.`);
            return;
        }
        this.balance += amount;
        console.log(`[Success] Deposited Rp${amount.toLocaleString('id-ID')}`);
    }

    withdraw(amount: number): void {
        if (amount <= 0) {
            console.log(`[Withdrawal Failed] Amount must be greater than Rp0.`);
            return;
        }
        if (amount > this.balance) {
            console.log(`[Withdrawal Failed] Insufficient balance. Current balance: Rp${this.balance.toLocaleString('id-ID')}`);
            return;
        }
        this.balance -= amount;
        console.log(`[Success] Withdrew Rp${amount.toLocaleString('id-ID')}`);
    }

    getBalance(): number {
        return this.balance;
    }

    showWalletInfo(): void {
        console.log("--------------------------------------------------");
        console.log(`Wallet ID : ${this.walletId}`);
        console.log(`Owner     : ${this.owner}`);
        console.log(`Balance   : Rp${this.balance.toLocaleString('id-ID')}`);
        console.log("--------------------------------------------------");
    }
}

const wallet = new DigitalWallet("WAL001", "Harry Maguire", 500000);
wallet.showWalletInfo();
wallet.deposit(200000);
wallet.withdraw(150000);
wallet.withdraw(1000000); 
wallet.deposit(-50000);   