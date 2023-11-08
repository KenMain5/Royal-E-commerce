import React from 'react'
import './Shoppingbag.scss'
// import DiamondSharpIcon from '@mui/icons-material/DiamondSharp';
// https://mui.com/material-ui/material-icons/?query=diamond
import bagIMG from '../../assets/shoppingbag.png';
import { Link } from 'react-router-dom';

function Shoppingbag() {
  return (
    <div className='shoppingbag'>
        <div className='shoppingbag__header'>
            <div className='shoppingbag__img'>
                <img src={ bagIMG }></img>
            </div>
            <div className='shoppingbag__text'>
                <h4>Your cart is currently empty.</h4>
                <span>At the moment, you have no products in your cart. Explore our sections for some shopping ideas.</span>
            </div>
            <div className='shoppingbag__button'>
                <Link to ='/'>Shop What's New</Link>
            </div>
        </div>
       
        
    </div>
  )
}

export default Shoppingbag
