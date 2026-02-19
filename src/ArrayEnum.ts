/**
 * Array: "I have a list of many things."

Tuple: "I have a pair/triplet of data in a specific order."

Enum: "I only want to allow these 3 specific options."
 */


// 1. ENUM (The Allowed Choices)
// Instead of letting people type "Small" or "Sml", we give them 3 fixed buttons.
enum DrinkSize {
    Small,
    Medium,
    Large
}

// 2. TUPLE (The Fixed Pair)
// We want every order to look EXACTLY like this: [DrinkName, Price]
// The first must be a String, the second must be a Number.
let singleOrder: [string, number];

singleOrder = ["Cappuccino", 150]; // ✅ Valid
// singleOrder = [150, "Cappuccino"]; // ❌ Error: Order is swapped!


// 3. ARRAY (The List)
// We want a list of many DrinkNames (strings).
let ordersList: string[] = ["Latte", "Espresso", "Chai"];

ordersList.push("Mocha"); // ✅ Adds to the list


// --- PUTTING IT ALL TOGETHER ---

type FinalOrder = {
    item: [string, number]; // Tuple
    size: DrinkSize;        // Enum
};

const customerOrder: FinalOrder = {
    item: ["Masala Chai", 40],
    size: DrinkSize.Medium
};

console.log(`Order: ${customerOrder.item[0]}, Size: ${customerOrder.size}`);