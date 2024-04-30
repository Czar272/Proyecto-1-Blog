import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './view/Home'
import Login from './view/Login'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <Login/>
    </>
  )
}

export default App
