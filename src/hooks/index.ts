import { useEffect, useRef } from 'react';

export const useInterval = (callback: () => void, delay: number | null) => {
	const savedCallback = useRef<(() => void) | null>(null);
    
    useEffect(() => {
    	savedCallback.current = callback;
    }, [callback]);
    
    useEffect(() => {
    	function tick() {
        if(savedCallback.current) savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
}

export const useEffectAfterMount = (func: () => void, deps:React.DependencyList) => {
  const didMount = useRef(false);
  useEffect(() => {
    if (didMount.current) func();
    else didMount.current = true;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...deps, func]);
};