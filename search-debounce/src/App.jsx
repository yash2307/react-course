import { useState, useEffect } from 'react';
import './App.css';
import useDebounce from './hooks/useDebounce';

function App() {
const [input, setInput] = useState("");


 // 1️⃣ Debounce the input — wait 500ms after user stops typing
  const debouncedValue = useDebounce(input, 500);


  // 2️⃣ Fire API/search only when debounced value changes
  useEffect(() => {
    if (!debouncedValue.trim()) return;

    console.log("Searching for:", debouncedValue);

    // Example:
    // fetch(`https://api.example.com/search?q=${debouncedValue}`)
    //   .then(res => res.json())
    //   .then(data => console.log(data));

  }, [debouncedValue]);
  return (
  <div>
    <h1>Search with Debounce</h1>

    <input type='text' value={input} onChange={(e)=> setInput(e.target.value)}/>
    
  </div>
  )
}

export default App
