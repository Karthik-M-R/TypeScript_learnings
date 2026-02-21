import React from 'react';
import { Button } from './components/Button';
import { Counter } from './components/Counter';
import { UserForm } from './components/UserForm';
import { Container } from './components/Container';
import './App.css';

function App() {
  // Concept: Typing Event Handlers
  // We explicitly type the event parameter so TypeScript knows what properties are available (e.g., e.clientX)
  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log('Button clicked at coordinates:', e.clientX, e.clientY);
    alert('Button was clicked!');
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', textAlign: 'left' }}>
      <h1>React + TypeScript Basics</h1>
      
      <Container title="1. Props & Events (Button)">
        <Button label="Primary Button" onClick={handleButtonClick} />
        <Button label="Danger Button" color="danger" onClick={handleButtonClick} />
        <Button label="Disabled Button" disabled onClick={handleButtonClick} />
      </Container>

      <Container title="2. State & Generics (Counter)">
        <Counter />
      </Container>

      <Container title="3. Forms, Events & Refs (UserForm)">
        <UserForm />
      </Container>
    </div>
  );
}

export default App;
