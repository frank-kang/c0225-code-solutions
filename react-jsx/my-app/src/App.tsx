import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '../../../../../vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>React JSX</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Total button Clicks {count}
        </button>
        <p>
          javascript extension that allows developers to write code for dynamic
          DOM create what looks like html.
        </p>
      </div>
      <p className="read-the-docs">
        functions in react return jsx markup. react then converts the jsx into
        html and pushed it into the DOM.
      </p>
    </>
  );
}

export default App;
