//Annotation = Explicit (You "explain" it to TypeScript).

//Inference = Implicit (TypeScript "infers" or figures it out itself)


// 1. ANNOTATION (Explicit)
// You: "Hey TS, this variable 'name' MUST be a string."
let name: string = "Gemini"; 

// 2. INFERENCE (Automatic)
// TS: "I see you assigned 'Alice' to this variable, so I'll just assume it's a string."
let friend = "Alice"; 
let x=Math.random()>0.5 ? 10 : '5';
//when u hover x u will see let x: string | number ,automatic mention'

// 3. THE RESULT
// Because of Inference, TS still protects 'friend' just like 'name'.
// friend = 123; // ❌ TS says: "Wait, 'friend' is a string! You can't put a number here."



// --- 1. THE DEFINITION ---
// We are making a rule called "Animal". 
// We use the 'type' keyword to say: "Every Animal must have a name (string) and a noise (string)."
type Animal = {
  name: string;
  noise: string;
};

// --- 2. THE ANNOTATION (Explicit) ---
// We tell TS: "Hey, 'dog' MUST follow the 'Animal' rule."
const dog: Animal = {
  name: "Buddy",
  noise: "Woof"
};

// --- 3. THE REUSE ---
// Because we used 'type', we can reuse the same rule for 'cat'.
// If we forget 'noise', TS will complain immediately.
const cat: Animal = {
  name: "Whiskers",
  noise: "Meow"
};

// --- 4. THE UNION TYPE (The "OR" rule) ---
// You can also use 'type' to create a list of allowed words.
type DoorState = "Open" | "Closed";

let kitchenDoor: DoorState = "Open"; // ✅ Correct
// kitchenDoor = "Half-way";        // ❌ Error: Not in the allowed list!