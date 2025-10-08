import React, { useRef } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Agence from './pages/Agence'
import Projects from './pages/Projects'
import NavBar from './components/Navigation/NavBar'


const App = () => {
 

  return (
    <div className='text-white'>

      <NavBar/>
      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agence" element={<Agence />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  )
}

export default App
