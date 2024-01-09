/* eslint-disable no-undef */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartProduct:<any>[],
    cartCount: 0,
    wishListProduct: [],
    wishListCount: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCartProduct: (state, action) => {
            console.log("🚀 ~ action:", action)
            state.cartProduct = action?.payload?.products
            state.cartCount = action?.payload?.products?.length
        },
        addWishLishProduct: (state, action) => {
            state.wishListProduct = action?.payload?.whishlist_products_id
            state.wishListCount = action?.payload?.whishlist_products_id?.length
        },
        addQuantity:(state,action)=>{
           let index = state?.cartProduct?.findIndex((product:any)=>product?.product?.id === action?.payload?.id ) 
           state.cartProduct[index].quantity = action?.payload?.quantity 
        }
    },

});
// eslint-disable-next-line no-empty-pattern
export const { addCartProduct,addWishLishProduct ,addQuantity} = cartSlice.actions;

export default cartSlice.reducer;
