import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import Cart from "../cart/Cart";
import { useState } from "react";
const RootLayout = () => {
  const [openCart, setOpenCart] = useState(false)
  return (
    <>
      <Header setOpenCart={()=>setOpenCart(!openCart)}/>
      <Cart setOpenCart={setOpenCart} openCart={openCart}/>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;
