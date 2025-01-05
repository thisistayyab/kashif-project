import React, {useState} from 'react'
import profile from './images/profile.png'
import './CSS/Style.css'
import apple from './icons/apple.svg'
import mouse from './icons/mouse.svg'
import arrow from './icons/arrow_down.svg'

const Home = () => {

  return (
    <>
    <div className="intro">
        <div className="body">
            <div className="text">
                <p style={{fontSize: 30,color: 'rgb(94, 99, 99)'}}>Hello there</p>
                <h1 style={{fontSize: 55}}>I'm Shahid here!</h1>
                <div className='body-apple'>
                    <img src={apple} style={{width:30,height:30,marginTop: 5, marginRight: 10}} className='' alt="" />
                    <p style={{fontSize: 30,color: 'rgb(94, 99, 99)'} }>Senior IOS Engineer</p>
                </div>
                <p style={{fontSize: 20,color: 'rgb(94, 99, 99)', marginTop: 30}}>I’ve 8+ years of experience in iOS technologies. Super passionate about beautiful UI and intuitive UX design. I believe in high quality, simplicity, collaboration, and tight feedback loops.</p>
                <button style={{fontSize: 24}} className='body-txt-btn'>Let’s discuss your project with $0</button>
            </div>
            <div className="body-pic">
                <img src={profile} className='profile' alt="" />
            </div>
        </div>
            <div className="intro-label">
                <div className="intro-scroll">
                    <img  style={{width:20,height:20, marginRight:5}} src={mouse} alt="" />
                    <p>Scroll down</p>
                    <img style={{width:10,height:10, marginLeft:5}} src={arrow} alt="" />
                </div>
            </div>
    </div>
    <div className="bio-info">
        <div className="age bio-data">
            <h1 style={{fontSize: 50}}>29</h1>
            <p style={{fontSize: 20}}>Years Old</p>
        </div>
        <div className="experience bio-data">
            <h1 style={{fontSize: 50}}>8+</h1>
            <p style={{fontSize: 20}}>Years Experience</p>
        </div>
        <div className="work bio-data">
            <h1 style={{fontSize: 50}}>18+</h1>
            <p style={{fontSize: 20}}>Published Apps</p>
        </div>
        <div className="satisfied-clients bio-data">
            <h1 style={{fontSize: 50}}>60</h1>
            <p style={{fontSize: 20}}>Satisfied Clients</p>
        </div>
    </div>
    </>
  )
}

export default Home