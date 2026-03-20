import { useState } from 'react'

import './App.css'

function App() {
  const [input, setInput] = useState();
  const [todoList, setTodoList] = useState([]);

  const addItems = () => {
    if (!input.trim()) return;

    const item = {
      id: todoList.length + 1,
      text: input,
      completed: false
    }

    setTodoList([...todoList, item]);
    setInput("");
  }

  const removeItem = (id) => {
    setTodoList(todoList.filter((item) => item.id !== id));
  }

  const toggleCheckBox = (id) => {
    setTodoList(
      todoList.map(t => {
        if (t.id == id) {
          return {
            ...t,
            completed: !t.completed
          }
        } else return t;
      })

    )
  }
  return (
    <div>
      <h1>Todo List</h1>
      <div className='input-container'>
        <input type='text' placeholder='Enter todo' value={input} onChange={(e) => setInput(e.target.value)} />
        <button className='btn-container' onClick={() => addItems()}>Add</button>
      </div>
      <div className='list-container'>

        <ul>
          {todoList.map((t) => (
            <li className='list-items' key={t.id}>
              <input type='checkBox' checked={t.completed} onClick={() => toggleCheckBox(t.id)} />
              <span className={t.completed?'item_label_strike':'item_label'}>{t.text}</span>
              <button onClick={() => removeItem(t.id)}>Delete</button>
            </li>
          ))}
        </ul>


      </div>
    </div>
  );

}

export default App
