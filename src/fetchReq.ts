/**
 * fetchReq.ts
 * 
 * This file demonstrates how to make HTTP requests using the native browser/Node.js `fetch` API.
 * 
 * TypeScript Concepts Used:
 * 1. Interfaces: Defining the shape of the expected data (`Todo`).
 * 2. Async/Await: Handling asynchronous operations natively.
 * 3. Type Annotations: Explicitly typing the parsed JSON data (`const data: Todo[]`).
 * 4. Error Handling: Using try/catch blocks and throwing custom errors.
 * 5. The 'any' type: Bypassing strict type checking in the catch block (`error: any`).
 */

// Interface defining the structure of a single Todo item
interface Todo{
    userId:number;
    id:number;
    title:string;
    completed:boolean;
}

// Async arrow function to fetch data
const fetchData=async ()=>{
    try{
        // Using the native fetch API
        const response = await fetch(
            'https://jsonplaceholder.typicode.com/todos'
        );
        
        if(!response.ok){
            // FIX: Removed the extra '}' typo at the end of the template literal
            throw new Error(`HTTP error ${response.status}`);
        }
        
        
        // We use a type annotation to tell TypeScript what shape the parsed JSON has
        const data: Todo[] = await response.json();
        
        // Log the first todo to verify it works
        console.log("First Todo from Fetch:", data[0]);
    } catch(error:any){
       
        console.error("Fetch failed:", error.message);
    }
}

// Execute the function
fetchData();


