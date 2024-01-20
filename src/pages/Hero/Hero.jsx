import './Hero.scss'
import heroPicture2 from '/src/assets/herobacktrial.jpg'
import { useEffect, useState } from 'react'
import NAVBAROPTIONS from '../../data/navbaroptions'



function Hero({navbarOptions}) {
  //passes in a number
  console.log(navbarOptions, 'this is the navbar options'); 
  console.log(NAVBAROPTIONS[navbarOptions], 'this is the navbar options'); 

  const [selectedDisplay, setSelectedDisplay]= useState({}); 

  useEffect(() => {
    if (navbarOptions !== null) {
      setSelectedDisplay(NAVBAROPTIONS[navbarOptions])
    }
  }, [navbarOptions]);

  //runs initially AND when the dependency changes.. 

  return (
    <section className='hero'>
        {/* Navbar options is false and is not 0 */}
        {(!navbarOptions && (typeof navbarOptions !== "number")) ? <div className='hero__contents'>
          
          <img src={heroPicture2} alt="picture of a model in a classy expensive suit" />
          <div className='hero__contents-text'>
            <span>the names to know in menswear</span>
            <span>A series of exclusive collections, curated by Raphaël Clemont</span>
            <span>Shop the collection</span>
          </div>
        </div>: 
        <div className='navchoices'>
          <div className='navchoices__header'>
              <span>{selectedDisplay.category}</span>
              <span>{selectedDisplay.description}</span>
          </div>
          <div className='navchoices__container'>              
              {selectedDisplay.images && selectedDisplay.images.map((photo, index) => (
  <div key={index} className='navchoices__image'><img src={photo} alt="Display"></img></div>
))}
              </div>

              
          
          <div className='navchoices__container' >

          </div>  
         
        </div>}
    </section>
  )
}

export default Hero