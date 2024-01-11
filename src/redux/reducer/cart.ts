/* eslint-disable no-undef */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartProduct:<any>[],
    cartCount: 0,
    wishListProduct: [],
    wishListCount: 0,
    openCart:false
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCartProduct: (state, action) => {
            console.log("🚀 ~ action:", action)
            let products = action?.payload?.products_id ||action?.payload?.products
         
            state.cartProduct = products?.map((product: any,index:number) => {
                let quantity = product?.quantity || action?.payload?.quantity[index]
                product.quantity = quantity === "undefined" || !quantity ? 1 : quantity
                return product
            })
            state.cartCount = products?.length
        },
        setOpenCart:(state)=>{
            state.openCart = !state.openCart
        },
        addWishLishProduct: (state, action) => {
            state.wishListProduct = action?.payload?.whishlist_products_id
            state.wishListCount = action?.payload?.whishlist_products_id?.length
        },
        addQuantity:(state,action)=>{
           let index = state?.cartProduct?.findIndex((product:any)=>product?.product?.id === action?.payload?.id||product?.id === action?.payload?.id ) 
           state.cartProduct[index].quantity = action?.payload?.quantity 
        }
    },

});
// eslint-disable-next-line no-empty-pattern
export const { addCartProduct,addWishLishProduct ,addQuantity,setOpenCart} = cartSlice.actions;

export default cartSlice.reducer;
