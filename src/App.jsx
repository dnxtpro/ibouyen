import { useState } from 'react'
import Navbar from './components/navbar'
import Logo from './components/logo.jsx'
import './App.css'
import Hero from './components/hero.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='mt-0 w-full justify-center'>
  <Navbar/>
  <div className="mx-auto ">
  <Hero/>
  </div>
  </div>
  )
}

export default App
