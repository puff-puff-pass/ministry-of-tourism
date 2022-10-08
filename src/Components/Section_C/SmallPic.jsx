import React from 'react'

function SmallPic(props){
  console.log(props.src)
  return (
    
    <img className='SmallPic' src={props.src} alt={props.alt}></img>
  )
}

export default SmallPic
