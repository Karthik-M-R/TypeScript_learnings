/**
 * webReq.ts
 * 
 * This file demonstrates how to make HTTP requests using the popular third-party library 'axios'.
 * 
 * TypeScript Concepts Used:
 * 1. External Module Imports: Importing 'axios' and its types.
 * 2. Type-Only Imports: `import type { AxiosResponse }` ensures types are removed during compilation.
 * 3. Interfaces: Defining the shape of the expected data (`Todo`).
 * 4. Generics: Using `AxiosResponse<T>` to strongly type the response data.
 * 5. Async/Await & Promises: Handling asynchronous operations.
 */

import axios from 'axios';
import type {AxiosResponse} from "axios";

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
        // FIX: The endpoint '/todos' returns an array of Todos, so we use AxiosResponse<Todo[]>
        // Generics (<Todo[]>) tell TypeScript exactly what shape `response.data` will have.
        const response :AxiosResponse<Todo[]>= await axios.get(
            'https://jsonplaceholder.typicode.com/todos'
        );
        
        // Log the first todo to verify it works
        console.log("First Todo from Axios:", response.data[0]);
    } catch(error){
        console.error("Error fetching data:", error);
    }
}

// Execute the function
fetchData();

// Demonstrating a standard Promise chain (.then) instead of async/await
axios.get('https://google.com').then(response =>{
    console.log("Google response status:", response.status);
})