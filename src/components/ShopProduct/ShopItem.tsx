import { FC, useState } from "react";
import { Link } from "react-router-dom";
import Arrive from "../../../public/assests/Images/arrive1.png";
import Yellow from "../../../public/assests/Images/yellow.png";
import WhiteDiamond from "../../../public/assests/Images/whitediamond.png";
import RoundedDiamond from "../../../public/assests/Images/roundedDiamon.png";
import Crown from "../../../public/assests/Images/crown.png";
import MultiRangeSlider, { ChangeResult } from "multi-range-slider-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../ui/button";

const ShopItem: FC = () => {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(0);
  const [minValue2, setMinValue2] = useState(0);
  const [maxValue2, setMaxValue2] = useState(0);

  return (
    <>
      <section className="w-full">
        <div className="flex flex-col items-start">
          <div className="flex flex-wrap w-full items-stretch justify-center">
            <div className="p-[20px] flex flex-nowrap flex-col items-start">
              <div>
                <div className="px-0 py-[75px] flex w-full flex-row items-stretch flex-wrap border-b-[1px]">
                  <button className="text-sm font-poppins text-[#767676] font-semibold mr-1">
                    <Link to={"/"}>Home</Link>
                  </button>{" "}
                  <span className="text-sm text-[#767676]">/</span>{" "}
                  <button className="text-sm font-poppins text-[#767676] font-normal">
                    Shop
                  </button>
                </div>
                <div className="py-[15px]  border-t-[1px] border-[#eee]">
                  <div>
                    <div className="mt-[20px] text-left text-[16px] text-[#000] font-poppins font-medium uppercasemb mb-[15px]">
                      Price
                    </div>
                    <MultiRangeSlider
                      min={690}
                      max={13060}
                      step={1}
                      subSteps={true}
                      minValue={690}
                      maxValue={13060}
                      onInput={(e: ChangeResult) => {
                        setMinValue(e.minValue);
                        setMaxValue(e.maxValue);
                      }}
                      onChange={(e: ChangeResult) => {
                        setMinValue2(e.minValue);
                        setMaxValue2(e.maxValue);
                      }}
                    />
                  </div>
                </div>
                <div className="py-[15px] border-t-[1px] border-b-[1px] border-[#eee]">
                  <div>
                    <div className="mt-[20px] text-left text-[16px] text-[#000] font-poppins font-medium uppercasemb mb-[15px]">
                      Cart
                    </div>
                    <MultiRangeSlider
                      min={690}
                      max={13060}
                      step={1}
                      subSteps={true}
                      minValue={690}
                      maxValue={13060}
                      onInput={(e: ChangeResult) => {
                        setMinValue(e.minValue);
                        setMaxValue(e.maxValue);
                      }}
                      onChange={(e: ChangeResult) => {
                        setMinValue2(e.minValue);
                        setMaxValue2(e.maxValue);
                      }}
                    />
                  </div>
                </div>
                <div className="py-[15px] border-b-[1px] border-[#eee]">
                  <div>
                    <div className="mt-[20px] text-left text-[16px] text-[#000] font-poppins font-medium uppercasemb mb-[15px]">
                      CLARITY
                    </div>
                    <div className="flex gap-[5px]">
                      <Button
                        variant={"outline"}
                        className="border-[#211c50] hover:bg-[#211c50] hover:text-[#fff] text-[#211c50] w-[97px] py-[8px] px-[16px]"
                      >
                        IF
                      </Button>
                      <Button
                        variant={"outline"}
                        className="border-[#211c50] hover:bg-[#211c50] hover:text-[#fff] text-[#211c50] py-[8px] px-[16px] w-[97px]"
                      >
                        S11
                      </Button>
                      <Button
                        variant={"outline"}
                        className="border-[#211c50] hover:bg-[#211c50] hover:text-[#fff] text-[#211c50] py-[8px] px-[16px] w-[97px]"
                      >
                        S12
                      </Button>
                    </div>
                    <div className="flex gap-[5px] mt-[10px]">
                      <Button
                        variant={"outline"}
                        className="border-[#211c50] hover:bg-[#211c50] hover:text-[#fff] text-[#211c50] w-[97px] py-[8px] px-[16px]"
                      >
                        VS1
                      </Button>
                      <Button
                        variant={"outline"}
                        className="border-[#211c50] hover:bg-[#211c50] hover:text-[#fff] text-[#211c50] py-[8px] px-[16px] w-[97px]"
                      >
                        VS2
                      </Button>
                      <Button
                        variant={"outline"}
                        className="border-[#211c50] hover:bg-[#211c50] hover:text-[#fff] text-[#211c50] py-[8px] px-[16px] w-[97px]"
                      >
                        VVS1
                      </Button>
                    </div>
                    <div className="flex gap-[5px] mt-[10px]">
                      <Button
                        variant={"outline"}
                        className="border-[#211c50] hover:bg-[#211c50] hover:text-[#fff] text-[#211c50] w-[97px] py-[8px] px-[16px]"
                      >
                        VVS2
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="py-[15px] border-b-[1px] border-[#eee]">
                  <div>
                    <div className="mt-[20px] text-left text-[16px] text-[#000] font-poppins font-medium uppercasemb mb-[15px]">
                      CUT
                    </div>
                    <div className="flex gap-[5px]">
                      <Button
                        variant={"outline"}
                        className="border-[#211c50] hover:bg-[#211c50] hover:text-[#fff] text-[#211c50] w-[97px] py-[8px] px-[16px]"
                      >
                        EX
                      </Button>
                      <Button
                        variant={"outline"}
                        className="border-[#211c50] hover:bg-[#211c50] hover:text-[#fff] text-[#211c50] py-[8px] px-[16px] w-[97px]"
                      >
                        IDEL
                      </Button>
                      <Button
                        variant={"outline"}
                        className="border-[#211c50] hover:bg-[#211c50] hover:text-[#fff] text-[#211c50] py-[8px] px-[16px] w-[97px]"
                      >
                        VG
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="py-[15px] border-b-[1px] border-[#eee]">
                  <div>
                    <div className="mt-[20px] text-left text-[16px] text-[#000] font-poppins font-medium uppercasemb mb-[15px]">
                      COLOR
                    </div>
                    <div className="flex gap-[5px]">
                      <Button
                        variant={"outline"}
                        className="border-[#211c50] hover:bg-[#211c50] hover:text-[#fff] text-[#211c50] w-[58px] py-[8px] px-[16px]"
                      >
                        D
                      </Button>
                      <Button
                        variant={"outline"}
                        className="border-[#211c50] hover:bg-[#211c50] hover:text-[#fff] text-[#211c50] py-[8px] px-[16px] w-[58px]"
                      >
                        E
                      </Button>
                      <Button
                        variant={"outline"}
                        className="border-[#211c50] hover:bg-[#211c50] hover:text-[#fff] text-[#211c50] py-[8px] px-[16px] w-[58px]"
                      >
                        F
                      </Button>
                      <Button
                        variant={"outline"}
                        className="border-[#211c50] hover:bg-[#211c50] hover:text-[#fff] text-[#211c50] py-[8px] px-[16px] w-[58px]"
                      >
                        FA
                      </Button>
                    </div>
                    <div className="flex gap-[5px] mt-[10px]">
                      <Button
                        variant={"outline"}
                        className="border-[#211c50] hover:bg-[#211c50] hover:text-[#fff] text-[#211c50] w-[58px] py-[8px] px-[16px]"
                      >
                        FIP
                      </Button>
                      <Button
                        variant={"outline"}
                        className="border-[#211c50] hover:bg-[#211c50] hover:text-[#fff] text-[#211c50] py-[8px] px-[16px] w-[58px]"
                      >
                        FVB
                      </Button>
                      <Button
                        variant={"outline"}
                        className="border-[#211c50] hover:bg-[#211c50] hover:text-[#fff] text-[#211c50] py-[8px] px-[16px] w-[58px]"
                      >
                        FVP
                      </Button>
                      <Button
                        variant={"outline"}
                        className="border-[#211c50] hover:bg-[#211c50] hover:text-[#fff] text-[#211c50] py-[8px] px-[16px] w-[58px]"
                      >
                        G
                      </Button>
                    </div>
                    <div className="flex gap-[5px] mt-[10px]">
                      <Button
                        variant={"outline"}
                        className="border-[#211c50] hover:bg-[#211c50] hover:text-[#fff] text-[#211c50] w-[58px] py-[8px] px-[16px]"
                      >
                        H
                      </Button>
                      <Button
                        variant={"outline"}
                        className="border-[#211c50] hover:bg-[#211c50] hover:text-[#fff] text-[#211c50] py-[8px] px-[16px] w-[58px]"
                      >
                        I
                      </Button>
                      <Button
                        variant={"outline"}
                        className="border-[#211c50] hover:bg-[#211c50] hover:text-[#fff] text-[#211c50] py-[8px] px-[16px] w-[58px]"
                      >
                        J
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container w-full">
          <div className="w-full sm:mb-0 mb-3">
            <div className="mt-[48px] sm:flex"></div>
            <div className="w-full ml-5">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h1 className="font-poppins font-semibold text-[#000] text-2xl mb-2">
                    Shop
                  </h1>
                  <span className="text-xs font-poppins">
                    showing 1-16 of 187 results
                  </span>
                </div>
                <div className="font-arial text-xs text-left cursor-pointer overflow-hidden w-[198px] leading-0 mr-3">
                  <select
                    id="countries"
                    className="text-sm rounded-sm block w-full dark:placeholder-gray-400 dark:text-white"
                  >
                    <option selected>Deafault sorting</option>
                    <option value={"popularity"}>Sort by popularity</option>
                    <option value={"rating"}>Sort by average rating</option>
                    <option value={"date"}>Sort by latest</option>
                    <option value={"price"}>Sort by price: low to high</option>
                    <option value={"price-desc"}>
                      Sort by price: high to low
                    </option>
                  </select>
                </div>
              </div>

              <div className="">
                <ul className="p-0 list-none clear-both after:table flex items-center flex-wrap gap-[3.5rem] cursor-pointer mb-[75px]">
                  <li className="max-w-full sm:max-w-[20%] float-left relative ml-0 bg-[#f1f1f1] rounded-[20px]">
                    <div className="flex text-center items-center flex-col relative rounded-t-lg overflow-hidden p-0 h-full decoration-none text-[#211c50] font-semibold">
                      <img
                        src={RoundedDiamond}
                        alt="RoundedDiamond"
                        className="w-full block shadow-none  h-[250px]"
                      />
                    </div>
                    <div className="my-3 ml-3 border-b-[1px]">
                      <div className="text-[16px] font-bold text-[#211c50]">
                        Product Name
                      </div>
                      <div className="text-yellow-800">$420.31</div>
                    </div>
                    <div className="mb-3 mx-3 flex items-center justify-between">
                      <FontAwesomeIcon icon={faHeart} />
                      <button>add to cart</button>
                    </div>
                  </li>
                  <li className="max-w-full sm:max-w-[20%] float-left relative ml-0 bg-[#f1f1f1] rounded-[20px]">
                    <div className="flex text-center items-center flex-col relative rounded-t-lg overflow-hidden p-0 h-full decoration-none text-[#211c50] font-semibold">
                      <img
                        src={Yellow}
                        alt="Yellow"
                        className="w-[250px] block shadow-none  h-[250px]"
                      />
                    </div>
                    <div className="my-3 ml-3 border-b-[1px]">
                      <div className="text-[16px] font-bold text-[#211c50]">
                        Product Name
                      </div>
                      <div className="text-yellow-800">
                        <del>$440</del> $420.31
                      </div>
                    </div>
                    <div className="mb-3 mx-3 flex items-center justify-between">
                      <FontAwesomeIcon icon={faHeart} />
                      <button>add to cart</button>
                    </div>
                  </li>
                  <li className="max-w-full sm:max-w-[20%] float-left relative ml-0 bg-[#f1f1f1] rounded-[20px]">
                    <div className="flex text-center items-center flex-col relative rounded-t-lg overflow-hidden p-0 h-full decoration-none text-[#211c50] font-semibold">
                      <img
                        src={Crown}
                        alt="Crown"
                        className="w-full block shadow-none  h-[250px]"
                      />
                    </div>
                    <div className="my-3 ml-3 border-b-[1px]">
                      <div className="text-[16px] font-bold text-[#211c50]">
                        Product Name
                      </div>
                      <div className="text-yellow-800">
                        <del>$430</del> $420.31
                      </div>
                    </div>
                    <div className="mb-3 mx-3 flex items-center justify-between">
                      <FontAwesomeIcon icon={faHeart} />
                      <button>add to cart</button>
                    </div>
                  </li>
                  <li className="max-w-full sm:max-w-[20%] float-left relative ml-0 bg-[#f1f1f1] rounded-[20px]">
                    <div className="flex text-center items-center flex-col relative rounded-t-lg overflow-hidden p-0 h-full decoration-none text-[#211c50] font-semibold">
                      <img
                        src={WhiteDiamond}
                        alt="WhiteDiamond"
                        className="w-full block shadow-none  h-[250px]"
                      />
                    </div>
                    <div className="my-3 ml-3 border-b-[1px]">
                      <div className="text-[16px] font-bold text-[#211c50]">
                        Product Name
                      </div>
                      <div className="text-yellow-800">$420.31</div>
                    </div>
                    <div className="mb-3 mx-3 flex items-center justify-between">
                      <FontAwesomeIcon icon={faHeart} />
                      <button>add to cart</button>
                    </div>
                  </li>
                  <li className="max-w-full sm:max-w-[20%] float-left relative ml-0 bg-[#f1f1f1] rounded-[20px]">
                    <div className="flex text-center items-center flex-col relative rounded-t-lg overflow-hidden p-0 h-full decoration-none text-[#211c50] font-semibold">
                      <img
                        src={Arrive}
                        alt="Arrive"
                        className="w-full block shadow-none  h-[250px]"
                      />
                    </div>
                    <div className="my-3 ml-3 border-b-[1px]">
                      <div className="text-[16px] font-bold text-[#211c50]">
                        Product Name
                      </div>
                      <div className="text-yellow-800">$420.31</div>
                    </div>
                    <div className="mb-3 mx-3 flex items-center justify-between">
                      <FontAwesomeIcon icon={faHeart} />
                      <button>add to cart</button>
                    </div>
                  </li>
                  <li className="max-w-full sm:max-w-[20%] float-left relative ml-0 bg-[#f1f1f1] rounded-[20px]">
                    <div className="flex text-center items-center flex-col relative rounded-t-lg overflow-hidden p-0 h-full decoration-none text-[#211c50] font-semibold">
                      <img
                        src={Arrive}
                        alt="Arrive"
                        className="w-full block shadow-none  h-[250px]"
                      />
                    </div>
                    <div className="my-3 ml-3 border-b-[1px]">
                      <div className="text-[16px] font-bold text-[#211c50]">
                        Product Name
                      </div>
                      <div className="text-yellow-800">$420.31</div>
                    </div>
                    <div className="mb-3 mx-3 flex items-center justify-between">
                      <FontAwesomeIcon icon={faHeart} />
                      <button>add to cart</button>
                    </div>
                  </li>
                  <li className="max-w-full sm:max-w-[20%] float-left relative ml-0 bg-[#f1f1f1] rounded-[20px]">
                    <div className="flex text-center items-center flex-col relative rounded-t-lg overflow-hidden p-0 h-full decoration-none text-[#211c50] font-semibold">
                      <img
                        src={Arrive}
                        alt="Arrive"
                        className="w-full block shadow-none  h-[250px]"
                      />
                    </div>
                    <div className="my-3 ml-3 border-b-[1px]">
                      <div className="text-[16px] font-bold text-[#211c50]">
                        Product Name
                      </div>
                      <div className="text-yellow-800">$420.31</div>
                    </div>
                    <div className="mb-3 mx-3 flex items-center justify-between">
                      <FontAwesomeIcon icon={faHeart} />
                      <button>add to cart</button>
                    </div>
                  </li>
                  <li className="max-w-full sm:max-w-[20%] float-left relative ml-0 bg-[#f1f1f1] rounded-[20px]">
                    <div className="flex text-center items-center flex-col relative rounded-t-lg overflow-hidden p-0 h-full decoration-none text-[#211c50] font-semibold">
                      <img
                        src={Arrive}
                        alt="Arrive"
                        className="w-full block shadow-none  h-[250px]"
                      />
                    </div>
                    <div className="my-3 ml-3 border-b-[1px]">
                      <div className="text-[16px] font-bold text-[#211c50]">
                        Product Name
                      </div>
                      <div className="text-yellow-800">
                        <del>$450</del> $420.31
                      </div>
                    </div>
                    <div className="mb-3 mx-3 flex items-center justify-between">
                      <FontAwesomeIcon icon={faHeart} />
                      <button>add to cart</button>
                    </div>
                  </li>
                </ul>
                <nav
                  aria-label="Page navigation"
                  className="flex justify-center items-center mb-[75px]"
                >
                  <ul className="flex items-center -space-x-px h-8 text-sm">
                    <li>
                      <a
                        href="#"
                        className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                      >
                        1
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                      >
                        2
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        aria-current="page"
                        className="z-10 flex items-center justify-center px-3 h-8 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                      >
                        3
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                      >
                        4
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                      >
                        ...
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                      >
                        10
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                      >
                        11
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                      >
                        12
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                      >
                        <span className="sr-only">Next</span>
                        <svg
                          className="w-2.5 h-2.5 rtl:rotate-180"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 6 10"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="m1 9 4-4-4-4"
                          />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopItem;
