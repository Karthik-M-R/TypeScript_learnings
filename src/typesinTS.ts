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