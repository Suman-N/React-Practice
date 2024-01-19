import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")


  return (

    <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='bg-white flex flex-wrap justify-center rounded-xl gap-3 shadow-lg p-2'>
          <button className='outline-none px-4 py-2 rounded-full' style={{ backgroundColor: "Red" }} onClick={() => setColor("red")}>Red</button>
          <button className='outline-none px-4 py-2 rounded-full' style={{ backgroundColor: "Green" }} onClick={() => setColor("Green")}>Green</button>
          <button className='outline-none px-4 py-2 rounded-full' style={{ backgroundColor: "Orange" }} onClick={() => setColor("Orange")}>Orange</button>
          <button className='outline-none px-4 py-2 rounded-full' style={{ backgroundColor: "Blue" }} onClick={() => setColor("Blue")}>Blue</button>
          <button className='outline-none px-4 py-2 rounded-full' style={{ backgroundColor: "olive" }} onClick={() => setColor("olive")}>olive</button>
          <button className='outline-none px-4 py-2 rounded-full text-white' style={{ backgroundColor: "Black" }} onClick={() => setColor("Black")}>Black</button>
          <button className='outline-none px-4 py-2 rounded-full' style={{ backgroundColor: "Purple" }} onClick={() => setColor("Purple")}>Purple</button>
          <button className='outline-none px-4 py-2 rounded-full' style={{ backgroundColor: "Pink" }} onClick={() => setColor("Pink")}>Pink</button>
        </div>
        <p id="demo"></p>
      </div>
    </div>

  )
}

export default App
