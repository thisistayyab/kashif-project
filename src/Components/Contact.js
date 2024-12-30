import React from 'react'
import Footer from './Footer'

const contact = () => {
  return (
    <>
    <div className="form-container">
        <h1 style={{fontSize: 50}}>Have a Project idea?</h1>
        <form action="">
            <div className="form-top form-body">
                    <input className='form-input' type="text" placeholder='Enter your full name' name="" id="" />
            </div>
            <div style={{gap:40}}  className="form-body">
                <input className='form-input company-details' placeholder='Enter your company name' type="text" />
                    <input  className='form-input'  placeholder='Enter your email*' type="email" />
            </div>
            <div className="form-body">
                    <textarea className='form-input from-textbox'  placeholder='Enter your project details*' name="project-details" id=""></textarea>
            </div>
            <div className="form-button-main">
            <button className='form-button'>Send project details</button>
            </div>
        </form>
    </div>
    <Footer/>
    </>
  )
}

export default contact