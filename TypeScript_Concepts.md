# TypeScript: Essential Concepts for Interviews and Projects

## 1. TypeScript vs. JavaScript
TypeScript (TS) is a syntactic superset of JavaScript (JS) that adds **static typing**. 

| Feature | JavaScript | TypeScript |
| :--- | :--- | :--- |
| **Typing** | Dynamic (types checked at runtime) | Static (types checked at compile time) |
| **Compilation** | Interpreted directly by the browser/Node | Must be transpiled into JavaScript |
| **Error Catching**| Errors found during execution | Errors caught during development/compilation |
| **OOP Support** | Prototype-based, ES6 classes | Full OOP support (Interfaces, Access Modifiers, Generics) |

---

## 2. Basic Types
TypeScript supports all JS types and adds a few more.

```typescript
// Primitives
let isDone: boolean = false;
let age: number = 25;
let firstName: string = "John";

// Arrays
let numbers: number[] = [1, 2, 3];
let names: Array<string> = ["Alice", "Bob"]; // Generic array type

// Tuple (Fixed length and types)
let user: [number, string] = [1, "Steve"];

// Enum (Named constants)
enum Role { Admin = 1, User, Guest }
let myRole: Role = Role.Admin;

// Any (Disables type checking - avoid if possible)
let looseValue: any = 4;
looseValue = "Now I'm a string";

// Unknown (Safer than 'any', requires type checking before use)
let safeValue: unknown = "Hello";
if (typeof safeValue === "string") {
    console.log(safeValue.toUpperCase());
}

// Void (For functions that don't return a value)
function logMessage(msg: string): void {
    console.log(msg);
}

// Never (For functions that never return, e.g., throw errors or infinite loops)
function throwError(errorMsg: string): never {
    throw new Error(errorMsg);
}
```

---

## 3. Interfaces vs. Type Aliases
Both are used to define custom object shapes, but they have slight differences.

**Interface:** Best for defining object structures and class contracts. Supports *declaration merging* (can be reopened and extended).
```typescript
interface User {
    id: number;
    name: string;
    email?: string; // Optional property
}

interface Admin extends User {
    permissions: string[];
}
```

**Type Alias:** Best for unions, intersections, and primitives. Cannot be reopened.
```typescript
type ID = string | number; // Union type

type Point = {
    x: number;
    y: number;
};

type 3DPoint = Point & { z: number }; // Intersection type
```

---

## 4. Functions
You can type parameters and return values.

```typescript
// Regular function
function add(x: number, y: number): number {
    return x + y;
}

// Arrow function with optional parameter (?) and default parameter
const greet = (name: string, greeting: string = "Hello", age?: number): string => {
    return `${greeting}, ${name}`;
};
```

---

## 5. Union and Intersection Types
*   **Union (`|`)**: A value can be one of several types.
*   **Intersection (`&`)**: Combines multiple types into one.

```typescript
// Union
function printId(id: number | string) {
    console.log(`Your ID is: ${id}`);
}

// Intersection
interface BusinessPartner { name: string; credit: number; }
interface Identity { id: number; name: string; }

type Employee = BusinessPartner & Identity;
let emp: Employee = { id: 1, name: "John", credit: 500 };
```

---

## 6. Type Narrowing (Type Guards)
When using union types or `unknown`, you must "narrow" the type before performing operations.

```typescript
function process(value: string | number) {
    if (typeof value === "string") {
        // TS knows 'value' is a string here
        return value.toUpperCase();
    } else {
        // TS knows 'value' is a number here
        return value.toFixed(2);
    }
}
```

---

## 7. Generics
Generics allow you to create reusable components that work with a variety of types rather than a single one.

```typescript
// Generic Function
function identity<T>(arg: T): T {
    return arg;
}
let output1 = identity<string>("myString");
let output2 = identity<number>(100);

// Generic Interface
interface Box<T> {
    contents: T;
}
let stringBox: Box<string> = { contents: "Hello" };
```

---

## 8. Classes and Access Modifiers
TypeScript adds `public`, `private`, `protected`, and `readonly` to classes.

```typescript
class Person {
    public name: string;           // Accessible anywhere (default)
    private age: number;           // Accessible only within this class
    protected ssn: string;         // Accessible within this class and subclasses
    readonly birthDate: string;    // Cannot be changed after initialization

    constructor(name: string, age: number, ssn: string, birthDate: string) {
        this.name = name;
        this.age = age;
        this.ssn = ssn;
        this.birthDate = birthDate;
    }

    public getAge(): number {
        return this.age;
    }
}
```

---

## 9. Utility Types (Crucial for Interviews)
TypeScript provides built-in types to manipulate existing types.

```typescript
interface Todo {
    title: string;
    description: string;
    completed: boolean;
}

// Partial: Makes all properties optional
type PartialTodo = Partial<Todo>;

// Required: Makes all properties required
type RequiredTodo = Required<PartialTodo>;

// Readonly: Makes all properties read-only
type ReadonlyTodo = Readonly<Todo>;

// Pick: Selects specific properties
type TodoPreview = Pick<Todo, "title" | "completed">;

// Omit: Removes specific properties
type TodoInfo = Omit<Todo, "completed">;

// Record: Constructs an object type with specific keys and values
type RoleNames = "admin" | "user" | "guest";
const roles: Record<RoleNames, number> = {
    admin: 1,
    user: 2,
    guest: 3
};
```

---

## 10. Type Assertion (Casting)
Sometimes you know more about a value's type than TypeScript does.

```typescript
let someValue: unknown = "this is a string";

// Using 'as' syntax (Preferred in React/JSX)
let strLength: number = (someValue as string).length;

// Using angle-bracket syntax
let strLength2: number = (<string>someValue).length;
```
