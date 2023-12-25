import './App.css'
import Card from './Components/Card'

function App() {

  return (
    <>
      <h1 className='bg-green-400 text-black p-3 rounded-xl'>Tailwind Props</h1>
      <Card btntext="Click me" syntext="People who care about your success" />
    </>
  )
}

export default App
