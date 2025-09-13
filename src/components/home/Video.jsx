import React from 'react'
import vid from '/videos/vid.mp4'

const Video = () => {
  return (
    <div className='h-full w-full'>
        <video className='h-full w-full object-cover' src={vid} autoPlay loop muted></video>
    </div>
  )
}

export default Video