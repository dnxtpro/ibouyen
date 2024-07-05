import { useState } from 'react'
import Navbar from './components/navbar'
import Logo from './components/logo.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='mt-0'>
  <Navbar/>
  
  </div>
  )
}

export default App
