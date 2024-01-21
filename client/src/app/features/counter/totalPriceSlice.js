import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0, 
};

export const totalPriceSlice = createSlice({
    name: 'totalPrice', 
    initialState, 
    reducers: {
        incrementTotalPrice: (state, action) => {
            let currentValue = state.value; 
            currentValue += action.payload; 

            return {
                ...state, 
                value: currentValue
            }
            
        },
        decrementTotalPrice: (state, action) => {
            let currentValue = state.value; 
            currentValue -= action.payload; 

            return {
                ...state, 
                value: currentValue
            }
           
        }
       
      
    }
});

export const {incrementTotalPrice, decrementTotalPrice} = totalPriceSlice.actions;
export default totalPriceSlice.reducer