import React from 'react'
import './Shoppingbag.scss'
// import DiamondSharpIcon from '@mui/icons-material/DiamondSharp';
// https://mui.com/material-ui/material-icons/?query=diamond



function Shoppingbag() {
  return (
    <div className='shoppingbag'>
        <div className='shoppingbag__header'>
            <h4>Your cart is currently empty.</h4>
            <span>At the moment, you have no products in your cart. Explore our sections for some shopping ideas.</span>
        </div>
        <div className='fashion'>
            <div className='clothing'>
                <div>
                    <img></img>
                </div>
                <span>Clothing</span>
            </div>
            <div className='shoes'>
                <div>
                    <img></img>
                </div>
                <span>Shoes</span>
            </div>
            <div className='bags'>
                <div>
                    <img></img>
                </div>
                <span>Bags</span>
            </div>
            <div className='accessories'>
                <div>
                    <img></img>
                </div>
                <span>Accessories</span>
            </div>
        </div>
        
    </div>
  )
}

export default Shoppingbag
