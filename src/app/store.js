import { configureStore } from '@reduxjs/toolkit'
import totalPriceSliceReducer from './features/counter/totalPriceSlice';
import cartSliceReducer from './features/counter/cartSlice';

export const store = configureStore({
    reducer: {
        cart: cartSliceReducer, 
        totalPrice: totalPriceSliceReducer, 
    }, 
});