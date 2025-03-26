import { useState } from 'react';
import { Button } from './Button';
import './App.css';

export function App() {
  let [count, setCount] = useState(0);

  let color = '';
  if (count <= 3) {
    color = 'purple';
  } else if (count <= 6) {
    color = 'light-purple';
  } else if (count <= 9) {
    color = 'pink';
  } else if (count <= 12) {
    color = 'light-brown';
  } else if (count <= 15) {
    color = 'yellow';
  } else if (count <= 18) {
    color = 'white';
  } else {
    setCount((count = 0));
  }

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <>
      <Button label="Hot Button" className={color} onClick={handleClick} />
    </>
  );
}
