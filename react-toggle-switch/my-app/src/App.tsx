import { useState } from 'react';
import { ToggleSwitch } from './ToggleSwitch';
import './App.css';

function App() {
  const [status, setStatus] = useState(0);

  return <ToggleSwitch />;
}

export default App;
