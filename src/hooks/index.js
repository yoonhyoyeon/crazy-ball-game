import { useEffect, useRef } from 'react';

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

export const useDidMountEffect = (func, deps) => {
  const didMount = useRef(false);
  useEffect(() => {
    if (didMount.current) func();
    else didMount.current = true;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...deps, func]);
};