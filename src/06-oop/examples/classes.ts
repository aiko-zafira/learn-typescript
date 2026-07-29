/**
 * Module 06: OOP — Examples
 *
 * Run: npm run example src/06-oop/examples/classes.ts
 */

// Interface — defines the shape of an object
interface Person {
  name: string;
  age: number;
  greet(): string;
}

// Class implementing an interface
class Student implements Person {
  name: string;
  age: number;
  private studentId: string;

  constructor(name: string, age: number, studentId: string) {
    this.name = name;
    this.age = age;
    this.studentId = studentId;
  }

  greet(): string {
    return `Hi, I'm ${this.name}, age ${this.age}.`;
  }

  getId(): string {
    return this.studentId;
  }
}

// Inheritance
class GraduateStudent extends Student {
  thesisTopic: string;

  constructor(name: string, age: number, studentId: string, thesisTopic: string) {
    super(name, age, studentId);
    this.thesisTopic = thesisTopic;
  }

  greet(): string {
    return `${super.greet()} My thesis is about ${this.thesisTopic}.`;
  }
}

// Abstract class
abstract class Shape {
  abstract area(): number;

  describe(): string {
    return `This shape has an area of ${this.area()}.`;
  }
}

class Rectangle extends Shape {
  constructor(private width: number, private height: number) {
    super();
  }

  area(): number {
    return this.width * this.height;
  }
}

// Usage
console.log("=== OOP ===");
const alice = new Student("Alice", 20, "S001");
console.log(alice.greet());
console.log("Student ID:", alice.getId());

const bob = new GraduateStudent("Bob", 25, "G001", "Machine Learning");
console.log(bob.greet());

const rect = new Rectangle(5, 3);
console.log(rect.describe());
