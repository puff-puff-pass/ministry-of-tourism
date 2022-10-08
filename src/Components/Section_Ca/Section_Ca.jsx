import React from 'react'
import Pic_Ca from './Pic_Ca'
import Imgs from "./Sec_Ca_Imgs"
const Section_Ca = () => {
  function Get_Img(img){
    return(
      <Pic_Ca
       key={img.id} 
       src={img.src} 
       alt={img.alt} 
       />
    )
  }
  return (
    <div className="Section">
      <div className="Heading">Strategies & Policies</div>
      <div className='Container_Ca'>
       { Imgs.map(Get_Img)}
      </div>
    </div>
  )
}
export default Section_Ca