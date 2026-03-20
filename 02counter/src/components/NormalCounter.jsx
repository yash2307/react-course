// Implement a simple Counter
/**
 * Interview twist: optimize re-renders & handle stale state updates Key concepts: useCallback, 
 * batching, and safe updates
 */


import { useState, useCallback } from "react";
import usePrevious from "../hooks/usePrevious";
const NormalCounter = () => {

     const [currentCount, setCurrentCount] = useState(0);
      const previousCount = usePrevious(currentCount);

  // const addValue = () => {
  //   setCounter(counter + 1);
   //setCounter(counter + 1);
      //setCounter(counter + 1);
         //setCounter(counter + 1);
  // }

  // const removeValue = () => {
  //   setCounter(counter - 1);
  // }
  /**
   * Here, counter is whatever the value was when the function was created, not necessarily the latest value at update time.

    So if React batches updates, or if multiple updates run very fast, they may ALL use the same old value, causing incorrect results.
   */

   // Safe functional updates → avoids stale state issues
  const addValue = useCallback(() => {
    setCurrentCount(prev => prev + 1);
  }, []);

  const removeValue = useCallback(() => {
    setCurrentCount(prev => prev - 1);
  }, []);

  const reset = () => {
    setCurrentCount(0);
  }

  return (
    <>
      <div>
        <h2>Current Count: {currentCount}</h2>
        <h2>Previous Count: {previousCount}</h2>
      </div>

    
     <button onClick={addValue}>Increase Value</button> {" "}
     <button onClick={removeValue}>Decrease Value</button>
     <button onClick={reset}>Reset</button>

    </>
  )
}  

export default NormalCounter;
