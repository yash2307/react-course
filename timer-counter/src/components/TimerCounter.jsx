import { useState, useEffect } from "react";
import useCountdown from "../hooks/useCountdown";
import { convertToHMS, convertToSeconds, formatTime } from "../utils/timeUtils";

const TimerCounter = () => {
  const [h, setH] = useState("");
  const [m, setM] = useState("");
  const [s, setS] = useState("");

  const {
    totalSeconds,
    start,
    stop,
    reset,
    isRunning,
  } = useCountdown();

  const { hours, minutes, seconds } = convertToHMS(totalSeconds);

  // Sync inputs when timer is running
  useEffect(() => {
    if (isRunning) {
      setH(hours);
      setM(minutes);
      setS(seconds);
    }
  }, [hours, minutes, seconds, isRunning]);

const handleStart = () => {
  const total = convertToSeconds(h, m, s);
  start(total);
};

  const handleReset = () => {
    setH("");
    setM("");
    setS("");
    reset();
  };

  return (
    <div className="container">
      <h2>Timer Counter</h2>

      <div>
        <input
          type="number"
          placeholder="HH"
          value={isRunning ? formatTime(h) : h}
          disabled={isRunning}
          onChange={(e) => setH(e.target.value)}
        />

        <input
          type="number"
          placeholder="MM"
          value={isRunning ? formatTime(m) : m}
          disabled={isRunning}
          onChange={(e) => setM(e.target.value)}
        />

        <input
          type="number"
          placeholder="SS"
          value={isRunning ? formatTime(s) : s}
          disabled={isRunning}
          onChange={(e) => setS(e.target.value)}
        />
      </div>

      <div>
        {!isRunning && <button onClick={handleStart}>Start</button>}

        {isRunning && <button onClick={stop}>Stop</button>}

        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default TimerCounter;