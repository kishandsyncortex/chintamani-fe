import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import Cart from "../cart/Cart";
import { useState } from "react";
import { useSelector } from "react-redux";
const RootLayout = () => {
  // const [openCart, setOpenCart] = useState(false)
  const {openCart} =  useSelector((state: {cart:any}) => state?.cart)
  return (
    <>
      <Header  />
      <Cart  />
      <main>
        <Outlet   />
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;
