import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='font-[font2] flex items-center justify-center gap-6'>
<Link className='text-[5vw] hover:border-[#D3FD50] hover:text-[#D3FD50] h-44px border-2 leading-[5vw] px-14 pt-2  uppercase border-white rounded-full  'to='projects'> Projects </Link>
<Link className='text-[5vw] hover:border-[#D3FD50] hover:text-[#D3FD50] h-44px border-2 leading-[5vw] px-14 pt-2 uppercase border-white rounded-full  ' to='/agence'> Agence </Link>

    </div>
  )
}

export default HomeBottomText