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
      updateCart:"/cart/update",
      product:"product/single/product"
    },
    user:{
        allWishlist:"whishlist/fetch",
        allCart:"cart/fetch",

    },
    auth:{
        login:"user/login",
        emailVerification:"user/verification",
        resendOTP:"user/resendotp",
        register:"user/create",
        forgotPassword:"user/forgetpassword",
        verifyOTP:"user/verification/forgetpassword",
        createPassword:"user/create_password"
    },
    contactUs:{
      create:"contact/create"
    }
   
  }