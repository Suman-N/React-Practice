import { Outlet } from 'react-router-dom'
import './App.css'
import { Footer, Header } from './Components'

function App() {

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
