import React from 'react'
import './Main.scss'
import AddSharpIcon from '@mui/icons-material/AddSharp';
import FEATURED from '/src/data/featured.js'
import StarBorderPurple500SharpIcon from '@mui/icons-material/StarBorderPurple500Sharp';
import StarPurple500OutlinedIcon from '@mui/icons-material/StarPurple500Outlined';
import { useState } from 'react';
import AccessAlarmOutlinedIcon from '@mui/icons-material/AccessAlarmOutlined';



function Main() {
  const [addToCart, setAddToCart] = useState([]); 
  const [favorite, setFavorite] = useState();
  const handleFavorite = function(value) {
      if (addToCart.indexOf(value) === -1) { 
        setAddToCart(value); 
        
      }
  };
  return (
    <main className='main'>
        <div className='options'>
          <div className='options__smallScreen'>
            {/* Left Side */}
            <div className='options__section'> 
              <div className='options__icon'><AddSharpIcon/></div>
              <span>Filters</span>
            </div>
            {/* Right Side */}
            <div className='options__section'>
              <div className='options__icon'><AddSharpIcon/></div>
              <span>Sort By</span>
            </div>
          </div>
          
          <div className='options__fullScreen'>
            {/* Left */}
            <div className='options__fullScreen-left'>
              <div className='options__block'>
                <div className='options__icon'><AddSharpIcon/></div>
                <span>Categories</span>
              </div>

              <div className='options__block'>
                <div className='options__icon'><AddSharpIcon/></div>
                <span>Color</span>
              </div>
            </div>
            {/* Right */}
            <div className='options__fullScreen-right'>
                <div className='options__block'>
                  <span>15 products</span>
                </div>
                <div className='options__block'>
                  <div className='options__icon'><AddSharpIcon/></div>
                  <span>Sort By</span>
              </div>
            </div>
          </div>
          
        </div>
        <div className='main__contents'>
             <div className='main__contents-items'>
                {FEATURED.map((item) => (
                  <div className="itemCard" key={item.id}>
                    <div className='itemCard__img'><img src={item.url}></img></div>
                   
                    <div className='itemCard__title'>
                      <span>{item.name}</span>
                    </div>
                    <div className='itemCard__priceIcon'>
                        <span>{item.price}</span>
                          {/* <div onClick={} style={favorite ? {display: 'none'}: {display: 'initial'}} className='itemCard__FavoriteIcon itemCard__icon'><StarBorderPurple500SharpIcon /></div>
                          <div   style={favorite ? {display: 'initial'}: {display: 'none'}}   className='trial itemCard__icon'><StarPurple500OutlinedIcon/></div> */}
                    </div>
                  </div>
                ))}
             </div>
        </div>
    </main>
  )
}

export default Main
