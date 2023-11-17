import React, { useState, useEffect } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [timer, setTimer] = useState(null);

  useEffect(() => {
    if (timer) {
      const intervalId = setInterval(() => {
        setCount(prevCount => prevCount + 1);
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [timer]);

  const handleStart = () => {
    if (!timer) {
      setTimer(true);
    }
  };

  const handleStop = () => {
    if (timer) {
      setTimer(null);
    }
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
};

export default Counter;
