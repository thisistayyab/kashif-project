import React from 'react'
import './CSS/Style.css'
const Skill = (props) => {
  return (
    <>
        <div className="skills">
            <div className={`skills-head-${props.mode}`}>
                <h1>My Working Skills</h1>
                <p style={{fontSize:26}}>An overview of my skills and expertise</p>
            </div>
            <div className="skills-main">
                <span className={`individual-skill-${props.mode}`}>Swift</span>
                <span className={`individual-skill-${props.mode}`}>SwiftUI</span>
                <span className={`individual-skill-${props.mode}`}>UIKit</span>
                <span className={`individual-skill-${props.mode}`}>Unit Testing</span>
                <span className={`individual-skill-${props.mode}`}>Feature Flagging</span>
                <span className={`individual-skill-${props.mode}`}>UI Testing</span>
                <span className={`individual-skill-${props.mode}`}>Snapshot Testing</span>
                <span className={`individual-skill-${props.mode}`}>Cocoapods</span>
                <span className={`individual-skill-${props.mode}`}>Test-driven Development (TDD)</span>
                <span className={`individual-skill-${props.mode}`}>Extreme Programming (XP)</span>
                <span className={`individual-skill-${props.mode}`}>Trunk-based Development (TBO)</span>
                <span className={`individual-skill-${props.mode}`}>Layered Architecture</span>
                <span className={`individual-skill-${props.mode}`}>Modular Architecture</span>
                <span className={`individual-skill-${props.mode}`}>Micro Frontends</span>
                <span className={`individual-skill-${props.mode}`}>Software Design Patterns</span>
                <span className={`individual-skill-${props.mode}`}>Carthage</span>
                <span className={`individual-skill-${props.mode}`}>MVC</span>
                <span className={`individual-skill-${props.mode}`}>MVP</span>
                <span className={`individual-skill-${props.mode}`}>MVVM</span>
                <span className={`individual-skill-${props.mode}`}>MVVM-C</span>
                <span className={`individual-skill-${props.mode}`}>Coordinate Pattern</span>
                <span className={`individual-skill-${props.mode}`}>The Composable Architecture</span>
                <span className={`individual-skill-${props.mode}`}>Reactive Programming</span>
                <span className={`individual-skill-${props.mode}`}>RxSwift</span>
                <span className={`individual-skill-${props.mode}`}>Combine</span>
                <span className={`individual-skill-${props.mode}`}>Networking</span>
                <span className={`individual-skill-${props.mode}`}>REST APIs</span>
                <span className={`individual-skill-${props.mode}`}>GraphQL</span>
                <span className={`individual-skill-${props.mode}`}>Databases</span>
                <span className={`individual-skill-${props.mode}`}>Realm DB</span>
                <span className={`individual-skill-${props.mode}`}>Core Data</span>
                <span className={`individual-skill-${props.mode}`}>Git</span>
                <span className={`individual-skill-${props.mode}`}>UI/UX Enthusiast</span>
                <span className={`individual-skill-${props.mode}`}>Figma</span>
                <span className={`individual-skill-${props.mode}`}>Sketch</span>
                <span className={`individual-skill-${props.mode}`}>CI/CD</span>
                <span className={`individual-skill-${props.mode}`}>Bitrise</span>
                <span className={`individual-skill-${props.mode}`}>Fastlane</span>
                <span className={`individual-skill-${props.mode}`}>KMM</span>
                <span className={`individual-skill-${props.mode}`}>GitHub Actions & Workflows</span>
                <span className={`individual-skill-${props.mode}`}>Dependency Management</span>
                <span className={`individual-skill-${props.mode}`}>Swift Package Manager</span>
            </div>
        </div>
    </>
  )
}

export default Skill