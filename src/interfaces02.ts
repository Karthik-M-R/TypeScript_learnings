/**
 * 1. DECLARATION MERGING (Part 1)
 * We define the initial shape of a Tea Shop.
 */
interface TeaShop {
    name: string;
    location: string;
}

/**
 * 2. DECLARATION MERGING (Part 2)
 * We "re-open" the same interface to add more properties.
 * TypeScript automatically merges this with the first one.
 */
interface TeaShop {
    isOpen: boolean;
    // INDEX SIGNATURE:
    // This allows us to add any number of tea flavors dynamically.
    // Key (flavor) must be a string, Value (stock count) must be a number.
    [flavorName: string]: string | number | boolean; 
}

/**
 * 3. INTERFACE INHERITANCE (EXTENDING)
 * We create a specialized version of the TeaShop.
 */
interface PremiumTeaShop extends TeaShop {
    membershipClub: boolean;
}

/**
 * 4. IMPLEMENTATION (The Object)
 * Note how 'hiteshCafe' MUST fulfill all merged properties 
 * from both TeaShop declarations.
 */
const hiteshCafe: TeaShop = {
    name: "Chai aur Code Cafe",
    location: "Online/India",
    isOpen: true,
    
    // Properties allowed by the Index Signature:
    "MasalaChai": 100,      // Dynamic key: number value
    "GingerTea": 50,        // Dynamic key: number value
    "Specialty": "Ginger",  // Dynamic key: string value
};

/**
 * 5. DATA ACCESS
 * Index signatures allow us to access keys even if 
 * they weren't explicitly named in the interface.
 */
const flavor = "MasalaChai";
console.log(`Stock for ${flavor}: ${hiteshCafe[flavor]}`);


/**
 * 6. COMPLEX EXAMPLE: INTERFACE WITH METHOD
 * Combining everything into a final premium version.
 */
const premiumBranch: PremiumTeaShop = {
    name: "Gold Leaf Branch",
    location: "Bengaluru",
    isOpen: true,
    membershipClub: true, // Required by PremiumTeaShop
    "GoldenPekoe": 200     // Allowed by Index Signature
};

console.log(hiteshCafe);
console.log(premiumBranch);