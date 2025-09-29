// import React from 'react'
// import { Route , Routes } from 'react-router-dom'
// // import { Link } from 'react-router-dom'
// import Home from './pages/Home'
// import Agence from './pages/Agence'
// import Projects from './pages/Projects'
// import { useGSAP } from '@gsap/react'
// import gsap from "gsap";
// import { useRef } from 'react'

// const App = () => {
//   const stairParentRef = useRef(null)
//   useGSAP(function(){
//     const tl = gsap.timeline()
//       tl.to(stairParentRef.current,{
//       display:'none'
//     })
//     tl.from('.stair',{
//       height:0,
//       stagger:{
//         amount:-0.25,
//       }
//     })
//     tl.to('.stair',{
//       y:'100%',
//       stagger:{
//         amount:0.25
//       }
//     })
//     tl.to(stairParentRef.current,{
//       display:'none'
//     })
//        tl.to('.stair',{
//       y:'0%',

//     })
//   })
//   return (
//     <div className='text-white'>

// <div ref={stairParentRef} className="fixed z-20 h-screen w-full top-0"> 

// <div className="h-full w-full flex"> 

// <div className="stair h-full w-1/5 bg-black"></div>
// <div className="stair h-full w-1/5 bg-black"></div>
// <div className="stair h-full w-1/5 bg-black"></div>
// <div className="stair h-full w-1/5 bg-black"></div>
// <div className="stair h-full w-1/5 bg-black"></div>

// </div>

// </div>
//       <Routes>
//        <Route path='/' element = {<Home/>}/>
//        <Route path='/agence' element = {<Agence/>}/>
//        <Route path='/projects' element = {<Projects/>}/>

//       </Routes>
//     </div>
//   )
// }

// export default App



import React, { useRef } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Agence from './pages/Agence'
import Projects from './pages/Projects'


const App = () => {
 

  return (
    <div className='text-white'>


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
