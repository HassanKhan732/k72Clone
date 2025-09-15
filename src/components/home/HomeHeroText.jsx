import React from 'react'
import Video from './Video'
const HomeHeroText = () => {
  return (
    <div className='font-[font2] pt-5 text-center'>
      <div className='text-[9vw] justify-center uppercase leading-[8vw] flex items-center'>L'étincelle</div>
      <div className='text-[9.5vw] justify-center uppercase leading-[8.5vw] flex items-start'>qui <div className='h-[7vw] w-[16vw] -mt-3 rounded-full overflow-hidden'><Video/></div> génère</div>
      <div className='text-[9vw] justify-center uppercase leading-[8.5vw] flex items-center'>la créativité</div>
    </div>
  )
}

export default HomeHeroText