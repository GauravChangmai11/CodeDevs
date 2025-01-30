import { ThemeProvider } from './components/context/theme'
import ContextTemp from './components/ContextTemp'
import UserContextProvider from './components/context/userContext'
import Login from './components/Login'
import Profile from './components/Profile'
import { useEffect, useState } from 'react'

function App() {

  const [themeMode, setThemeMode] = useState('light')
  const darkTheme = ()=>{
    setThemeMode('dark')
  }
  const lightTheme = ()=>{
    setThemeMode('light')
  }

  useEffect(()=>{
    const htmlTag = document.querySelector('html')
    htmlTag.classList.remove('light', 'dark')
    htmlTag.classList.add(themeMode)
  },[themeMode])

  return (
    <>
      <ThemeProvider value={{themeMode, darkTheme, lightTheme}}>
        <ContextTemp/>
      </ThemeProvider>

      {/* <UserContextProvider>
      <h1>Hello World</h1>
      <Login/>
      <Profile/>
      </UserContextProvider> */}
    </>
  )
}

export default App
