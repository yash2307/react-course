// Implement a simple Counter
/**
 * Interview twist: optimize re-renders & handle stale state updates Key concepts: useCallback, 
 * batching, and safe updates
 */
import { useState, useCallback } from 'react'

import './App.css'

function App() {

 const [counter, setCounter] = useState(15);

  // const addValue = () => {
  //   setCounter(counter + 1);
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
    setCounter(prev => prev + 1);
  }, []);

  const removeValue = useCallback(() => {
    setCounter(prev => prev - 1);
  }, []);

  const reset = () => {
    setCounter(0);
  }

  return (
    <>
     <h1>React Course </h1>
     <h2>Counter {counter}</h2>
     <button onClick={addValue}>Increase Value</button> {" "}
     <button onClick={removeValue}>Decrease Value</button>
     <button onClick={reset}>Reset</button>

    </>
  )
}

export default App
