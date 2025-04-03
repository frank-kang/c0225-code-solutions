import { useState } from 'react';
import './index.css';

export function ToggleSwitch() {
  const [toggled, setToggled] = useState(false);

  return (
    <div
      className={`toggle-switch ${toggled ? 'in-on' : ''}`}
      onClick={() => setToggled(!toggled)}>
      <div className="slider">
        <div className="switch"></div>
      </div>
      <span className="state-label">{toggled ? 'On' : 'Off'}</span>
    </div>
  );
}
