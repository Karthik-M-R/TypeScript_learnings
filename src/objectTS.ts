/** * 1. THE BASE TYPE
 * We define the "source of truth" for what a Tea object looks like.
 */
type Tea = {
  id: number;
  name: string;
  price: number;
  isHot: boolean;
  sugar?: number; // The '?' means this is OPTIONAL (can be undefined)
};

/**
 * 2. PARTIAL<Type> 
 * Makes all properties optional.
 * Use Case: An "Update" function where you only want to change one field.
 */
type UpdateTea = Partial<Tea>;

const updatePrice: UpdateTea = {
  price: 35 // This is valid because everything else is now optional (?)
};


/**
 * 3. REQUIRED<Type> 
 * Makes all properties mandatory, even the optional ones.
 * Use Case: Validating that a form is 100% complete before submission.
 */
type StrictTea = Required<Tea>;

const fullOrder: StrictTea = {
  id: 101,
  name: "Cardamom Chai",
  price: 20,
  isHot: true,
  sugar: 2 // 'sugar' is no longer optional; it MUST be here.
};


/**
 * 4. PICK<Type, Keys> 
 * Creates a type by selecting only the specified keys.
 * Use Case: Showing a simplified list of items on a menu.
 */
type TeaSummary = Pick<Tea, "name" | "price">;

const menuDisplay: TeaSummary = {
  name: "Green Tea",
  price: 15
  // id, isHot, and sugar are NOT allowed here.
};


/**
 * 5. OMIT<Type, Keys> 
 * Creates a type by removing specific keys and keeping the rest.
 * Use Case: Sending data to a user but hiding sensitive internal IDs.
 */
type PublicTea = Omit<Tea, "id">;

const sharedInfo: PublicTea = {
  name: "Ginger Tea",
  price: 25,
  isHot: true,
  sugar: 1
  // 'id' is NOT allowed here.
};

// --- SUMMARY LOGIC ---
console.log("TypeScript ensures that these variables strictly follow the rules of their utility types!");