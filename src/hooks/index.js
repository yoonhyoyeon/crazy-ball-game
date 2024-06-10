import { useState, useEffect, useReducer, useRef } from 'react';

export const useTimer = (initialTime) => {
  const [time, setTime] = useState(initialTime);
  const timer = useRef(null);
  const [isWork, setWork] = useReducer((v) => !v, false);

  useEffect(() => {
    if(isWork) {
      timer.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    return () => clearInterval(timer.current);
  }, [isWork]);

  return { time, setWork };
}

export const useInterval = (callback, delay) => {
	const savedCallback = useRef();
    
    useEffect(() => {
    	savedCallback.current = callback;
    }, [callback]);
    
    useEffect(() => {
    	function tick() {
        	savedCallback.current();
        }
        if (delay !== null) {
        	let id = setInterval(tick, delay);
          return () => clearInterval(id);
        }
    }, [delay]);
}