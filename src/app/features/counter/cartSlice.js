import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: [], 
}
/* Although we're aware that REDUX TOOLKIT lets us modify these items, 
we won't for the sake of immutabality. ". The use of ...state makes 
sure you're always returning the complete state object with any updates 
applied to the parts you intend to change." */
export const cartSlice = createSlice({
    name: 'cart', 
    initialState, 
    reducers: {
        /* Adds item to cart, only one quantity can be bought per item as of now */
        addToCart: (state, action) => {
            let itemArrays = [...state.value]; 
            itemArrays.push(action.payload); 
            
            return {
                ...state, 
                value: itemArrays
            }

        }, 
        /* Removes item to cart, only one quantity can be bought per item as of now.*/
        removeFromCart: (state, action) => {
            let itemArrays = [...state.value]; 
            if (itemArrays.indexOf(action.payload) !== -1) {
                itemArrays.splice(itemArrays.indexOf(action.payload), 1);
                
                return {
                    ...state, 
                    value: itemArrays
                }
            }
            return state; //We will always return current state as a fallback
        }
    }
})

export const {addToCart, removeFromCart} = cartSlice.actions;
export default cartSlice.reducer 