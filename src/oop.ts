class BankAccount {
    public accountHolder: string; // Anyone can see the name
    private _balance: number;      // ONLY this class can see/touch this
    protected accountType: string = "Savings"; // Only this class and its children

    constructor(name: string, initialDeposit: number) {
        this.accountHolder = name;
        this._balance = initialDeposit;
    }

    // --- GETTER ---
    // Allows us to read the private _balance safely.
    get balance(): number {
        console.log("Checking balance...");
        return this._balance;
    }

    // --- SETTER ---
    // Allows us to update the private _balance with validation logic.
    set balance(newAmount: number) {
        if (newAmount < 0) {
            console.log("Error: Balance cannot be negative!");
            return;
        }
        console.log("Updating balance...");
        this._balance = newAmount;
    }

    // A private method: Only for internal calculations
    private calculateInterest(): number {
        return this._balance * 0.05;
    }
}

// --- Using the Class ---
const myAccount = new BankAccount("Hitesh", 1000);

console.log(myAccount.accountHolder); // ✅ Works (public)
// console.log(myAccount._balance);   // ❌ Error (private)

// Accessing the GETTER (Looks like a property, but runs the function)
console.log(myAccount.balance); 

// Accessing the SETTER
myAccount.balance = 2000;  // ✅ Works (updates to 2000)
myAccount.balance = -50;   // ❌ Prints error message (validation logic caught it)


//Abstract class
/**
 * An Abstract class is a base class that cannot be instantiated (you can't do new MyClass()).
 *  It acts as a strict template for other classes. It forces child classes to implement specific logic.

Abstract Method: Defined in the parent, but written in the child.

Normal Method: Can be defined in the parent and used as-is by the child.
 */
// 1. ABSTRACT CLASS: You can't create an object of 'TeaRecipe' directly
abstract class TeaRecipe {
    constructor(public name: string) {}

    // 2. ABSTRACT METHOD: Every tea MUST have a 'brew' method, but the logic varies
    abstract brew(): void;

    // 3. REGULAR METHOD: Shared logic for all teas
    pourInCup(): void {
        console.log(`Pouring ${this.name} into the cup...`);
    }
}

class MasalaChai extends TeaRecipe {
    brew(): void {
        // We write the specific logic for Masala Chai here
        console.log("Boiling water with milk, tea leaves, and spices.");
    }
}

const myChai = new MasalaChai("Hitesh's Special");
myChai.brew();      // Specific logic
myChai.pourInCup(); // Shared logic


//static 
/**
 * The Static keyword makes a property or method belong to the Class itself, not to the individual objects. 
 * It is used for data or functions that should be the same for every instance.
 * Access them using: ClassName.member (not this.member).

 */

class Cafe {
    // 1. STATIC PROPERTY: Shared by all cafe branches
    static cafeName: string = "Chai aur Code Cafe";
    static totalOrders: number = 0;

    constructor(public branchLocation: string) {}

    placeOrder() {
        Cafe.totalOrders++; // Update the global count
        console.log(`Order placed at ${this.branchLocation}`);
    }

    // 2. STATIC METHOD: A utility function related to the class
    static getWelcomeMessage() {
        return `Welcome to ${Cafe.cafeName}!`;
    }
}

const branch1 = new Cafe("Delhi");
const branch2 = new Cafe("Bangalore");

branch1.placeOrder();
branch2.placeOrder();

console.log(Cafe.totalOrders); // Output: 2 (Shared count)
console.log(Cafe.getWelcomeMessage()); // Class-level utility


//composition 
/**
 * Composition is the practice of building a class by combining other classes. 
 * Instead of a class "being" something (Inheritance), it "has" something.

Inheritance: A Truck is a Vehicle.

Composition: A Truck has a Motor and has a GPS.
 */
class Grinder {
    grind() {
        console.log("Grinding spices and tea leaves...");
    }
}

class Boiler {
    boil() {
        console.log("Boiling water...");
    }
}

class TeaMaker {
    // COMPOSITION: TeaMaker "has a" Grinder and a Boiler
    private grinder = new Grinder();
    private boiler = new Boiler();

    makeTea() {
        this.grinder.grind();
        this.boiler.boil();
        console.log("Tea is ready!");
    }
}

const machine = new TeaMaker();
machine.makeTea(); 