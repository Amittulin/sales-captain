import { useState } from 'react'
import './App.css'
import home from './modules/home'
import Header from './components/header'
import Home from './modules/home'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
       <Home/>
    </>
  )
}

export default App
