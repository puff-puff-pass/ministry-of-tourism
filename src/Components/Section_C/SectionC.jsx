import React from 'react'
import Pic from './Pic'
import Grid from './Grid'
import '../App.css'
import {Big_Imgs} from './Sec_C_Imgs'
const SectionC = () => {
  return (
    <div className="Section">
    <div className = "Heading">PopularPlaces</div>
    <div className ='Container1' >
        
        <Pic  key={Big_Imgs[0].id} src={Big_Imgs[0].src} alt={Big_Imgs[0].alt} />
        <Grid id ="1"/>
        <Grid id="2"/>
        <Pic   key={Big_Imgs[1].id} src={Big_Imgs[1].src} alt={Big_Imgs[1].alt} />
    </div>
    </div>
  )
}

export default SectionC;
