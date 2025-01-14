import profile from './images/profile.png'
import './CSS/Style.css'
import apple from './icons/apple.svg'
import mouse from './icons/mouse.svg'
import arrow from './icons/arrow_down.svg'
import hello from './icons/hello.svg'
import './CSS/Dark.css'

const Home = (props) => {

  return (
    <>
    <div className={`glow-${props.mode}`}>
        <div className={`yellow-effect-${props.mode}`}>

        </div>
    </div>
    <div className={`intro  `}>
        <div className="body">
            <div className="text">
                <p style={{color: 'rgb(94, 99, 99)',fontSize:30,  alignItems:'center'}}>Hello there
                    <img style={{width:25, height: 25, marginLeft: 10}} src={hello} alt="" />
                </p>
                <h1 className='f-55' >I'm Shahid here!</h1>
                <div className={`body-apple body-apple-${props.mode}`} >
                    <img src={apple} style={{width:30,height:30, marginRight: 10}} className='' alt="" />
                    <p className='f-30' >Senior IOS Engineer</p>
                </div>
                <p className='p-txt' style={{marginTop: 30}}>I’ve 8+ years of experience in iOS technologies. Super passionate about beautiful UI and intuitive UX design. I believe in high quality, simplicity, collaboration, and tight feedback loops.</p>
                <button className={`p-txt-btn body-txt-btn body-txt-btn-${props.mode}`}>Let’s discuss your project with $0</button>
            </div>
            <div className="body-pic">
                <img src={profile} className='profile' alt="" />
            </div>
        </div>
            <div className="intro-label">
                <div className={`blue-effect-${props.mode}`}>

                </div>
                <div className="intro-scroll">
                    <img className={`icon-${props.mode}`}  style={{width:20,height:20, marginRight:5}} src={mouse} alt="" />
                    <p>Scroll down</p>
                    <img className={`icon-${props.mode}`} style={{width:10,height:10, marginLeft:5}} src={arrow} alt="" />
                </div>
            </div>
    </div>
    <div className="bio-info">
        <div className="age bio-data">
            <h1 style={{fontSize: 50}}>29</h1>
            <p className='p-txt'>Years Old</p>
        </div>
        <div className="experience bio-data">
            <h1 style={{fontSize: 50}}>8+</h1>
            <p className='p-txt'>Years Experience</p>
        </div>
        <div className="work bio-data">
            <h1 style={{fontSize: 50}}>18+</h1>
            <p className='p-txt'>Published Apps</p>
        </div>
        <div className="satisfied-clients bio-data">
            <h1 style={{fontSize: 50}}>60</h1>
            <p className='p-txt'>Satisfied Clients</p>
        </div>
    </div>
    </>
  )
}

export default Home