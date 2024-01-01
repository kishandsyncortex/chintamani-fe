import { FC } from "react";
import KImg from "../../public/assests/Images/k.png";
import RoundImg from "../../public/assests/Images/1.jpg";
import Princess from "../../public/assests/Images/2.jpg";
import Cushion from "../../public/assests/Images/8.jpg";
import Oval from "../../public/assests/Images/5.jpg";
import Emerald from "../../public/assests/Images/3.jpg";
import Heart from "../../public/assests/Images/11.jpg";
import Radiant from "../../public/assests/Images/9.jpg";
import Pear from "../../public/assests/Images/4.jpg";
import Marquise from "../../public/assests/Images/6.jpg";
import { Link } from "react-router-dom";

const PrevalentDiamonds: FC = () => {
  return (
    <section className="w-full bg-cover mt-[25px]">
      <div className="py-[54px] flex flex-col items-start px-5 container">
        <div className="w-full flex flex-nowrap items-center text-center flex-col">
          <h1 className="font-poppins text-[35px] font-bold w-full text-center text-[#211c50]">
            Prevalent Diamonds
          </h1>
          <img src={KImg} alt="KImg" className="max-w-[100%]" />
        </div>
        <div className="mt-[40px] hidden"></div>
        <div className="pt-[30px] flex w-full lg:flex-row flex-row items-stretch justify-center flex-wrap">
          <Link
            to={"/round-shape"}
            className="lg:w-[11%] md:w-[26%] w-[33.33%] flex items-center text-center px-[15px] flex-wrap flex-col justify-center decoration-none"
          >
            <img src={RoundImg} alt="RoundImg" className="max-w-[100%]" />
            <h6 className="text-base font-normal">Round</h6>
          </Link>
          <Link
            to={"/princess-shape"}
            className="lg:w-[11%] md:w-[26%] w-[33.33%] flex items-center text-center px-[15px] flex-wrap flex-col justify-center decoration-none"
          >
            <img src={Princess} alt="Princess" className="max-w-[100%]" />
            <h6 className="text-base font-normal">Princess</h6>
          </Link>
          <Link
            to={"/cushion-shape"}
            className="lg:w-[11%] md:w-[26%] w-[33.33%] flex items-center text-center px-[15px] flex-wrap flex-col justify-center decoration-none"
          >
            <img src={Cushion} alt="Cushion" className="max-w-[100%]" />
            <h6 className="text-base font-normal">Cushion</h6>
          </Link>
          <Link
            to={"/oval-shape"}
            className="lg:w-[11%] md:w-[26%] w-[33.33%] flex items-center text-center px-[15px] flex-wrap flex-col justify-center decoration-none"
          >
            <img src={Oval} alt="Oval" className="max-w-[100%]" />
            <h6 className="text-base font-normal">Oval</h6>
          </Link>
          <Link
            to={"/emerald-shape"}
            className="lg:w-[11%] md:w-[26%] w-[33.33%] flex items-center text-center px-[15px] flex-wrap flex-col justify-center decoration-none"
          >
            <img src={Emerald} alt="Emerald" className="max-w-[100%]" />
            <h6 className="text-base font-normal">Emerald</h6>
          </Link>
          <Link
            to={"/heart-shape"}
            className="lg:w-[11%] md:w-[26%] w-[33.33%] flex items-center text-center px-[15px] flex-wrap flex-col justify-center decoration-none"
          >
            <img src={Heart} alt="Heart" className="max-w-[100%]" />
            <h6 className="text-base font-normal">Heart</h6>
          </Link>
          <Link
            to={"/radiant-shape"}
            className="lg:w-[11%] md:w-[26%] w-[33.33%] flex items-center text-center px-[15px] flex-wrap flex-col justify-center decoration-none"
          >
            <img src={Radiant} alt="Radiant" className="max-w-[100%]" />
            <h6 className="text-base font-normal">Radiant</h6>
          </Link>
          <Link
            to={"/pear-shape"}
            className="lg:w-[11%] md:w-[26%] w-[33.33%] flex items-center text-center px-[15px] flex-wrap flex-col justify-center decoration-none"
          >
            <img src={Pear} alt="Pear" className="max-w-[100%]" />
            <h6 className="text-base font-normal">Pear</h6>
          </Link>
          <Link
            to={"/marquise-shape"}
            className="lg:w-[11%] md:w-[26%] w-[33.33%] flex items-center text-center px-[15px] flex-wrap flex-col justify-center decoration-none"
          >
            <img src={Marquise} alt="Marquise" className="max-w-[100%]" />
            <h6 className="text-base font-normal">Marquise</h6>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PrevalentDiamonds;
