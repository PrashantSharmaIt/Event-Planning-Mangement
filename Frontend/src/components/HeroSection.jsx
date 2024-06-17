import React from 'react'
import { Link } from 'react-router-dom'

const HeroSection = () => {
  return (
    <section className='hero'>
      <img src='/restaurant.jpg' alt='restaurant'/>
      <div className='item'>
        <h3>Dream Maker</h3>
        <div>
          <h1>Your Personal Favorate Foody</h1>
          <p>We believe that it is all about the Favorate Food and the small taste !!!</p>
          <Link to='contact' spy={true} smooth={true} duration={500}>Book Now</Link>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
