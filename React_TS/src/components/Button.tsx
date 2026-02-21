/**
 * Button.tsx
 * 
 * TypeScript Concepts Covered:
 * 1. Interfaces for Props: Defining what props a component accepts.
 * 2. Optional Props: Using `?` to make a prop optional.
 * 3. Union Types: Restricting a prop to specific string values (e.g., 'primary' | 'secondary').
 * 4. Event Typing: Typing the `onClick` handler using `React.MouseEvent`.
 */

import React from 'react';

// Define the shape of the props this component expects
interface ButtonProps {
  label: string; // Required string
  color?: 'primary' | 'secondary' | 'danger'; // Optional union type
  disabled?: boolean; // Optional boolean
  // Typing a function prop that takes a MouseEvent and returns nothing (void)
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button = ({ label, color = 'primary', disabled = false, onClick }: ButtonProps) => {
  // Simple inline styles based on the color prop
  const getBackgroundColor = () => {
    if (color === 'primary') return 'blue';
    if (color === 'secondary') return 'gray';
    if (color === 'danger') return 'red';
    return 'blue';
  };

  return (
    <button 
      style={{ backgroundColor: getBackgroundColor(), color: 'white', padding: '10px', margin: '5px', border: 'none', borderRadius: '4px', cursor: disabled ? 'not-allowed' : 'pointer' }}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
