/**
 * A school system needs to store information about people who are part of the school community. 
 * Every person has a name and age.
 * However, students and teachers have different additional information.
 * A student has:
 * - Student ID
 * - Grade
 * 
 * A teacher has:
 * - Employee ID
 * - Subject
 * 
 * Example:
 * Student
 * Name: Kylian Mbappé
 * Age: 17
 * Student ID: ST001
 * Grade: 11
 * 
 * Teacher:
 * Name: Cristiano Ronaldo
 * Age: 38
 * Employee ID: EMP001
 * Subject: Programming
 * 
 * Student Tasks
 * Create a parent class Person with:
 * - name
 * - age
 * - showInfo()
 * 
 * Then create class Student extends Person and class Teacher extends Person
 * Each child class should add its own properties.
 * 
 */
class Person {
    constructor(
        public name: string,
        public age: number
    ) { }

    showInfo(): void {
        console.log(`Name        : ${this.name}`);
        console.log(`Age         : ${this.age}`);
    }
}

class Student extends Person {
    constructor(
        name: string,
        age: number,
        public studentId: string,
        public grade: number
    ) {
        super(name, age);
    }

    showInfo(): void {
        console.log("--------------------------------------------------");
        super.showInfo();
        console.log(`Student ID  : ${this.studentId}`);
        console.log(`Grade       : ${this.grade}`);
        console.log("--------------------------------------------------");
    }
}

class Teacher extends Person {
    constructor(
        name: string,
        age: number,
        public employeeId: string,
        public subject: string
    ) {
        super(name, age);
    }

    showInfo(): void {
        console.log("--------------------------------------------------");
        super.showInfo();
        console.log(`Employee ID : ${this.employeeId}`);
        console.log(`Subject     : ${this.subject}`);
        console.log("--------------------------------------------------");
    }
}

const student = new Student("Kylian Mbappé", 17, "ST001", 11);
const teacher = new Teacher("Cristiano Ronaldo", 38, "EMP001", "Programming");
const people: Person[] = [student, teacher];
for (const person of people) {
    person.showInfo();
}