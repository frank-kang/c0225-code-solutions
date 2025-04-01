import { useState } from 'react';
import './App.css';
import { RegistrationFormUncontrolled } from './RegistrationFormUncontrolled';
import { RegistrationFormControlled } from './RegistrationFormControlled';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <RegistrationFormUncontrolled />
      <RegistrationFormControlled />
    </div>
  );
}

export default App;
