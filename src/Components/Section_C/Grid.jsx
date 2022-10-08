import React from 'react'
import SmallPic from './SmallPic'
import { Small_Imgs_1, Small_Imgs_2 } from './Sec_C_Imgs'
function Grid(id) {
  function Get_Img(img){
    console.log(img)
    return(
      <SmallPic
       key={img.id} 
       src={img.src} 
       alt={img.alt} 
       />
    )
  }
  return (
    <div className='grid'> {id==1 ? Small_Imgs_1.map(Get_Img) : Small_Imgs_2.map(Get_Img)}</div>
  )
  }

export default Grid
