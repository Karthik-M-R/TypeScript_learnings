/**
 * 
 *Think of Type Narrowing as a filter. 

In plain English: "If this variable is currently a string, 
do string things. If it's a number, do math things."
 */

function printId(id: string | number) {
  // At this point, 'id' could be a string OR a number.
  
  if (typeof id === "string") {
    // --- NARROWED TO STRING ---
    // Inside this block, TS knows for 100% certainty 'id' is a string.
    // You can use string methods like .toUpperCase()
    console.log("Your ID is: " + id.toUpperCase());
  } else {
    // --- NARROWED TO NUMBER ---
    // If it's NOT a string, it MUST be a number (the only other option).
    // You can do math here.
    console.log("Your ID plus one is: " + (id + 1));
  }
}

// Works for both!
printId("abc"); // Result: ABC
printId(100);   // Result: 101


// Why is this necessary?
// If you didn't have narrowing, TypeScript would stop you from doing this:

// TypeScript
// function shoutId(id: string | number) {
//   // ❌ ERROR: Property 'toUpperCase' does not exist on type 'number'.
//   // TS is worried: "What if the user passed in a number? Numbers can't shout!"
//   console.log(id.toUpperCase()); 
// }



//think of Type Guards as the "security check" that triggers Type Narrowing
//you use a guard to prove to TypeScript exactly what data you are holding at that moment.

// 1. THE TYPE KEYWORD (Creating our blueprints)
type User = { name: string; role: "admin" | "guest" };
type Guest = { name: string; anonymous: boolean };

// A Union Type: Can be a User OR a Guest
type Person = User | Guest;

// 2. THE TYPE GUARD (The "Security Check")
// This function "guards" the type. If it returns true, 
// TS knows for sure 'p' is a User.
function isAdmin(p: Person): p is User {
  return (p as User).role === "admin";
}

function handleLogin(person: Person) {
  // --- TYPE ANNOTATION (Explicit) ---
  // We tell TS exactly what 'status' should be.
  let status: string;

  // --- TYPE NARROWING using our Guard ---
  if (isAdmin(person)) {
    // Inside this block, TS has "narrowed" person to 'User'
    // because our isAdmin guard passed.
    status = `Welcome Admin ${person.name}`; 
  } else {
    // --- TYPE NARROWING using 'in' operator (Another Guard) ---
    // If 'anonymous' exists in the object, it must be a Guest.
    if ("anonymous" in person) {
      status = "Welcome, Guest!";
    } else {
      status = "Unknown Entity";
    }
  }

  // --- TYPE INFERENCE (Automatic) ---
  // We don't need to say ': string'. 
  // TS sees we are adding strings, so it "infers" 'logMsg' is a string.
  const logMsg = "System: " + status;
  console.log(logMsg);
}

// Testing it
handleLogin({ name: "Alice", role: "admin" });