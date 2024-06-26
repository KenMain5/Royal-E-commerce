import { useEffect } from 'react';
import './Main.scss'
import AddSharpIcon from '@mui/icons-material/AddSharp';
import FEATURED from '/src/data/featured.js'
import StarBorderPurple500SharpIcon from '@mui/icons-material/StarBorderPurple500Sharp';
import StarPurple500OutlinedIcon from '@mui/icons-material/StarPurple500Outlined';
import { useState } from 'react';
import {incrementTotalPrice, decrementTotalPrice} from '../../app/features/counter/totalPriceSlice'
import { useSelector, useDispatch} from 'react-redux'
import { addItemToCart, removeFromCart} from '../../app/features/counter/cartSlice';
import { useRef } from 'react';

function Main({navbarOptions}) {
  const dispatch = useDispatch(); 
  const finalPrice = useSelector((state) => state.totalPrice.value)
  const allItems = useSelector((state) => state.cart)

  //states that prompt specific filter options to pop out 
  const [openFilterBox, setOpenFilterBox] = useState(false); 
  const [openSortBox, setOpenSortBox] = useState(false); 

  //manage the display of items within the component's state.
  const [itemOrder, setItemOrder] = useState(FEATURED); 

  //manages the current filter order
  const [filter, setFilter] = useState('');
  const [sort, setSort] = useState(''); 

  //toggles for 3 seconds when user adds an item to the cart
  const [itemAddedWindow, setItemAddedWindow] = useState(false); 
  
  //receives a setter and currentState and toggles the currentState boolean value
  const toggle = (componentSetter, componentState, oppositeSetter) => {
    componentSetter(!componentState); 
    oppositeSetter(false); 
  };  

  //filters item
  const filterItems = (filterOrder) => {
    if (filterOrder === 'clear') {
      setItemOrder([...FEATURED]);
    } else {
      console.log('this is the filter order', filterOrder); 
      setFilter(filterOrder); //clear? 
      let newFiltered = [...FEATURED]; 
      let result = newFiltered.filter((item) => item.category === filterOrder);
      setItemOrder(result);
    }
    setOpenFilterBox(false); 
  };

  /* Function for inserting in the localStorage  */ 
  const addToCartLocalStorage = (item) => {
    let cart; 
    if (!localStorage.getItem('cart')) {
      cart = {}; 
    } else {
      cart = JSON.parse(localStorage.getItem('cart')); 
    }
    if (cart[item.id]) {
      cart[item.id].quantity += 1; 
    } else {
      cart[item.id] = item; 
      cart[item.id].quantity = 1; 
    }
    console.log(cart, 'this is the cart');
    let serializedCart = JSON.stringify(cart); 
    localStorage.setItem('cart', serializedCart); 
  }

  /* Function for removing from the localStorage  */ 
  const subtractFromCartLocalStorage = (item) => {
    let cart; 
    if (localStorage.getItem('cart')) {
      cart = JSON.parse(localStorage.getItem('cart')); 
     
      if (cart[item.id]) {
        if (cart[item.id].quantity > 1) {
          cart[item.id].quantity -= 1; 
          
        } else {
          delete cart[item.id]; 
        }
      }
      let serializedCart = JSON.stringify(cart); 
      localStorage.setItem('cart', serializedCart); 
    } 
  };

  //Function for adding items into the global state
  const addToCartReduxStore = (item) => {
    dispatch(addItemToCart(item));
    console.log(item); 
   
    //if its add, then 
  }

  const removeFromCartReduxStore = (item) => {
    dispatch(removeFromCart(item)); 
  }

  // const addQuantityToItemReduxStore = (item) => {
   
  // }

  /*
  const trialFunction = function(value) {
    if (cart.includes(value.id)) {
      let newCart = [...cart]; 
      let index = newCart.indexOf(value.id);
      newCart.splice(index, 1)
      setCart(newCart); 
      dispatch(removeFromCart(value.name)); 
      dispatch(decrementTotalPrice(value.price)); 
      console.log('first if triggered'); 

    } else {
      setCart((prev) => [...prev, value.id]); 
      dispatch(addToCart(value.name)); 
      dispatch(incrementTotalPrice(value.price)); 
      console.log('bought else triggered'); 
      triggerCartAdded(); 
    }
  };
  
  
  */ 




  //Function for sorting the items in the main component
  const sortItems = (sortOrder) => {
    setOpenSortBox(!openSortBox); 
    if (sortOrder === 'ascending') {
      let itemOrderCopy = [...itemOrder];
      itemOrderCopy.sort((a, b) => {
        if (a.price < b.price) {
        return -1; 
        } else if (a.price > b.price) {
        return 1; 
        } else {
        return 0; 
        }});
      setItemOrder(itemOrderCopy);
    } else if (sortOrder === 'descending'){
      let itemOrderCopy = [...itemOrder];
      itemOrderCopy.sort((a, b) => {
        if (a.price > b.price) {
        return -1; 
        } else if (a.price < b.price) {
        return 1; 
        } else {
        return 0; 
        }
      });
      setItemOrder(itemOrderCopy);
      setOpenSortBox(!openSortBox); 
    } else {
      setItemOrder(FEATURED);
    }
  };

  //Ref and function for closing filter and sort box when outside click is done
  const filterBoxRef = useRef(null); 
  const sortBoxRef = useRef(null); 

    const handleClickOutside = (event) => {
      if (filterBoxRef.current && !filterBoxRef.current.contains(event.target)) {
        setOpenFilterBox(false);
      }
      if (sortBoxRef.current && !sortBoxRef.current.contains(event.target)) {
        setOpenSortBox(false);
      }
    };
  
    useEffect(() => {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);

    useEffect(() => {
      if (navbarOptions !== null) {
        if (navbarOptions === 0) filterItems('clothing'); 
        else if (navbarOptions === 1) filterItems('clothing'); 
        else if (navbarOptions === 2) filterItems('comingsoon'); 
        else if (navbarOptions === 3) filterItems('bag');
        else if (navbarOptions === 4) filterItems('tie');
      }
    } ,[navbarOptions]); 

  //Function that gets triggered when user buys an item
  const triggerCartAdded = () => {
    setItemAddedWindow(true); 
    console.log('state of addedWindow', itemAddedWindow)
    setTimeout(() => {
      setItemAddedWindow(false);
    }, 4000); 
  }

  //Keeps track of what is favorited, UI change
  const [cart, setCart] = useState([]); 

  /*Function gets invoked when the star icon is pressed, it gets added 
  or removed cart items from the global state, as well as the price*/
  const trialFunction = function(item) {
    if (cart.includes(item.id)) {
      let newCart = [...cart]; 
      let index = newCart.indexOf(item.id);
      newCart.splice(index, 1)
      setCart(newCart); 


      subtractFromCartLocalStorage(item); 
      removeFromCartReduxStore(item); 

    } else {
      setCart((prev) => [...prev, item.id]); 
      addToCartLocalStorage(item); 
      addToCartReduxStore(item)
      triggerCartAdded(); 
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
              <div className='options__block' onClick={() => toggle(setOpenFilterBox, openFilterBox, setOpenSortBox)} >
                <div className='options__icon'><AddSharpIcon/></div>
                <span>Categories</span>
              </div>
              <div className='sortByOption option-left' ref={filterBoxRef}  style={{display: (openFilterBox) ? 'flex': 'none'}}>
                  <span onClick ={() => filterItems('clear')}>Clear</span>
                  <span onClick ={() => filterItems('clothing')} >Clothing</span>
                  <span onClick ={() => filterItems('bag')}>Bags</span>
                  <span onClick ={() => filterItems('tie')}>Tie</span>
              </div>

              <div className='options__block'>
                <div className='options__icon'><AddSharpIcon/></div>
                <span>Color</span>
              </div>
            </div>
            {/* Right */}
            <div className='options__fullScreen-right'>
                  {/* Test */}
                  <div className='priceTest'>
                    <span>{finalPrice}</span>
                  </div>
                   {/* Test */}
                
                <div className='options__block'>
                  
                  <span>{itemOrder.length} products</span>
                  <div style={{display: (itemAddedWindow) ? 'flex': 'none'}} className='addedToCartNotif'>
                    <span>The item was added to your cart</span>
                  </div>
                </div>
                <div className='options__block'  onClick={() => {toggle(setOpenSortBox, openSortBox, setOpenFilterBox)}}>
                  <div className='options__icon'><AddSharpIcon/></div>
                  <span>Sort By</span>
                  {/* <div className='addToCart'>
                      <span>added to cart</span>
                  </div> */}
              </div>
              <div className='sortByOption option-right' ref={sortBoxRef} style={{display: (openSortBox) ? 'flex': 'none'}}>
                  <span onClick={() => sortItems('clear')}>New Items</span>
                  <span onClick={() => sortItems('ascending')}>Price (low-high)</span>
                  <span onClick={() => sortItems('descending')}>Price (high-low)</span>
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
