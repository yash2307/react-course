import { useState, useEffect, useRef } from 'react';

const useThrottle = (value, delay) => {
  const [throttledValue, setThrottledValue] = useState(value);
  
  const lastExecuted = useRef(0);
  const timerRef = useRef(null);

  useEffect(() => {
    const now = Date.now();
    const remaining = delay - (now - lastExecuted.current);

    if (remaining <= 0) {
      setThrottledValue(value);
      lastExecuted.current = now;
    } else {
      clearTimeout(timerRef.current);

      timerRef.current = setTimeout(() => {
        setThrottledValue(value);
        lastExecuted.current = Date.now();
      }, remaining);
    }

    return () => clearTimeout(timerRef.current);
  }, [value, delay]);

  return throttledValue;
}




// export function useThrottleFn(fn, delay = 500) {
//   const lastCall = useRef(0);
//   const timer = useRef(null);

//   return useCallback((...args) => {
//     const now = Date.now();

//     if (now - lastCall.current >= delay) {
//       lastCall.current = now;
//       fn(...args);
//     } else {
//       clearTimeout(timer.current);

//       timer.current = setTimeout(() => {
//         lastCall.current = Date.now();
//         fn(...args);
//       }, delay - (now - lastCall.current));
//     }
//   }, [fn, delay]);
// }
export default useThrottle;
