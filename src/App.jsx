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
import { useGSAP } from '@gsap/react'
import gsap from "gsap";

const App = () => {
  const stairParentRef = useRef(null)

  useGSAP(() => {
    const tl = gsap.timeline()

    // Step 1: Ensure parent visible before animation
    tl.set(stairParentRef.current, { display: "block" })

    // Step 2: Animate stairs height from 0
    tl.from(".stair", {
      height: 0,
      stagger: {
        amount: 0.25,
      },
      duration: 0.5,
      ease: "power2.out"
    })

    // Step 3: Move stairs down
    tl.to(".stair", {
      y: "100%",
      stagger: {
        amount: 0.25,
      },
      duration: 0.6,
      ease: "power2.inOut"
    })

    // Step 4: Hide parent after animation completes
    tl.set(stairParentRef.current, { display: "none" })
  })

  return (
    <div className='text-white'>
      {/* Overlay Animation */}
      <div
        ref={stairParentRef}
        className="fixed z-20 h-screen w-full top-0 left-0"
      >
        <div className="h-full w-full flex">
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
        </div>
      </div>

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
