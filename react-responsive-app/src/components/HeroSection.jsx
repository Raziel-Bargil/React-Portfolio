import React from 'react'
import '../App.css';
import { Button } from './Button'
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src='/videos/video-2.mp4' autoPlay loop muted/>
            <h1>RAZIEL BAR-GL PORTFOLIO</h1>
            <p>Welcome to my portfolio,
            in this site you can view my latest work
            </p>
           <br></br>
                <div className="hero-btn">
                <Button className='btn' buttonStyle='btn--outline'
                buttonSize='btn--large'> GET STARTED </Button>

                <Button className='btn' buttonStyle='btn--primary'
                buttonSize='btn--large'> WATCH TRAILER <i className='far-fa-play-circle'/> </Button>
                </div>
        </div>
    )
}

export default HeroSection
