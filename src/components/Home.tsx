import { FC } from "react";
import Diamond from "./Diamond";
import PrevalentDiamonds from "./PrevalentDiamonds";
import NaturalDiamonds from "./NaturalDiamonds";
import MiningMap from "./MiningMap";
import NewArrivals from "./NewArrivals";
import BlackDiamond from "./BlackDiamond";
import StayUpdated from "./StayUpdated";

const Home: FC = () => {
  return (
    <>
      <Diamond />
      <PrevalentDiamonds />
      <NaturalDiamonds />
      <MiningMap />
      <NewArrivals />
      <BlackDiamond />
      <StayUpdated />
    </>
  );
};

export default Home;
