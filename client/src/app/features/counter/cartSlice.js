import { createSlice } from '@reduxjs/toolkit'

const initialState = {}

export const cartSlice = createSlice({
    name: 'cart', 
    initialState, 
    reducers: {
        //in this case, the action would be the item itself.. 
        addItemToCart: (state, action) => {
            console.log('State before addItemToCart:', JSON.parse(JSON.stringify(state)));

            const item = action.payload; 
            if (state[item.id]) {
                // Directly increment the quantity
                state[item.id].quantity += 1; 
                
            } else {
                // Directly assign the item with initial quantity
                state[item.id] = {...item, quantity: 1};
                

            }
            console.log('State after addItemToCart:', JSON.parse(JSON.stringify(state)));

        },
        removeFromCart: (state, action) => {
            //
            
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

export const {addItemToCart, removeFromCart} = cartSlice.actions;
export default cartSlice.reducer 