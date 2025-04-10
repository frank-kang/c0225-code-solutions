import { useState } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';

export function StopWatch() {
  const [seconds, setSeconds] = useState();
  const [elapsedSeconds, setElapsedSeonds] = useState(0);

  function handlePlay() {
    setInterval();
  }

  return (
    <div className="stop-watch">
      <div className="watch-face">
        <span className="counter">{seconds}</span>
      </div>
      <div>
        <FaPause onClick={handlePlay} size="2rem" />
        <FaPlay size={'2rem'} />
      </div>
    </div>
  );
}
