import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ShopItem from "./components/ShopProduct/ShopItem";
import RootLayout from "./components/layout/RootLayout";
import Home from "./components/Home";
import JewelleryProduct from "./components/Jewellery/JewelleryProduct";
import ContactUs from "./components/ContactUs/ContactUs";
import WhyUs from "./components/WhyUs/WhyUs";
import DiamondsShapes from "./components/DiamondsShapes/DiamondsShapes";
import DiamondPrice from "./components/DiamondPrice/DiamondPrice";
import CsDiamond from "./components/CsDiamond/CsDiamond";
import ScrollToTopButton from "./components/ScrollToTop/ScrollToTopButton";
import RoundShape from "./components/diamondshape/RoundShape";
import PrincessShape from "./components/diamondshape/PrincessShape";
import CushionShape from "./components/diamondshape/CushionShape";
import OvalShape from "./components/diamondshape/OvalShape";
import EmeraldShape from "./components/diamondshape/EmeraldShape";
import HeartShape from "./components/diamondshape/HeartShape";
import RadiantShape from "./components/diamondshape/RadiantShape";
import PearShape from "./components/diamondshape/PearShape";
import MarquiseShape from "./components/diamondshape/MarquiseShape";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux'
import { store } from "./redux/store";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
    ],
  },
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "shop",
        element: <ShopItem />,
      },
      {
        path: "product-category",
        element: <ShopItem />,
      },
      {
        path: "jewellery",
        element: <JewelleryProduct />,
      },
      {
        path: "contact",
        element: <ContactUs />,
      },
      {
        path: "why-us",
        element: <WhyUs />,
      },
      {
        path: "diamonds-shapes",
        element: <DiamondsShapes />,
      },
      {
        path: "diamond-price",
        element: <DiamondPrice />,
      },
      {
        path: "cs-diamond",
        element: <CsDiamond />,
      },
      {
        path: "round-shape",
        element: <RoundShape />,
      },
      {
        path: "princess-shape",
        element: <PrincessShape />,
      },
      {
        path: "cushion-shape",
        element: <CushionShape />,
      },
      {
        path: "oval-shape",
        element: <OvalShape />,
      },
      {
        path: "emerald-shape",
        element: <EmeraldShape />,
      },
      {
        path: "heart-shape",
        element: <HeartShape />,
      },
      {
        path: "radiant-shape",
        element: <RadiantShape />,
      },
      {
        path: "pear-shape",
        element: <PearShape />,
      },
      {
        path: "marquise-shape",
        element: <MarquiseShape />,
      },
    ],
  },
]);

const App = () => {
  return (
    <>
      <ToastContainer />
      <Provider store={store} >
      <RouterProvider router={router} />
      <ScrollToTopButton />

      </Provider>

    </>
  );
};

export default App;
