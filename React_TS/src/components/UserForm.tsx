/**
 * UserForm.tsx
 * 
 * TypeScript Concepts Covered:
 * 1. Form Events: Typing `onSubmit` with `React.FormEvent`.
 * 2. Input Events: Typing `onChange` with `React.ChangeEvent`.
 * 3. Refs: Typing `useRef` with specific HTML elements (e.g., `HTMLInputElement`).
 */

import React, { useState, useRef } from 'react';

export const UserForm = () => {
  const [name, setName] = useState('');
  
  // Concept: Typing Refs
  // We specify that this ref will attach to an HTMLInputElement.
  // We initialize it with `null` because it won't be attached until the component mounts.
  const inputRef = useRef<HTMLInputElement>(null);

  // Concept: Typing Input Events
  // React.ChangeEvent is used for input, select, and textarea changes.
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  // Concept: Typing Form Events
  // React.FormEvent is used for form submissions.
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevents page reload
    alert(`Submitted Name: ${name}`);
    
    // Using the ref to clear the input visually and focus it
    if (inputRef.current) {
      inputRef.current.focus();
    }
    setName('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}>
      <h3>User Form</h3>
      <div style={{ marginBottom: '10px' }}>
        <label htmlFor="name">Name: </label>
        <input 
          id="name"
          type="text" 
          value={name} 
          onChange={handleChange} 
          ref={inputRef}
          placeholder="Enter your name"
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
