import React from 'react'
import portImage from './images/portfolio.webp'
import Carousel from './Carousel'

const Services = (props) => {
  return (
    
    <>
    <div className="portfolio">
        <div className="port-head">
            <h1 style={{fontSize: 50}}>Our Recent Work & Portfolio.</h1>
        </div>
        <div className="port-body">
            <div className="project">
                <img className='port-image' src={portImage} alt="" />
                <h1 style={{fontSize: 40, marginTop:40}}>Authenticator Plus</h1>
                <p style={{fontSize: 25 , color: 'rgb(94, 99, 99)'}}>Authenticator Plus is a simple yet powerful app to manage and generate 2-step verification tokens for...</p>
            </div>
            <div className="project">
                <img className='port-image' src={portImage} alt="" />
                <h1 style={{fontSize: 40, marginTop:40}}>Authenticator Plus</h1>
                <p style={{fontSize: 25, color: 'rgb(94, 99, 99)'}}>Authenticator Plus is a simple yet powerful app to manage and generate 2-step verification tokens for...</p>
            </div>
        </div>
        <div className="port-body">
            <div className="project">
                <img className='port-image' src={portImage} alt="" />
                <h1 style={{fontSize: 40, marginTop:40}}>Authenticator Plus</h1>
                <p style={{fontSize: 25 , color: 'rgb(94, 99, 99)'}}>Authenticator Plus is a simple yet powerful app to manage and generate 2-step verification tokens for...</p>
            </div>
            <div className="project">
                <img className='port-image' src={portImage} alt="" />
                <h1 style={{fontSize: 40, marginTop:40}}>Authenticator Plus</h1>
                <p style={{fontSize: 25, color: 'rgb(94, 99, 99)'}}>Authenticator Plus is a simple yet powerful app to manage and generate 2-step verification tokens for...</p>
            </div>
        </div>
        <div className="port-body">
            <div className="project">
                <img className='port-image' src={portImage} alt="" />
                <h1 style={{fontSize: 40, marginTop:40}}>Authenticator Plus</h1>
                <p style={{fontSize: 25 , color: 'rgb(94, 99, 99)'}}>Authenticator Plus is a simple yet powerful app to manage and generate 2-step verification tokens for...</p>
            </div>
            <div className="project">
                <img className='port-image' src={portImage} alt="" />
                <h1 style={{fontSize: 40, marginTop:40}}>Authenticator Plus</h1>
                <p style={{fontSize: 25, color: 'rgb(94, 99, 99)'}}>Authenticator Plus is a simple yet powerful app to manage and generate 2-step verification tokens for...</p>
            </div>
        </div>
    </div>
    <Carousel
    mode={props.mode}
    />
    </>
  )
}

export default Services