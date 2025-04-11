import { useState } from 'react';
import './App.css';
import { RotatingBanner } from './RotatingBanner';

const items = [
  'Aardvark',
  'Bengal',
  'Caterpillar',
  'Dromedary',
  'Elephant',
  'Ferret',
];

export function App() {
  return (
    <>
      <div className="App">
        <RotatingBanner items={items} />
      </div>
    </>
  );
}
