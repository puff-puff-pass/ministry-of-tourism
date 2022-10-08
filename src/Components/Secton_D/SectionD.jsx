import React from 'react'
import Pic2 from './Pic2'
import Carousel from './Carousel'
import Imgs from "./Sec_D_Imgs"
const SectionD = () => {
  function Get_Img(img){
    return(
      <Pic2
       key={img.id} 
       src={img.src} 
       alt={img.alt} 
       />
    )
  }
  return (
    <div className="Section">
      <div className="Heading">Explore</div>
      <div className='Container2'>
       { Imgs.map(Get_Img)}
      </div>
      <Carousel/>
    </div>
  )
}

export default SectionD
