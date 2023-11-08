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

  //states that prompt specific filter options to pop out 
  const [openFilterBox, setOpenFilterBox] = useState(false); 
  const [openSortBox, setOpenSortBox] = useState(false); 

  //manage the display of items within the component's state.
  const [itemOrder, setItemOrder] = useState(FEATURED); 

  //
  const [filter, setFilter] = useState('');
  const [sort, setSort] = useState(''); 

  //receives a setter and currentState and toggles the currentState boolean value
  const toggle = (componentSetter, componentState) => {
    componentSetter(!componentState); 
  };

  // const filterItems= (value) => {
  //   if (filterOrder === 'clothing') {
  //      let filteredFEATURED = FEATURED.filter((item) => {
  //       if (item.category === 'clothing') {
  //        return item; 
  //       }
  //       }); 
  //       setItemOrder('asc');
      
  //   }
  // };

  // const sortItemsFunction = (value) => {
  //   console.log('sorts items'); 
  // };

  // const sortItems = (sortOrder) => {
  //   if (sortOrder === 'asc') {
  //     let FEATUREDARRAY
  //     FEATURED.sort((a, b) => {
  //       //       if (a.price < b.price) {
  //       //         return -1; 
  //       //       } else if ( b.price < a.price) {
  //       //         return 1; 
  //       //       } else {
  //       //         return 0; 
  //       //       }
  //       //     });
  //   }
  // };


  





 









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
              <div className='options__block' onClick={() => toggle(setOpenFilterBox, openFilterBox)} >
                <div className='options__icon'><AddSharpIcon/></div>
                <span>Categories</span>
              </div>
              <div className='sortByOption option-left' style={{display: (openFilterBox) ? 'flex': 'none'}}>
             
                  <span>Clear</span>
                  <span onClick ={() => filterItems('clothing')} >Clothing</span>
                  <span>Bags</span>
                  <span>Tie</span>
             
              </div>

              <div className='options__block'>
                <div className='options__icon'><AddSharpIcon/></div>
                <span>Color</span>
              </div>
            </div>
            {/* Right */}
            <div className='options__fullScreen-right'>
            {/* ----------------Testing--------------- */}
                {/* <div className='options__block'>
                  <span>Testing {allItems}</span>
                </div>
                <div className='options__block'>
                  <span>Testing {finalPrice}</span>
                </div> */}
                <div className='options__block'>
                  <span>{itemOrder.length} products</span>
                </div>
                <div className='options__block' onClick={() => {toggle(setOpenSortBox, openSortBox)}}>
                  <div className='options__icon'><AddSharpIcon/></div>
                  <span>Sort By</span>
              </div>
              <div className='sortByOption option-right' style={{display: (openSortBox) ? 'flex': 'none'}}>
                  <span>New Items</span>
                  <span>Price (low-high)</span>
                  <span>Price (high-low)</span>
              </div>
            </div>
          </div>
          
        </div>
        <div className='main__contents'>
             <div className='main__contents-items'>
                {itemOrder.map((item) => (
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
