/* eslint-disable no-undef */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartProduct: [],
    count: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCartProduct: (state, action) => {
            console.log("🚀 ~ file: category.ts:16 ~ action:", action)
            state.cartProduct = action?.payload
            state.count = action?.payload?.count
        },
    },

});
// eslint-disable-next-line no-empty-pattern
export const { addCartProduct } = cartSlice.actions;

export default cartSlice.reducer;
