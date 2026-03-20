import { useState, useEffect } from 'react';
import './App.css';
import useDebounce from './hooks/useDebounce';

function App() {

const fruits = ["apple", "banana", "pinapple", "Ananas"]
const [input, setInput] = useState("");
const [results, setResults] = useState([])
 // 1️⃣ Debounce the input — wait 500ms after user stops typing
  const debouncedValue = useDebounce(input, 500);


  // 2️⃣ Fire API/search only when debounced value changes
  useEffect(() => {
    if (!debouncedValue.trim()) return;

    console.log("Searching for:", debouncedValue);

    const filtered = fruits.filter((item) => item.includes(debouncedValue));
    setResults(filtered)
    // Example:
    // fetch(`https://api.example.com/search?q=${debouncedValue}`)
    //   .then(res => res.json())
    //   .then(data => console.log(data));

  }, [debouncedValue]);
  return (
  <div>
    <h1>Search with Debounce</h1>

    <input type='text' value={input} onChange={(e)=> setInput(e.target.value)}/>
    <ul>
        {results.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  
    
    
  </div>
  )
}

export default App
