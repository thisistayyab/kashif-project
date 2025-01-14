import React from 'react'
import './CSS/Style.css'

const Card = (props) => {
    let {image, name, description} = props
  return (
    <>
    <div className="project">
                <img className='port-image' src={image} alt={name} loading="lazy" />
                <h1 style={{marginTop:40}}>{name}</h1>
                <p style={{fontSize: 20 , color: 'rgb(94, 99, 99)'}}>{description}</p>
            </div>
    </>
  )
}

export default Card