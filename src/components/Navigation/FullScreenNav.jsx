import React from 'react'

const FullScreenNav = () => {
  return (
    <div id='fullscreennav' className='absolute  h-screen w-full bg-black top-0 overflow-hidden'>

      <div>
            <div>
      <div ref={stairParentRef} className="fixed z-20 h-screen w-full top-0 left-0" style={{ display: 'none' }}>
        <div className="h-full w-full flex">
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
        </div>
      </div>
      <div ref={pageRef} style={{ opacity: 0 }}>{children}</div>
    </div>
      </div>

      <div>
      <div className="flex w-full justify-between p-3 items-start">

              <div className=''>
        <div className='w-30'>
          <svg className='h-full w-full' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 103 44">
            <path
              fill='white'
              fillRule="evenodd"
              d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"
            />
          </svg>
        </div>
      </div>
<div className="h-16 w-16 relative cursor-pointer">
<div className="h-[5.5rem] w-1 bg-[#D3FD50] absolute -rotate-45 origin-top"></div>
<div className="h-[5.5rem] w-1 bg-[#D3FD50] absolute right-0 rotate-45 origin-top"></div>

</div>
      </div>
      <div className='py-10'>

            <div id='all-links'>

        <div className='cursor-pointer link border-t-1 border-white relative '>
          <h1 className='font-[font2] text-[8vw] uppercase text-white leading-[0.8] pt-4 text-center'>PROJECTS</h1>
          <div className='moveLink absolute flex top-0 bg-[#D3FD50] '>

   
                    <div className='moveX flex items-center flex-nowrap '>
                    <h2 className='whitespace-nowrap font-[font2] text-[8vw] uppercase text-black leading-[0.8] pt-4 text-center'>POUR TOUT VOIR</h2>
                    <img className='w-56 h-20  rounded-full shrink-0 object-cover' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960.jpg?w=1280&h=960&s=b5151821a8c0d9603263d7ec827bee9b" alt="" />
                    <h2 className='whitespace-nowrap font-[font2] text-[8vw] uppercase text-black leading-[0.8] pt-4 text-center'>POUR TOUT VOIR</h2>
                    <img className='w-56 h-20   rounded-full shrink-0 object-cover' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960.jpg?w=1280&h=960&s=b5151821a8c0d9603263d7ec827bee9b" alt="" />
                    </div>


                    <div className='moveX flex items-center flex-nowrap '>
                    <h2 className='whitespace-nowrap font-[font2] text-[8vw] uppercase text-black leading-[0.8] pt-4 text-center'>POUR TOUT VOIR</h2>
                    <img className='w-56 h-20  rounded-full shrink-0 object-cover' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960.jpg?w=1280&h=960&s=b5151821a8c0d9603263d7ec827bee9b" alt="" />
                    <h2 className='whitespace-nowrap font-[font2] text-[8vw] uppercase text-black leading-[0.8] pt-4 text-center'>POUR TOUT VOIR</h2>
                    <img className='w-56 h-20   rounded-full shrink-0 object-cover' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960.jpg?w=1280&h=960&s=b5151821a8c0d9603263d7ec827bee9b" alt="" />
                    </div>


             </div>

          

        </div>

        <div className='cursor-pointer link border-t-1 border-white relative '>
          <h1 className='font-[font2] text-[8vw] uppercase text-white leading-[0.8] pt-4 text-center'>ABOUT</h1>
          <div className='moveLink absolute flex top-0 bg-[#D3FD50] '>

   
                    <div className='moveX flex items-center flex-nowrap '>
                    <h2 className='whitespace-nowrap font-[font2] text-[8vw] uppercase text-black leading-[0.8] pt-4 text-center'>POUR TOUT VOIR</h2>
                    <img className='w-56 h-20  rounded-full shrink-0 object-cover' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960.jpg?w=1280&h=960&s=b5151821a8c0d9603263d7ec827bee9b" alt="" />
                    <h2 className='whitespace-nowrap font-[font2] text-[8vw] uppercase text-black leading-[0.8] pt-4 text-center'>POUR TOUT VOIR</h2>
                    <img className='w-56 h-20   rounded-full shrink-0 object-cover' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960.jpg?w=1280&h=960&s=b5151821a8c0d9603263d7ec827bee9b" alt="" />
                    </div>


                    <div className='moveX flex items-center flex-nowrap '>
                    <h2 className='whitespace-nowrap font-[font2] text-[8vw] uppercase text-black leading-[0.8] pt-4 text-center'>POUR TOUT VOIR</h2>
                    <img className='w-56 h-20  rounded-full shrink-0 object-cover' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960.jpg?w=1280&h=960&s=b5151821a8c0d9603263d7ec827bee9b" alt="" />
                    <h2 className='whitespace-nowrap font-[font2] text-[8vw] uppercase text-black leading-[0.8] pt-4 text-center'>POUR TOUT VOIR</h2>
                    <img className='w-56 h-20   rounded-full shrink-0 object-cover' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960.jpg?w=1280&h=960&s=b5151821a8c0d9603263d7ec827bee9b" alt="" />
                    </div>


             </div>

          

        </div>

        <div className='cursor-pointer link border-t-1 border-white relative '>
          <h1 className='font-[font2] text-[8vw] uppercase text-white leading-[0.8] pt-4 text-center'>contact</h1>
          <div className='moveLink absolute flex top-0 bg-[#D3FD50] '>

   
                    <div className='moveX flex items-center flex-nowrap '>
                    <h2 className='whitespace-nowrap font-[font2] text-[8vw] uppercase text-black leading-[0.8] pt-4 text-center'>POUR TOUT VOIR</h2>
                    <img className='w-56 h-20  rounded-full shrink-0 object-cover' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960.jpg?w=1280&h=960&s=b5151821a8c0d9603263d7ec827bee9b" alt="" />
                    <h2 className='whitespace-nowrap font-[font2] text-[8vw] uppercase text-black leading-[0.8] pt-4 text-center'>POUR TOUT VOIR</h2>
                    <img className='w-56 h-20   rounded-full shrink-0 object-cover' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960.jpg?w=1280&h=960&s=b5151821a8c0d9603263d7ec827bee9b" alt="" />
                    </div>


                    <div className='moveX flex items-center flex-nowrap '>
                    <h2 className='whitespace-nowrap font-[font2] text-[8vw] uppercase text-black leading-[0.8] pt-4 text-center'>POUR TOUT VOIR</h2>
                    <img className='w-56 h-20  rounded-full shrink-0 object-cover' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960.jpg?w=1280&h=960&s=b5151821a8c0d9603263d7ec827bee9b" alt="" />
                    <h2 className='whitespace-nowrap font-[font2] text-[8vw] uppercase text-black leading-[0.8] pt-4 text-center'>POUR TOUT VOIR</h2>
                    <img className='w-56 h-20   rounded-full shrink-0 object-cover' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960.jpg?w=1280&h=960&s=b5151821a8c0d9603263d7ec827bee9b" alt="" />
                    </div>


             </div>

          

        </div>

        <div className='cursor-pointer link border-t-1 border-b-1 border-white relative '>
          <h1 className='font-[font2] text-[8vw] uppercase text-white leading-[0.8] pt-4 text-center'>BLOGUE</h1>
          <div className='moveLink absolute flex top-0 bg-[#D3FD50] '>

   
                    <div className='moveX flex items-center flex-nowrap '>
                    <h2 className='whitespace-nowrap font-[font2] text-[8vw] uppercase text-black leading-[0.8] pt-4 text-center'>POUR TOUT VOIR</h2>
                    <img className='w-56 h-20  rounded-full shrink-0 object-cover' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960.jpg?w=1280&h=960&s=b5151821a8c0d9603263d7ec827bee9b" alt="" />
                    <h2 className='whitespace-nowrap font-[font2] text-[8vw] uppercase text-black leading-[0.8] pt-4 text-center'>POUR TOUT VOIR</h2>
                    <img className='w-56 h-20   rounded-full shrink-0 object-cover' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960.jpg?w=1280&h=960&s=b5151821a8c0d9603263d7ec827bee9b" alt="" />
                    </div>


                    <div className='moveX flex items-center flex-nowrap '>
                    <h2 className='whitespace-nowrap font-[font2] text-[8vw] uppercase text-black leading-[0.8] pt-4 text-center'>POUR TOUT VOIR</h2>
                    <img className='w-56 h-20  rounded-full shrink-0 object-cover' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960.jpg?w=1280&h=960&s=b5151821a8c0d9603263d7ec827bee9b" alt="" />
                    <h2 className='whitespace-nowrap font-[font2] text-[8vw] uppercase text-black leading-[0.8] pt-4 text-center'>POUR TOUT VOIR</h2>
                    <img className='w-56 h-20   rounded-full shrink-0 object-cover' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960.jpg?w=1280&h=960&s=b5151821a8c0d9603263d7ec827bee9b" alt="" />
                    </div>


             </div>

          

        </div>

      </div>
    </div>
          </div>
      </div>

  )
}

export default FullScreenNav
