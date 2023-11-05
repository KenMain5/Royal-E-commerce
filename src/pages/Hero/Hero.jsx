import React from 'react'
import './Hero.scss'
import heroPicture2 from '/src/assets/herobacktrial.jpg'

function Hero() {
  return (
    <section className='hero'>
        <div className='hero__contents'>
          <img src={heroPicture2} alt="picture of a model in a classy expensive suit" />
          <div className='hero__contents-text'>
            <span>the names to know in menswear</span>
            <span>A series of exclusive collections, curated by Raphaël Clemont</span>
            <span>Shop the collection</span>
          </div>
        </div>
    </section>
  )
}

export default Hero