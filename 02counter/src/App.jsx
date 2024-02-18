import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let counter = 15

  const addValue = () => {
    counter = counter + 1
    console.log(counter)
  }

  return (
    <>
     <h1>React Course </h1>
     <h2>Counter {counter}</h2>
     <button onClick={addValue}>Add Value</button> {" "}
     <button>Remove Value</button>
     <p>footer: {counter}</p>

    </>
  )
}

export default App
