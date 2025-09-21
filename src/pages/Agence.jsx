import React from 'react'
import img1 from '/images/img1.jpg'
const Agence = () => {
  return (
    <div>
 <div className='Section1'>
<div className='h-[20vw] w-[15vw] absolute top-30 left-[30%] rounded-3xl overflow-hidden'>
  <img src={img1} alt="img"className='h-full w-full object-cover'/>
</div>
   <div className='text-black font-[font2] relative'>
      <div className=' mt-[55vh]'>
        <h1 className='text-[19vw] uppercase text-center leading-[17vw]'>
        Soixan7e
        <br />Douze
      </h1>
      </div>
      <div className='pl-[40%] pt-1'>
        <p className='text-6xl '>
        &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; Notre curiosité nourrit notre créativité. On reste humbles et on dit non aux gros egos, même le vôtre. Une marque est vivante. Elle a des valeurs, une personnalité, une histoire. Si on oublie ça, on peut faire de bons chiffres à court terme, mais on la tue à long terme. C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir des marques influentes.
        </p>
      </div>
    </div>

 </div>
<div className="Section2 h-screen">

</div>
</div>
  )
}

export default Agence

// "https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg"