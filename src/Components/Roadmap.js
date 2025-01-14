import React from 'react'
import './CSS/Style.css'
import light from './images/road-light.png'
import dark from './images/road-dark.png'
const Roadmap = (props) => {
  return (
    <>
    <div className={`road-light dr-${props.mode}`}>
    <img className={`road-${props.mode}-img`} src={light} alt="" />
    </div>
    <div className={`road-dark lt-${props.mode}`}>
      <img className={`road-${props.mode}-img`} src={dark} alt="" />
    </div>
    
    </>
  )
}

export default Roadmap