import { useState } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';

export function StopWatch() {
  const [seconds, setSeconds] = useState();

  return (
    <div className="stop-watch">
      <div className="watch-face">
        <span className="counter">0</span>
      </div>
      <FaPause size="2rem" className="start-stop" />
    </div>
  );
}
