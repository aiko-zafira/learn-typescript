/**
 * Module 08: Generics & Type Utilities — Examples
 *
 * Run: npm run example src/08-generics/examples/generic-basics.ts
 */

// Generic function
function identity<T>(value: T): T {
  return value;
}

// Generic interface
interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

// Generic class
class Stack<T> {
  private items: T[] = [];

  push(item: T): void {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }

  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }
}

// Type utilities
type User = {
  id: number;
  name: string;
  email: string;
  password: string;
};

type PublicUser = Pick<User, "id" | "name" | "email">;
type PartialUser = Partial<User>;
type ReadonlyUser = Readonly<User>;

console.log("=== Generics ===");
console.log("identity<string>:", identity<string>("hello"));
console.log("identity<number>:", identity(42));

const response: ApiResponse<string[]> = {
  data: ["item1", "item2"],
  status: 200,
  message: "OK",
};
console.log("ApiResponse:", response);

const numberStack = new Stack<number>();
numberStack.push(1);
numberStack.push(2);
console.log("Stack peek:", numberStack.peek());
console.log("Stack pop:", numberStack.pop());

const publicUser: PublicUser = { id: 1, name: "Alice", email: "alice@example.com" };
console.log("\n=== Type Utilities ===");
console.log("PublicUser:", publicUser);
