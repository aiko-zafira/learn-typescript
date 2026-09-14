/**
 * A company wants to create an employee salary management system.
 * Each employee has:
 * - Employee ID
 * - Name
 * - Position
 * - Basic salary
 * - Performance bonus
 * 
 * for example:
 * | Property     | Value            |
 * | ------------ | ---------------- |
 * | Employee ID  | EMP001           |
 * | Name         | Kevin De Bruyne  |
 * | Position     | Senior Developer |
 * | Basic Salary | Rp12,000,000     |
 * | Bonus        | Rp2,000,000      |
 * 
 * The company does not want employees or other parts of the application to directly modify their salary.
 * Student Tasks
 * - Create class Employee
 * - Use private properties for sensitive data such as:
 *   * private basicSalary: number;
 *   * private bonus: number;
 * - Create methods:
 *   * getBasicSalary()
 *   * setBasicSalary()
 *   * addBonus()
 *   * getTotalSalary()
 *   * showProfile()
 * - Business Rules
 *   * setBasicSalary():
 *     - Salary cannot be negative.
 *     - Salary must be greater than 0.
 *   * addBonus():
 *     - Bonus cannot be negative.
 *   * getTotalSalary():
 *     - basicSalary + bonus
 * - Implement class with object
 */
class Employee {
    private basicSalary: number;
    private bonus: number;

    constructor(
        public employeeId: string,
        public name: string,
        public position: string,
        initialBasicSalary: number
    ) {
        this.basicSalary = initialBasicSalary > 0 ? initialBasicSalary : 0;
        this.bonus = 0;
    }

    getBasicSalary(): number {
        return this.basicSalary;
    }

    setBasicSalary(newSalary: number): void {
        if (newSalary <= 0) {
            console.log(`[Update Failed] Basic salary must be greater than Rp0.`);
            return;
        }
        this.basicSalary = newSalary;
        console.log(`[Success] Basic salary updated to Rp${newSalary.toLocaleString('id-ID')}`);
    }

    addBonus(amount: number): void {
        if (amount < 0) {
            console.log(`[Bonus Failed] Bonus cannot be negative.`);
            return;
        }
        this.bonus += amount;
        console.log(`[Success] Added bonus of Rp${amount.toLocaleString('id-ID')}`);
    }

    getTotalSalary(): number {
        return this.basicSalary + this.bonus;
    }

    showProfile(): void {
        console.log("--------------------------------------------------");
        console.log(`Employee ID  : ${this.employeeId}`);
        console.log(`Name         : ${this.name}`);
        console.log(`Position     : ${this.position}`);
        console.log(`Basic Salary : Rp${this.basicSalary.toLocaleString('id-ID')}`);
        console.log(`Bonus        : Rp${this.bonus.toLocaleString('id-ID')}`);
        console.log(`Total Salary : Rp${this.getTotalSalary().toLocaleString('id-ID')}`);
        console.log("--------------------------------------------------");
    }
}

const employee = new Employee(
    "EMP001",
    "Kevin De Bruyne",
    "Senior Developer",
    12000000
);

employee.addBonus(2000000);
employee.showProfile();
employee.setBasicSalary(-5000000); 
employee.addBonus(-1000000);       
employee.setBasicSalary(15000000);
employee.showProfile();