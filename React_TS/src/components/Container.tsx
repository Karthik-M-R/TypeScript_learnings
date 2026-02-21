/**
 * Container.tsx
 * 
 * TypeScript Concepts Covered:
 * 1. React.ReactNode: The standard type for the `children` prop. It covers anything 
 *    that can be rendered in React (strings, numbers, JSX elements, arrays of these, etc.).
 */

import React from 'react';

interface ContainerProps {
  title: string;
  // Concept: Typing Children
  // ReactNode is the safest and most comprehensive type for children.
  // ReactNode allows anything: strings, JSX, numbers, etc.
  children: React.ReactNode; 
}

export const Container = ({ title, children }: ContainerProps) => {
  return (
    <div style={{ border: '2px dashed #007bff', padding: '20px', margin: '20px 0', borderRadius: '8px' }}>
      <h2 style={{ marginTop: 0 }}>{title}</h2>
      {/* Render whatever is passed inside the <Container> tags */}
      <div>{children}</div>
    </div>
  );
};
