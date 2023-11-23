import React from 'react'
import './Shoppingbag.scss'
// import DiamondSharpIcon from '@mui/icons-material/DiamondSharp';
// https://mui.com/material-ui/material-icons/?query=diamond
import bagIMG from '../../assets/shoppingbag.png';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch} from 'react-redux'
import { addToCart, removeFromCart} from '../../app/features/counter/cartSlice';


function Shoppingbag() {
    const dispatch = useDispatch(); 
    const finalPrice = useSelector((state) => state.totalPrice.value)
    const allItems = useSelector((state) => state.cart.value)
  return (
    <div className='shoppingbag'>
        {(allItems.length === 0) ?
        <div className='emptybag__header'>
            <div className='emptybag__img'>
                <img src={ bagIMG }></img>
            </div>
            <div className='emptybag__text'>
                <h4>Your cart is currently empty.</h4>
                <span>At the moment, you have no products in your cart. Explore our sections for some shopping ideas.</span>
            </div>
            <div className='emptybag__button'>
                <Link to ='/'>Shop What's New</Link>
            </div>
        </div>: 
        <div className='shoppingbag__container'>
            <div className='shoppingbag__header'>
                <span>Shopping Bag</span>
                <span># of items</span>
            </div>
            {/* This will be a "map" */}
            <div className='shoppingbag__item'>
                <div className='shoppingbag__item-cont'>
                   <div className='shoppingbag__item-img'>
                        <img src='/Royal-E-commerce/src/assets/Comingsoon.png'></img>
                   </div>
                   <div className='shoppingbag__item-col'> 
                        <span>Artist</span>
                        <span>Item Name</span>
                        <div className='shoppingbag__item-row'>
                            <span>Color</span>
                            <span>Qty: 1</span>
                        </div>
                        <span>Price</span>
                   </div>
                </div>
                <span>Remove from Bag</span>
            </div>

            <div>
                <span>Order Summary</span>
                <span>Item Sub-Total</span>
                <span>Total(USD)</span>
                <div>
                    <span>Local taxes may apply at checkout</span>
                    <button>Proceed to</button>
                </div>
            </div>

            <span>here are the items</span>
            <span>Here's the final price {finalPrice}</span>
        </div>
    }
       
        
    </div>
  )
}

export default Shoppingbag
