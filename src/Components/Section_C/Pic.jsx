import React from 'react'
import { Big_Imgs } from './Sec_C_Imgs'
function  Pic(props) {
  // console.log(Big_Imgs[0].src)
  return (

   <img  className="pic" src={props.src}   alt={props.alt}></img>
 
  )
}

export default Pic;
