import K1 from "../../public/assests/Images/k1.png";
import Facebook from "../../public/assests/Images/facebook.svg";
import InstaGram from "../../public/assests/Images/instagram.svg";
import Twitter from "../../public/assests/Images/twitter.svg";
import Linkdin from "../../public/assests/Images/linkedin.svg";
import { Link } from "react-router-dom";
const StayUpdated = () => {
  return (
    <section className="w-full">
      <div className="py-[54px] px-[0] flex-flex-col items-start container">
        <div className="mb-[29px] w-full flex items-stretch justify-center flex-wrap">
          <div className="w-[100%] text-center items-center pb-[0] mb-[0] py-[20px] pl-[20px] flex flex-col flex-nowrap ">
            <h1 className="font-bold font-poppins w-full text-center text-[#211c50] text-[35px]">
              Stay Updated
            </h1>
            <img src={K1} alt="k1" className="w-[200px]" />
          </div>
        </div>
        <div className="w-full items-center text-center mt-[0] mb-[47px] flex flex-nowrap flex-col">
          <div className="py-[-10px] flex flex-wrap items-start justify-start">
            <Link
              to={""}
              className="border border-[#211c50] text-[30px] mr-[10px] mb-[10px] w-[1em] h-[1em] flex items-center justify-center decoration-none rounded-[10px]"
            >
              <img src={Facebook} alt="Facebook" />
            </Link>
            <Link
              to={""}
              className="border border-[#211c50] text-[30px] mr-[10px] mb-[10px] w-[1em] h-[1em] flex items-center justify-center decoration-none rounded-[10px]"
            >
              <img src={InstaGram} alt="InstaGram" />
            </Link>
            <Link
              to={""}
              className="border border-[#211c50] text-[30px] mr-[10px] mb-[10px] w-[1em] h-[1em] flex items-center justify-center decoration-none rounded-[10px]"
            >
              <img src={Twitter} alt="Twitter" />
            </Link>
            <Link
              to={""}
              className="border border-[#211c50] text-[30px] mr-[10px] mb-[10px] w-[1em] h-[1em] flex items-center justify-center decoration-none rounded-[10px]"
            >
              <img src={Linkdin} alt="Linkdin" />
            </Link>
          </div>
        </div>
        <div className="w-full items-stretch flex flex-wrap justify-center"></div>
        <div className="hidden w-full"></div>
      </div>
    </section>
  );
};

export default StayUpdated;
