import { useState, useEffect, useReducer } from 'react';

export const useTimer = (initialTime) => {
  const [time, setTime] = useState(initialTime);
  const [timer, setTimer] = useState(null);
  const [isWork, setWork] = useReducer((v) => !v, false);

  useEffect(() => {
    if(isWork) {
      setTimer(setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000));
    }
    return () => clearInterval(timer);
  }, [isWork]);

  return { time, setWork };
}