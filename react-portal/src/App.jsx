import { useState } from 'react'
import Modal from './components/modal';
import './App.css'

function App() {

const [openModal, setOpenModal] = useState(false);
  return (
    <div className="App">
      <h1>  
        Hey click on the button to open the modal
      </h1>
      <button onClick={()=> setOpenModal(true)}>Open Modal</button>

      {openModal && <Modal closeModal={setOpenModal}/>}
    </div>
  )
}

export default App
