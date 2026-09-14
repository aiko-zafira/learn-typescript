/**
 * An e-commerce company wants to manage product inventory.
 * Each product has:
 * - Product ID
 * - Product name
 * - Price
 * - Stock quantity
 * For example:
 * Product
 * - ID: PRD001
 * - Name: Gaming Laptop
 * - Price: Rp15,000,000
 * - Stock: 20
 * The company wants to make sure product data cannot be changed carelessly.
 * 
 * The system needs to support:
 * - Increasing stock
 * - Decreasing stock
 * - Changing price
 * - Checking stock availability
 * - Calculating inventory value
 * 
 * Student Tasks
 * - Create class Product
 * - Private Properties, at minimum:
 *   * private price: number;
 *   * private stock: number;
 * 
 * - Other properties can be public or private depending on the student's design.
 * - Required Methods
 *   * addStock(quantity)
 *   * removeStock(quantity)
 *   * changePrice(newPrice)
 *   * isAvailable()
 *   * getInventoryValue()
 *   * showProductInfo()
 * 
 * - Business Rules
 * addStock(): quantity must be greater than 0.
 * removeStock(): quantity must be greater than 0 and not greater than current stock
 * changePrice(): new price must be greater than 0.
 * isAvailable(): returns true when stock > 0, otherwise false
 * getInventoryValue(): calculate price × stock
 */
class Product {
    private price: number;
    private stock: number;

    constructor(
        public productId: string,
        public productName: string,
        initialPrice: number,
        initialStock: number
    ) {
        this.price = initialPrice > 0 ? initialPrice : 0;
        this.stock = initialStock >= 0 ? initialStock : 0;
    }

    addStock(quantity: number): void {
        if (quantity <= 0) {
            console.log(`[Add Stock Failed] Quantity must be greater than 0.`);
            return;
        }
        this.stock += quantity;
        console.log(`[Success] Added ${quantity} unit(s). Current stock: ${this.stock}`);
    }

    removeStock(quantity: number): void {
        if (quantity <= 0) {
            console.log(`[Remove Stock Failed] Quantity must be greater than 0.`);
            return;
        }
        if (quantity > this.stock) {
            console.log(`[Remove Stock Failed] Requested ${quantity} unit(s) exceeds available stock (${this.stock}).`);
            return;
        }
        this.stock -= quantity;
        console.log(`[Success] Removed ${quantity} unit(s). Current stock: ${this.stock}`);
    }

    changePrice(newPrice: number): void {
        if (newPrice <= 0) {
            console.log(`[Price Update Failed] Price must be greater than Rp0.`);
            return;
        }
        this.price = newPrice;
        console.log(`[Success] Price updated to Rp${this.price.toLocaleString('id-ID')}`);
    }

    isAvailable(): boolean {
        return this.stock > 0;
    }

    getInventoryValue(): number {
        return this.price * this.stock;
    }

    showProductInfo(): void {
        console.log("--------------------------------------------------");
        console.log(`Product ID      : ${this.productId}`);
        console.log(`Name            : ${this.productName}`);
        console.log(`Price           : Rp${this.price.toLocaleString('id-ID')}`);
        console.log(`Stock           : ${this.stock} unit(s)`);
        console.log(`Available       : ${this.isAvailable()}`);
        console.log(`Inventory Value : Rp${this.getInventoryValue().toLocaleString('id-ID')}`);
        console.log("--------------------------------------------------");
    }
}

const laptop = new Product("PRD001", "Gaming Laptop", 15000000, 20);

laptop.showProductInfo();
laptop.addStock(5);
laptop.removeStock(3);
laptop.changePrice(14500000);
laptop.addStock(-2);        
laptop.removeStock(50);     
laptop.changePrice(0);      
laptop.showProductInfo();