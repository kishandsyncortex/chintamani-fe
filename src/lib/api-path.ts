export const apiPath = {
    categories:{
      all:"category/getall",
      product:"product/product",
      
    },
    color:{
      all:"color/fetch"
    },
    shape:{
      all:"shape/fetch"
    },
    cuts:{
      all:"cut/fetch"
    },
    clarity:{
      all:"clarity/fetch"
    },
    product:{
      addWishlist:"whishlist/create",
      removeWishlist:"whishlist/remove",
      addToCart:"cart/create",
      removeFromCart:"cart/remove",
    },
    user:{
        allWishlist:"whishlist/fetch",
        allCart:"cart/fetch",

    },
    auth:{
        login:"user/login"
    },
    contactUs:{
      create:"contact/create"
    }
   
  }