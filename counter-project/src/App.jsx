import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(5)

  const addCounter = () => {
    setCount(count == 20 ? count : count + 1)
    
    // console.log("Clicked", count);
  }

  const removeCounter = () => {
    setCount(count == 0 ? count : count - 1)
    // console.log("Clicked", count);
  }
  return (
    <>
      <div className="card">
        <h1>{count}</h1>
        <button onClick={addCounter}>
          Add Counter
        </button>
        <button onClick={removeCounter}>
          Remove Counter
        </button>
        <h4>{count == 20 ? "Max Count" : count == 0 ? "Min Count" : null}</h4>
      </div>
      
    </>
  )
}

export default App
