/**
 * 1. BASIC FUNCTION WITH ANNOTATIONS
 * Here, we explicitly define that 'name' is a string and the return value is a string.
 */
function greet(name: string): string {
  return `Hello, ${name}!`;
}

/**
 * 2. ARROW FUNCTIONS & INFERENCE
 * You can annotate arrow functions too. 
 * If you don't specify the return type, TS will 'infer' it based on the return statement.
 */
const add = (a: number, b: number): number => {
  return a + b;
};

/**
 * 3. OPTIONAL (?) AND DEFAULT PARAMETERS
 * - 'sugar' is optional. If not passed, it is 'undefined'.
 * - 'type' has a default value of "Masala".
 */
function makeChai(cups: number, sugar?: number, type: string = "Masala"): string {
  let message = `Making ${cups} cups of ${type} chai`;
  if (sugar) {
    message += ` with ${sugar} spoons of sugar.`;
  }
  return message;
}

// Valid calls:
makeChai(2);             // Uses default "Masala"
makeChai(1, 2, "Ginger"); // Overrides all

/**
 * 4. VOID TYPE
 * Used when a function performs an action but returns NO value (like a log).
 */
function logMessage(msg: string): void {
  console.log("LOG:", msg);
  // return "data"; // ❌ Error: Type 'string' is not assignable to type 'void'.
}

/**
 * 5. NEVER TYPE
 * Used for functions that never finish (e.g., throwing an error or infinite loops).
 */
function throwError(msg: string): never {
  throw new Error(msg);
}

/**
 * 6. FUNCTION TYPES AS BLUEPRINTS
 * You can define exactly what a function should look like using a 'type' or 'interface'.
 */
type MathOperation = (x: number, y: number) => number;

const multiply: MathOperation = (a, b) => a * b; // Types for 'a' and 'b' are inferred from MathOperation

/**
 * 7. OBJECTS AS PARAMETERS (Destructuring)
 * This is how you handle complex inputs efficiently.
 */
interface Order {
  id: number;
  amount: number;
}

function processOrder({ id, amount }: Order): void {
  console.log(`Processing order ${id} for $${amount}`);
}

// Calling the functions
console.log(greet("Gemini"));
console.log(add(10, 5));
processOrder({ id: 5001, amount: 150 });