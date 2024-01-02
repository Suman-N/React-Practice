import UserContextProvider from './context/UserContextProvider'
import './App.css'
import Login from './Component/Login'
import Profile from './Component/Profile'

function App() {

  return (
    <UserContextProvider>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
