/**
 * 1. THE PROBLEM: Why do we need Generics?
 * If we use 'any', we lose type safety. 
 * If we use 'number', we can't use 'string'.
 */
function identityAny(val: any): any {
    return val; // We don't know what comes out.
}

/**
 * 2. THE SOLUTION: Generics (<T>)
 * The <T> is a placeholder. It "locks" the type. 
 * If you pass a string, T becomes 'string' for the whole function.
 */
function identity<T>(val: T): T {
    return val; 
}

// Usage:
const num = identity<number>(100); // T is now 'number'
const str = identity<string>("Hitesh"); // T is now 'string'


/**
 * 3. GENERICS WITH ARRAYS
 * You can use Generics to ensure an array contains a specific type.
 */
function getFirstItem<T>(list: T[]): T | undefined{
    return list[0];
}

const firstHero = getFirstItem(["Ironman", "Thor"]); // Returns a string
const firstScore = getFirstItem([10, 20, 30]);      // Returns a number


/**
 * 4. GENERIC INTERFACES
 * Interfaces can also be flexible using placeholders.
 */
interface Bottle<T> {
    brand: string;
    content: T; // The content could be anything (water, juice, soda)
}

const waterBottle: Bottle<string> = { brand: "Bisleri", content: "Water" };
const litersBottle: Bottle<number> = { brand: "Milton", content: 2 };


/**
 * 5. GENERIC CONSTRAINTS (extends)
 * Sometimes you want a generic, but you want to limit it.
 * Here, T must at least be an object with a 'length' property.
 */
function getLength<T extends { length: number }>(item: T): number {
    return item.length;
}

getLength("Hitesh"); // ✅ Valid (strings have length)
getLength([1, 2]);   // ✅ Valid (arrays have length)
// getLength(100);   // ❌ Error (numbers don't have length)