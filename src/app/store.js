import { configureStore } from '@reduxjs/toolkit'
import totalPriceSliceReducer from './features/counter/totalPriceSlice';
import cartSliceReducer from './features/counter/cartSlice';
import {loadStateFromLocalStorage} from '../helperfuncs/localstorage/localStorage'


const persistedState = loadStateFromLocalStorage(); 

export const store = configureStore({
    reducer: {
        cart: cartSliceReducer, 
        totalPrice: totalPriceSliceReducer, 
    }, 
    preloadedState: persistedState, 
});

store.subscribe(() => {
    const stateToSave = store.getState().cart;
    console.log('Saving state to local storage:', stateToSave);
    localStorage.setItem('cart', JSON.stringify(stateToSave));
});
  
  export default store;