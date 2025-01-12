import React from 'react'
import './CSS/Roadmap.css'

const Roadmap = (props) => {
  return (
    <>
      <div className="road-tex">
        <h1>RoadMap</h1>
        <p style={{fontSize:20}}>How the Process Works</p>
      </div>
    <div class="graphic-container">
  <div class="center-circles-container">
    <div class="single">
      <div class={`circle-${props.mode} one`}>
        <div class="dot"></div>
        <div class="icon">
          <i class="far fa-building">1</i>
        </div>
        <div class="content-container">
          <div class="line"></div>
          <h2>Consultation</h2>
          <div class="content">
            <p style={{fontSize:20, marginTop:4}}>We'll start with a detailed discussion of your app idea, goals, and target audience.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="double">
      <div class={`circle-${props.mode} two`}>
        <div class="icon">
          <i class="far fa-building">2</i>
        </div>
        <div class="content-container">
          <div class="line"></div>
          <h2>Planning</h2>
          <div class="content">
            <p style={{fontSize:20, marginTop:4}}>A project roadmap, including timelines & milestones, for your approval.</p>
          </div>
        </div>
        </div>
      <div class={`circle-${props.mode} three`}>
        <div class="icon">
          <i class="far fa-building">3</i>
        </div>
        <div class="content-container">
          <div class="line"></div>
          <h2>Development</h2>
          <div class="content">
            <p style={{fontSize:20, marginTop:4}}>Building your app, & keeping you updated with progress reports.</p>
          </div>
        </div>
        </div>
    </div>
    <div class="double">
      <div class={`circle-${props.mode} four`}>
        <div class="dot"></div>
        <div class="icon">
          <i class="far fa-building">4</i>
        </div>
        <div class="content-container">
          <div class="line"></div>
          <h2>Testing</h2>
          <div class="content">
            <p style={{fontSize:20, marginTop:4}}>Thorough testing to iron out any issues and ensure seamless performance.</p>
          </div>
        </div>
        </div>
      <div class={`circle-${props.mode} five`}>
        <div class="icon">
          <i class="far fa-building">5</i>
        </div>
        <div class="content-container">
          <div class="line"></div>
          <h2>Deployment</h2>
          <div class="content">
            <p style={{fontSize:20, marginTop:4}}>Help you launch your app on the App Store, Google Play, or your preferred platform.</p>
          </div>
        </div>
        </div>
    </div>
    <div class="single">
      <div class={`circle-${props.mode} six`}>
        <div class="dot"></div>
        <div class="icon">
          <i class="far fa-building">6</i>
        </div>
        <div class="content-container">
          <div class="line"></div>
          <h2>Support</h2>
          <div class="content">
            <p style={{fontSize:20, marginTop:4}}>Post-launch support, updates, & enhancements as needed.</p>
          </div>
        </div>
        </div>
    </div>
    
  </div>
  
</div>

<div class="roadmap">
        <h1>RoadMap</h1>
        <p style={{textAlign: 'center'}}>How the Process Works</p>
        <div class={`step step-${props.mode}`}>
            <div class={`number n-${props.mode}`}>01</div>
            <div class="content">
                <h2>Consultation</h2>
                <p>We'll start with a detailed discussion of your app idea, goals, and target audience.</p>
            </div>
        </div>
        <div class={`step step-${props.mode}`}>
            <div class={`number n-${props.mode}`}>02</div>
            <div class="content">
                <h2>Planning</h2>
                <p>A project roadmap, including timelines & milestones, for your approval.</p>
            </div>
        </div>
        <div class={`step step-${props.mode}`}>
            <div class={`number n-${props.mode}`}>03</div>
            <div class="content">
                <h2>Development</h2>
                <p>Building your app, & keeping you updated with progress reports.</p>
            </div>
        </div>
        <div class={`step step-${props.mode}`}>
            <div class={`number n-${props.mode}`}>04</div>
            <div class="content">
                <h2>Testing</h2>
                <p>Thorough testing to iron out any issues and ensure seamless performance.</p>
            </div>
        </div>
        <div class={`step step-${props.mode}`}>
            <div class={`number n-${props.mode}`}>05</div>
            <div class="content">
                <h2>Deployment</h2>
                <p>Help you launch your app on the App Store, Google Play, or your preferred platform.</p>
            </div>
        </div>
        <div class={`step step-${props.mode}`}>
            <div class={`number n-${props.mode}`}>06</div>
            <div class="content">
                <h2>Support</h2>
                <p>Post-launch support, updates, & enhancements as needed.</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Roadmap