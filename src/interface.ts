// 1. Defining the Contract (Interface)
interface Car {
  readonly brand: string; // 'readonly' means it cannot be changed after it's set
  model: string;
  year?: number;          // The '?' means this property is OPTIONAL
}

// 2. Using the Interface
const myCar: Car = {
  brand: "Tesla",
  model: "Model 3"
  // 'year' is missing, but that's okay because it's optional (?)
};

// --- READONLY CHECK ---
// myCar.brand = "Ford"; // ❌ Error: Cannot assign to 'brand' because it is a read-only property.

myCar.model = "Model S"; // ✅ This is fine!




// --- THE "BLUEPRINT" (What a class CAN do) ---
type UserShape = {
  username: string;
  login(): void;
};

// --- THE "CHOICE" (What a class CANNOT do) ---
type UserRole = "admin" | "staff"; 


// 1. SUCCESS: The class follows the object blueprint
// This works because 'UserShape' is a consistent structure.
class Member implements UserShape {
  username: string;

  constructor(name: string) {
    this.username = name;
  }

  login() {
    console.log(`${this.username} logged in.`);
  }
}


// 2. FAIL: The class tries to implement a "Choice"
// ❌ ERROR: A class can only implement an object type. 
// It doesn't know how to "be" the string 'admin' or 'staff'.
/*
class Account implements UserRole { 
   // This code will not compile!
}
*/


// 3. THE HYBRID (The Best Practice)
// Use the 'type' for the choice, and 'interface' for the class blueprint.
interface EmployeeAccount extends UserShape {
  role: UserRole; // Using the choice inside the blueprint
}

class StaffMember implements EmployeeAccount {
  username: string;
  role: UserRole; // Must be "admin" or "staff"

  constructor(name: string, role: UserRole) {
    this.username = name;
    this.role = role;
  }

  login() {
    console.log(`${this.username} logged in as ${this.role}`);
  }
}

// Testing the working code
const worker = new StaffMember("Leo", "admin");
worker.login(); // Output: Leo logged in as admin