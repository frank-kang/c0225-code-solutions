import { useState } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';

export function StopWatch() {
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout>();

  function handlePlay() {
    const intervalId = setInterval(() => {
      setElapsedSeconds((prev: number) => prev + 1);
    }, 1000);
    setIntervalId(intervalId);
  }

  const isPlaying = intervalId;

  function handlePause() {
    clearInterval(intervalId);
    setIntervalId(undefined);
  }

  function handleReset() {
    if (!intervalId) {
      setElapsedSeconds(0);
    }
  }

  return (
    <div className="stop-watch">
      <div className="watch-face" onClick={handleReset}>
        <span className="counter">{elapsedSeconds}</span>
      </div>
      <div>
        {isPlaying ? (
          <FaPause onClick={handlePause} size="2rem" />
        ) : (
          <FaPlay onClick={handlePlay} size={'2rem'} />
        )}
      </div>
    </div>
  );
}
