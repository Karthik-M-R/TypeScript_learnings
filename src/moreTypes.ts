//Think of a Type Assertion as you telling the TypeScript compiler: 
// "Trust me, I know what I'm doing."

// TS thinks 'myInput' is just a generic 'Element'
// Generic elements don't have a '.value' property!
const myInput = document.getElementById("user-email");

// ❌ ERROR: Property 'value' does not exist on type 'Element'.
// console.log(myInput.value); 

// ✅ SOLUTION: Assert that it is an HTMLInputElement
const emailInput = document.getElementById("user-email") as HTMLInputElement;

// Now TS lets you access .value because you "asserted" the type.
console.log(emailInput.value);


//Double assertion


let x = "hello";

// ❌ Error: Neither type 'string' nor 'number' sufficiently overlap
// let y = x as number; 

// ✅ The "Double Assertion" (Use this very rarely!)
let y = (x as unknown) as number;


// --- ANY (The Wild West) ---
let data: any = "Hello";

// ❌ NO ERRORS from TypeScript (even though this will crash at runtime)
data.push(1);       // .push is for arrays, not strings!
data.toFixed(2);    // .toFixed is for numbers!
const result = data * 10; // "Hello" * 10 is NaN!

// TS just says: "Sure, go ahead. It's an 'any', so I'm not watching."





// --- UNKNOWN (The Locked Vault) ---
let input: unknown = "Hello";

// ❌ ERROR: TypeScript stops you immediately
// input.toUpperCase(); // Error: 'input' is of type 'unknown'.

// ✅ SOLUTION: Use a Type Guard to narrow it
if (typeof input === "string") {
    // Inside this block, it's safe!
    console.log(input.toUpperCase()); 
}
