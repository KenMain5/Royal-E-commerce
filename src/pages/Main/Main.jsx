import React from 'react'
import './Main.scss'
import AddSharpIcon from '@mui/icons-material/AddSharp';
import FEATURED from '/src/data/featured.js'
import StarBorderPurple500SharpIcon from '@mui/icons-material/StarBorderPurple500Sharp';
import StarPurple500OutlinedIcon from '@mui/icons-material/StarPurple500Outlined';
import { useState } from 'react';
import AccessAlarmOutlinedIcon from '@mui/icons-material/AccessAlarmOutlined';
import {incrementTotalPrice, decrementTotalPrice} from '../../app/features/counter/totalPriceSlice'
import { useSelector, useDispatch} from 'react-redux'
import { addToCart, removeFromCart} from '../../app/features/counter/cartSlice';


function Main() {
  const dispatch = useDispatch(); 
  const finalPrice = useSelector((state) => state.totalPrice.value)
  const allItems = useSelector((state) => state.cart.value)

  //Filter button that would prompt filter options to pop out
  const [openFilterBox, setOpenFilterBox] = useState(false); 
  const handleFilterClick = function(){
      setOpenFilterBox(!openFilterBox);
  };

  //Keeps track of what is favorited, UI change
  const [cart, setCart] = useState([]); 

  /*Function gets invoked when the star icon is pressed, it gets added 
  or removed cart items from the global state, as well as the price*/
  const trialFunction = function(value) {
    if (cart.includes(value.id)) {
      let newCart = [...cart]; 
      let index = newCart.indexOf(value.id);
      newCart.splice(index, 1)
      setCart(newCart); 
      dispatch(addToCart(value.name)); 
      dispatch(incrementTotalPrice(value.price)); 
    } else {
      setCart((prev) => [...prev, value.id]); 
      dispatch(removeFromCart(value.name)); 
      dispatch(decrementTotalPrice(value.price)); 
    }
  };



  return (
    <main className='main'>
            {/* <div className='sortByOption' style={{display: (!openFilterBox) ? 'none': 'initial'}}>
                <span>a</span>
                <span>a</span>
                <span>a</span>
            </div> */}
        <div className='options'>
            {/* <div className='filtersOption' style={{display: (!openFilterBox) ? 'none': 'absolute'}} >
                <span>Accessories</span>
                <span>Bags</span>
                <span>Clothing</span>
            </div> */}
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
                <div>
                  <span>{allItems}</span>
                </div>
                <div>
                  <span>{finalPrice}</span>
                </div>
                {/* <div className='options__block'>
                  <span>15 products</span>
                </div>
                <div className='options__block'>
                  <div className='options__icon'><AddSharpIcon/></div>
                  <span>Sort By</span>
              </div> */}
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
                        <span>${item.price}</span>                        
                        <div style={{display: ((cart.includes(item.id)) ? "none": "initial")}}  onClick={() => {trialFunction(item)}} className='itemCard__FavoriteIcon itemCard__icon'><StarBorderPurple500SharpIcon /></div>
                        <div style={{display: ((cart.includes(item.id)) ? "initial": "none")}}  onClick={() => {trialFunction(item)}} className='itemCard__icon'><StarPurple500OutlinedIcon/></div>
                    </div>
                  </div>
                ))}
             </div>
        </div>
    </main>
  )
}

export default Main
