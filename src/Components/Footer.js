import React from 'react'
import github from './icons/github.svg'
import linkedin from './icons/linkedin.svg'
import instagram from './icons/instagram.svg'
import x from './icons/x.svg'
import download from './icons/download.svg'
const Footer = (props) => {
  return (
    <>
    <div className={`footer-${props.mode}`}>
        <div className="footer-body">
            <div className="footer-body-left">
                <h1>Main Page</h1>
                <div className="footer-div">
                    <a className='footer-link' href="">Home</a> 
                    </div>
                    <div className="footer-div">
                <a className='footer-link' href="">AboutUs</a>
                    </div>
                    <div className="footer-div">
                <a className='footer-link' href="">Projects</a>
                    </div>
                    <div className="footer-div">
                <a className='footer-link' href="">Careers</a>
                    </div>
            </div>
            <div className="footer-body-right">
                <h1>Contact</h1>
                <div className="footer-div">
                <span className='footer-link' >Faisalabad, Pakistan</span>
                </div>
                <div className="footer-div">
                <span className='footer-link' >+92 321 123 45 67</span>
                </div>
                <div className="footer-div">
                <span className='footer-link' >contact@shahid.com</span>
                </div>
            </div>
        </div>
        <div className={`footer-bottom-${props.mode}`}>
            <div className="footer-bottom-div1">
                <button className={`icon-container icn-${props.mode}`}>
                    <img className={`download-icon-${props.mode}`} src={download} alt="" />
                    </button>
                <div style={{textAlign:'left'}}>
                    <p className={`footer-link txt-${props.mode}`}>My Deck</p>
                    <p className={`footer-link txt-${props.mode}`}>PDF, 3MB</p>
                </div>
            </div>
            <div className="footer-bottom-div2">
                    <span className={`footer-link txt-${props.mode}`}  style={{fontSize:20}}>&copy; 2024 Shahid. All rights reserved.</span>
            </div>
            <div className="footer-bottom-div3">
                <img className={`footer-icon-${props.mode}`} style={{width:30, height: 30}} src={github} alt="" />
                <img className={`footer-icon-${props.mode}`} style={{width:30, height: 30}} src={linkedin} alt="" />
                <img className={`footer-icon-${props.mode}`} style={{width:30, height: 30}} src={instagram} alt="" />
                <img className={`footer-icon-${props.mode}`} style={{width:30, height: 30}} src={x} alt="" />
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer