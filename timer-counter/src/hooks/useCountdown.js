import { useState, useRef, useEffect } from "react";

const useCountdown = (initialSeconds = 0) => {
  const [totalSeconds, setTotalSeconds] = useState(initialSeconds);
  const [isRunning, setIsRunning] = useState(false);

  const intervalRef = useRef(null);

 const start = (seconds) => {
  if (seconds <= 0) return;

  setTotalSeconds(seconds);
  setIsRunning(true);

  intervalRef.current = setInterval(() => {
    setTotalSeconds((prev) => {
      if (prev <= 1) {
        clearInterval(intervalRef.current);
        setIsRunning(false);
        return 0;
      }
      return prev - 1;
    });
  }, 1000);
};

  const stop = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
  };

  const reset = (seconds = 0) => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setTotalSeconds(seconds);
  };

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  return {
    totalSeconds,
    setTotalSeconds,
    start,
    stop,
    reset,
    isRunning,
  };
};

export default useCountdown;