import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
const[length, setLength] = useState(8)
const[numberAllowed, setNumberAllowed] = useState(false)
const[passWord, setPassword] = useState('')


  return (
    <>
      <h1 className='bg-gray-100'> Setup Ready for Password Generator</h1>
    </>
  )
}

export default App
