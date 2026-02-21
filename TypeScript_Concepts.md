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

---

## 11. TypeScript in React (Interview & Project Ready)
React projects heavily rely on specific TS patterns.

**Typing Props and Children:**
```tsx
import React, { ReactNode } from 'react';

// Define props interface
interface ButtonProps {
    label: string;
    onClick: () => void;
    isDisabled?: boolean; // Optional prop
    children?: ReactNode; // Best practice for typing children
}

// Avoid React.FC (Functional Component) in modern React, type props directly
const Button = ({ label, onClick, isDisabled = false, children }: ButtonProps) => {
    return (
        <button onClick={onClick} disabled={isDisabled}>
            {label}
            {children}
        </button>
    );
};
```

**Typing State and Events:**
```tsx
import { useState, ChangeEvent, FormEvent } from 'react';

interface User { name: string; age: number; }

const UserForm = () => {
    // Infer type for simple values, use generics for complex ones or null
    const [name, setName] = useState(""); 
    const [user, setUser] = useState<User | null>(null); 

    // Typing Event Handlers
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Submitted:", name);
    };

    return <form onSubmit={handleSubmit}><input onChange={handleChange} /></form>;
};
```

---

## 12. TypeScript in Node.js / Express
Typing backend requests and responses is crucial for robust APIs.

**Typing Request and Response:**
```typescript
import express, { Request, Response } from 'express';

const app = express();

// Typing Params, ResBody, ReqBody, ReqQuery
app.post('/users/:id', (req: Request<{ id: string }, {}, { name: string }, { filter: string }>, res: Response) => {
    const userId = req.params.id; // string
    const userName = req.body.name; // string
    const filter = req.query.filter; // string
    
    res.json({ success: true, id: userId });
});
```

**Extending the Express Request Object (Common Interview Question):**
How do you add a `user` object to the `req` after authentication?
```typescript
// Create a custom type declaration file (e.g., express.d.ts)
declare global {
    namespace Express {
        interface Request {
            user?: {
                id: string;
                role: string;
            };
        }
    }
}

// Now you can use req.user in your middleware/controllers
const authMiddleware = (req: Request, res: Response, next: Function) => {
    req.user = { id: "123", role: "admin" }; // No TS error!
    next();
};
```

---

## 13. Advanced Types (Interview Favorites)

**`keyof` and `typeof` Operators:**
```typescript
const config = { endpoint: "http://api", timeout: 3000 };
type ConfigType = typeof config; // Creates a type based on the object

interface User { name: string; age: number; }
type UserKeys = keyof User; // "name" | "age"

// Real-world use case: A function that only accepts valid keys of an object
function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}
```

**`as const` (Const Assertions) vs Enums:**
Interviews often ask why you might prefer `as const` over `enum`. Enums compile to actual JavaScript objects, which adds bundle size. `as const` is purely type-level and compiles away completely.
```typescript
// Instead of enum:
const Status = {
    PENDING: "PENDING",
    SUCCESS: "SUCCESS",
    FAILED: "FAILED"
} as const;

// Extracts the values ("PENDING" | "SUCCESS" | "FAILED")
type StatusType = typeof Status[keyof typeof Status]; 

function handleStatus(status: StatusType) { /* ... */ }
```

**Mapped Types:**
Creating new types by transforming existing ones.
```typescript
type Features = {
    darkMode: boolean;
    newUserProfile: boolean;
};

// Creates a new type where all properties of Features are optional and boolean
type FeatureFlags = {
    [Key in keyof Features]?: boolean;
};
```
