import { useState } from 'react'
import useThrottle from './hooks/useThrottle';
import './App.css'

function App() {
  
const [input, setInput] = useState("");
  const throttledInput = useThrottle(input, 500);

  return (
    <div>
      <input onChange={(e) => setInput(e.target.value)} />
      <p>Throttled Value: {throttledInput}</p>
    </div>
  );
}

export default App
