import React, { useRef } from "react";
import img1 from "/images/img1.jpg";
import img2 from "/images/img2.jpg";
import img3 from "/images/img3.jpg";
import img4 from "/images/img4.jpg";
import img5 from "/images/img5.jpg";
import img6 from "/images/img6.jpg";
import img7 from "/images/img7.jpg";
import img8 from "/images/img8.jpg";
import img9 from "/images/img9.jpg";
import img10 from "/images/img10.jpg";
import img11 from "/images/img11.jpg";
import img12 from "/images/img12.jpg";
import img13 from "/images/img13.jpg";

import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Agence = () => {
  const imageDivRef = useRef(null);
  const imageRef = useRef(null)
  const imageArry = [img1 ,img2, img3 ,img4 , img5 , img6, img7, img8,img9 , img10,img11, img12, img13,]
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        start: "top 28%",
        end: "top -100%",
        scrub: true,
        pin: true,
        onUpdate : (elem)=>{
        let imageIndex;
        if (elem.progress < 1){
          imageIndex = Math.floor(elem.progress * imageArry.length)
        }else{
          imageIndex = imageArry.length -1
        }
        imageRef.current.src = imageArry[imageIndex]
        }
      },
      
    });
  });

  return (
    <div>
      <div className="Section1 relative">
        <div className="h-[20vw] w-[15vw] absolute top-30 left-[30%] rounded-3xl overflow-hidden" ref={imageDivRef}>
          <img
            src={img1}
            ref={imageRef}
            alt="img"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="text-black font-[font2] relative">
          <div className="mt-[55vh]">
            <h1 className="text-[19vw] uppercase text-center leading-[17vw]">
              Soixan7e
              <br />
              Douze
            </h1>
          </div>

          <div className="pl-[40%] pt-1">
            <p className="text-6xl">
              &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; Notre
              curiosité nourrit notre créativité. On reste humbles et on dit non
              aux gros egos, même le vôtre. Une marque est vivante. Elle a des
              valeurs, une personnalité, une histoire. Si on oublie ça, on peut
              faire de bons chiffres à court terme, mais on la tue à long terme.
              C’est pour ça qu’on s’engage à donner de la perspective, pour
              bâtir des marques influentes.
            </p>
          </div>
        </div>
      </div>

      <div className="Section2 h-screen"></div>
    </div>
  );
};

export default Agence;
