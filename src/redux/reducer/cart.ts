/* eslint-disable no-undef */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartProduct: [],
    cartCount: 0,
    wishListProduct: [],
    wishListCount: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCartProduct: (state, action) => {
            state.cartProduct = action?.payload?.products_id
            state.cartCount = action?.payload?.products_id?.length
        },
        addWishLishProduct: (state, action) => {
            state.wishListProduct = action?.payload?.whishlist_products_id
            state.wishListCount = action?.payload?.whishlist_products_id?.length
        },
    },

});
// eslint-disable-next-line no-empty-pattern
export const { addCartProduct,addWishLishProduct } = cartSlice.actions;

export default cartSlice.reducer;
