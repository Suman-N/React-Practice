
import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './Context/Theme'
import ThemeBtn from './Component/Themebtn'
import Card from './Component/Card'

function App() {
  const [thememode, setThememode] = useState("light")

  const lightmode = () => {
    setThememode("light")
  }

  const darkmode = () => {
    setThememode("dark")
  }

  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(thememode)
  }, [thememode])
  
  return (
    <ThemeProvider value={{thememode, lightmode, darkmode}}>
      <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <ThemeBtn/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <Card/>
                    </div>
                </div>
            </div>
    </ThemeProvider>
  )
}

export default App
