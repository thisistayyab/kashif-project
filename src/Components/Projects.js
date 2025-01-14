import React from 'react'
import portImage1 from './images/1.png'
import portImage2 from './images/2.png'
import portImage3 from './images/3.png'
import portImage4 from './images/4.png'
import portImage5 from './images/5.png'
import portImage6 from './images/6.png'
import portImage7 from './images/7.png'
import portImage8 from './images/8.png'
import portImage9 from './images/9.png'
import portImage10 from './images/10.png'
import portImage11 from './images/11.png'
import portImage12 from './images/12.png'
import portImage13 from './images/13.png'
import Carousel from './Carousel'
import Card from './Card'

const Services = (props) => {
  return (
    
    <>
    <div className="portfolio">
        <div className="port-head">
            <h1 style={{fontSize: 50}}>Our Recent Work & Portfolio.</h1>
        </div>
        <div className="port-body">
            <Card
            image = {portImage1}
            name = {"Authenticator Plus"}
            description = {"Authenticator Plus is a simple yet powerful app to manage and generate 2-step verification tokens for..."}
            />
            <Card
            image = {portImage2}
            name = {"Traveling App"}
            description = {"Explore the world with ease! Plan, organize, and track your journeys all in one place, designed to make your..."}
            />
            <Card
            image = {portImage3}
            name =  {"Widget iOS Mobile App"}
            description = {"The app allows users to create, customize, and manage widgets for their iOS home screens, offering a variety..."}
            />
            <Card
            image = {portImage4}
            name =  {"Fonts App iOS App"}
            description = {"A fonts app allows users to browse, preview, and install various fonts on their devices for use in different appl..."}
            />
            <Card
            image = {portImage5}
            name =  {"QR Generator iOS Mobile App"}
            description = {"A QR Generator iOS mobile app typically allows users to create and manage QR codes easily. Here are some..."}
            />
            <Card
            image = {portImage6}
            name =  {"Logo Maker Mac App"}
            description = {"Your Logo Maker Mac app is designed to empower users to create professional-quality logos effortlessly..."}
            />
            <Card
            image = {portImage7}
            name =  {"Video Convertor iOS Mobile App"}
            description = {"Video Converter is an iOS mobile app that lets you easily convert videos into various formats quickly and effici..."}
            />
            <Card
            image = {portImage8}
            name =  {"AI logo Maker iOS Mobile App"}
            description = {"AI Logo Maker is an iOS app that lets you effortlessly create custom logos with smart design tools and temp..."}
            />
            <Card
            image = {portImage9}
            name =  {"AI Chat GPT-4 iOS Mobile App"}
            description = {"AI Chat GPT-4 iOS Mobile App: Experience seamless and intelligent conversations powered by the latest in..."}
            />
            <Card
            image = {portImage10}
            name =  {"Fonts iOS Mobile App"}
            description = {"Fonts iOS Mobile App provides a wide range of customizable fonts to enhance your text experience..."}
            />
            <Card
            image = {portImage11}
            name =  {"AI Image Generator iOS Mobile App"}
            description = {"An iOS mobile app that lets you create stunning AI-generated images quickly and easily."}
            />
            <Card
            image = {portImage12}
            name =  {"VPN iOS Mobile App"}
            description = {"VPN iOS Mobile App: Secure your online activity, protect your privacy, and access global content seamlessly..."}
            />
            <Card
            image = {portImage13}
            name = {"Fonts & Keyboard iOS Mobile App"}
            description = {"Fonts & Keyboard is an iOS mobile app that enhances your typing experience with unique fonts and customi..."}
            />
        </div>
    </div>
    <Carousel
    mode={props.mode}
    />
    </>
  )
}

export default Services