import './Shoppingbag.scss'
// import DiamondSharpIcon from '@mui/icons-material/DiamondSharp';
// https://mui.com/material-ui/material-icons/?query=diamond
import bagIMG from '../../assets/shoppingbag.png';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch} from 'react-redux'


function Shoppingbag() {
    const dispatch = useDispatch(); 
    const finalPrice = useSelector((state) => state.totalPrice.value)
    const allItems = useSelector((state) => state.cart) //removed the value
    
  return (
    <div className='shoppingbag'>
        {(Object.keys(allItems).length === 0) ?
        
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
            {Object.entries(allItems).map(([key, value]) => (
               
            <div key={key} className='shoppingbag__item'>
                {console.log(key, 'this is the keys', value, "this is the value")}

                {/* {console.log(Object.keys(allItems), 'this is the object keys')}
                {console.log((allItems), 'this is all items ')} */}
                <div className='shoppingbag__item-cont'>
                   <div className='shoppingbag__item-img'>
                        <img src={value.url}></img>
                   </div>
                   <div className='shoppingbag__item-col'> 
                        <span>{value.name}</span>  
                        <span>{value.category}</span>
                        <div className='shoppingbag__item-row'>
                            <span>Black</span>
                            <span>Qty: {value.quantity}</span>
                        </div>
                        <span>${value.price}</span>
                   </div>
                </div>
                <div className='removeButton'><span>Remove from Bag</span></div>
            </div>
            ))}


            <div className='shoppingbag__orderSumm'>
                <span>Order Summary</span>
                <div className='shoppingbag__orderSumm-text'>
                    <span>Item Sub-Total</span>
                    <span>$2410</span>
                </div>
                <div className='shoppingbag__orderSumm-text'>
                    <span>Total(USD)</span>
                    <span>$2410</span>
                </div>
                <div className='shoppingbag__checkout'>
                    <div className='shoppingbag__checkout-tax'><span>Local taxes may apply at checkout</span></div>
                    <div className='shoppingbag__checkout-button'><button>Proceed to purchase</button></div>
                </div>
            </div>

        </div>
    }
       
        
    </div>
  )
}

export default Shoppingbag
