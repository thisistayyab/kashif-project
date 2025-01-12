import React from 'react'
import './CSS/Style.css'
import aboutImage from './images/about-img.jpg'
import Roadmap from './Roadmap'
const AboutUs = (props) => {
  return (
    <>
    <div className="about">
      <div className="passion">
        <h1 style={{fontSize: 50}}>About Me</h1>
        <p style={{fontSize: 25}}>I&lt;code&gt; for passion & design for fun</p>
      </div>
      <div className="about-data">
        <div>
        <img className='about-img' src={aboutImage} alt="" />
        </div>
        <div className="about-text">
        <p style={{fontSize: 22}}>
        I'm passionate about building high quality mobile apps, focusing on reliability, maintainability, and robust software design patterns.<br/>
        <br/>
        Testing is fundamental in my process, and I'm a strong advocate of Test-Driven Development. TDD is my approach to delivering robust, defect-free software, and it plays a vital role in ensuring code quality and maintainability.<br/>
        <br/>
        I am a creative developer who loves creating playful micro- interactions. I have a deep love for beautiful UI and intuitive UX. I'm well-versed in Apple's HIG. It allows me to consistently deliver apps that not only function seamlessly but are also very user-friendly.<br/>
        <br/>
        My most successful side project has been R6Stats which has garnered over 1.37 million downloads. While R6Stats was a solo endeavor, it showcases my ability to deliver and maintain popular, user-friendly apps.
        </p>
          </div>
      </div>
    </div>
    <Roadmap/>
    </>
  )
}

export default AboutUs