import React from 'react'
import './Hero.css'
import dark_arrow from './dark-arrow.png'
import ParticalesBackground from './ParticalesBackground'


const Hero = () => {
  return (

    <div className='hero container'>
      <div className='particles-container'>
        <ParticalesBackground/>
      </div>
      <div className="hero-text">
        <h1>Join our community and start creating today!</h1>
        <p>Unleash your creativity with our state-of-the-art 3D printing solutions. 
        Whether you're a hobbyist or designer we provide the tools and resources you need to bring your ideas to life. 
    </p>
        <button className='btn'> Explore more <img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Hero
