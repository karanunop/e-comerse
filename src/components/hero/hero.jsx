import React from 'react'
import './hero.css'
import Hand_icon from '../Assets/hand_icon.png'
import Arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'
const Hero = () => {
  return (
    <div className='hero'>
        <div className="heroLeft">
        <h2>New Arrivals only</h2>
        <div>
            
                <div className="hero-hand-icon">
                    <p>new</p>
                    <img src={Hand_icon} alt="" />
                </div>
                <p>Collections</p>
                <p>for everyone</p>
        </div>
        <div className="hero-latest-button">
            <div>
                latest Collections
                <img src={Arrow_icon} alt="" />
            </div>
        </div>
        </div>
        <div className="heroRight">
            <img src={hero_image} alt="" />
        </div>
      
    </div>
  )
}

export default Hero
