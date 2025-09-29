import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from "gsap";
const stairs = () => {

 const stairParentRef = useRef(null)

  useGSAP(() => {
    const tl = gsap.timeline()

    tl.set(stairParentRef.current, { display: "block" })

    tl.from(".stair", {
      height: 0,
      stagger: {
        amount: 0.25,
      },
      duration: 0.5,
      ease: "power2.out"
    })

    tl.to(".stair", {
      y: "100%",
      stagger: {
        amount: 0.25,
      },
      duration: 0.6,
      ease: "power2.inOut"
    })

    tl.set(stairParentRef.current, { display: "none" })
  })

  return (

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

)
}

export default stairs