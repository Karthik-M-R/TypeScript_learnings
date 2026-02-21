/**
 * Counter.tsx
 * 
 * TypeScript Concepts Covered:
 * 1. Typing State: Using Generics with `useState<T>` to explicitly define state type.
 * 2. Type Inference: Letting TypeScript guess the type when a default value is provided.
 */

import { useState } from 'react';

export const Counter = () => {
  // Concept: Type Inference
  // TypeScript automatically knows `count` is a number because we initialized it with 0.
  const [count, setCount] = useState(0);

  // Concept: Explicit State Typing (Generics)
  // We explicitly tell TypeScript this state can be a string OR null.
  // If we didn't provide `<string | null>`, TS would infer it as `null` and we couldn't set a string later.
  const [lastAction, setLastAction] = useState<string | null>(null);

  const increment = () => {
    setCount(prev => prev + 1);
    setLastAction('Incremented');
  };

  const decrement = () => {
    setCount(prev => prev - 1);
    setLastAction('Decremented');
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0', borderRadius: '4px' }}>
      <h3>Counter: {count}</h3>
      <p>Last Action: {lastAction ?? 'None'}</p>
      <button onClick={increment} style={{ marginRight: '5px' }}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
};
