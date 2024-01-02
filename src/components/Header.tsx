import { FC, useEffect, useState } from "react";
import MainLogo from "../../public/assests/Images/main-logo.png";
import LogoShape from "../../public/assests/Images/logo-shape.png";
import neturalDiamnond from "../../public/assests/Images/netural-diamnond.png";
import B1 from "../../public/assests/Images/b1.png";
import Rough from "../../public/assests/Images/rough.png";
import Moissanite from "../../public/assests/Images/90895_RI.png";
import Fancy from "../../public/assests/Images/fancy-1.png";
import CVD from "../../public/assests/Images/cvd.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faSearch, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import api from "@/services/api";
import { apiPath } from "@/lib/api-path";
import { Category, subCategory } from "@/lib/interfaces/category";
import { useDispatch } from "react-redux";
import { setCategory } from "@/redux/reducer/category";

const Header: FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [categories, setCategories] = useState([]);
  const dispatch = useDispatch()
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };
    getCategories()
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const getCategories = async () => {
    let data = await api({ method: "get", url: `${apiPath?.categories?.all}?page=1&pageSize=100` })
    setCategories(data?.data)
  }

  return (
    <>
      <header>
        {!isScrolled && (
          <div className="py-[7px] bg-[#211c50] w-full">
            <div className="container flex justify-between items-center">
              <div className="flex items-center justify-start">
                <div className="flex flex-nowrap flex-col items-start">
                  <Link
                    to={""}
                    className="flex flex-wrap text-center decoration-none flex-col items-center justify-center"
                  >
                    <div className="flex items-start w-full flex-row text-left">
                      <div className="flex flex-shrink-0 flex-grow-0 self-start mr-3 mb-0 mt-0">
                        <div className="text-[#fff] inline-flex rounded-[50%]">
                          <FontAwesomeIcon icon={faWhatsapp} size="xl" />
                        </div>
                      </div>
                      <div className="flex-grow-1 w-full sm:block hidden">
                        <h2 className="sm:text-[17px] text-[10px] text-[#fff] font-poppins">
                          +44 7425 380174 (24x7 Support)
                        </h2>
                        <p className="text-base mb-3 self-start m-0 hidden">
                          "Drag a button, link, or anything else into the icon
                          box to place it below the text. Lorem ipsum dolor sit
                          amet elit."
                        </p>
                        <div className="mt-5 hidden"></div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center flex-grow-1">
                <div className="flex flex-wrapflex-col">
                  <div className="relative">
                    <div className="flex items-center justify-center">
                      <div className="font-arial text-xs text-left cursor-pointer overflow-hidden w-[120px] leading-0 mr-3">
                        <select
                          id="countries"
                          className="text-sm rounded-lg block w-full p-2.5 dark:placeholder-gray-400 dark:text-white"
                        >
                          <option selected>country</option>
                          <option value="US">United States</option>
                          <option value="CA">Canada</option>
                          <option value="FR">France</option>
                          <option value="DE">Germany</option>
                        </select>
                      </div>
                      <div className="font-arial text-xs text-left cursor-pointer overflow-hidden w-[70px] leading-0">
                        <select
                          id="countries"
                          className="text-sm rounded-lg block w-full p-2.5 dark:placeholder-gray-400 dark:text-white"
                        >
                          <option value="INR">INR</option>
                          <option value="USD">USD</option>
                          <option value="FRA">EUR</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="w-full py-[18px]">
          <div className="container flex mx-auto flex-nowrap justify-start items-stretch">
            <div className="items-center justify-start sm:flex hidden">
              <div className="w-full flex flex-nowrap items-start flex-col">
                <div className="pt-2 relative text-gray-600">
                  <input
                    className="border-2 border-[#211c50] bg-[#f9f9f9] h-[44px] max-w-[220px] w-full px-5 pr-16 rounded-[10px] text-sm focus:outline-none"
                    type="search"
                    name="search"
                    placeholder="Search Product"
                  />
                  <button
                    type="submit"
                    className="absolute right-0 top-0 mt-5 mr-4"
                  >
                    <FontAwesomeIcon
                      icon={faSearch}
                      className="text-gray-600 h-4 w-4 fill-current"
                    />
                  </button>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center w-[500px]">
              <div className="flex flex-nowrap flex-col items-start">
                <Link to={""}>
                  <img
                    src={MainLogo}
                    alt="MainLogo"
                    className="max-w-[100%] w-[241px]"
                  />
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-end">
              <div className="flex flex-nowrap flex-col items-start">
                <div className="mb-[5px] justify-center flex flex-row w-full  items-stretch flex-wrap">
                  <div className="w-[33.33%] py-0 px-5 flex-col flex text-center items-center cursor-pointer">
                    <FontAwesomeIcon icon={faUser} size="xl" />
                  </div>
                  <div className="w-[33.33%] py-0 px-5 flex-col flex text-center items-center">
                    <Link to={""}>cfddscz</Link>
                  </div>
                  <div className="w-[33.33%] py-0 px-5 flex-col flex text-center items-center"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden w-full"></div>
      </header>
      {isScrolled && (
        <header className="fixed top-0 left-0 right-0 z-[1] bg-[#fff]">
          <div className="block w-full">
            <div className="container h-full flex flex-nowrap justify-start items-stretch">
              <div className="flex items-center justify-start">
                <div className="flex flex-nowrap flex-col items-start">
                  <Link to={""} className="py-[5px]">
                    <img
                      src={LogoShape}
                      alt="LogoShape"
                      className="max-w-[65%] w-[100px]"
                    />
                  </Link>
                </div>
              </div>
              <div className="w-[238px] flex items-center justify-center"></div>
              <div className="flex items-center justify-end">
                <div className="flex flex-wrap flex-col  items-start">
                  <nav className="font-poppins">
                    <div className="cursor-pointer hidden">
                      <div className="w-[40px] h-[40px] my-[10px] flex items-center justify-center">
                        <div className="flex justify-between flex-col">
                          <div className="bg-[#404040]"></div>
                          <div className="bg-[#404040]"></div>
                          <div className="bg-[#404040]"></div>
                        </div>
                      </div>
                    </div>
                    <div className="">
                      <ul className="flex-row flex p-0 m-0 list-none">
                        <li className="relative group">
                          <Link
                            to={""}
                            className="py-5 px-[15px] group-hover:bg-[#eee] group-hover:border-t-[3px] group-hover:border-[#211c50] text-sm border-t-[3px] border-transparent text-[#211c50] font-normal hover:bg-[#eee] flex items-center"
                          >
                            Home
                          </Link>
                        </li>
                        {categories?.map((category: Category) => {
                          return (
                            <li className="relative group list-none flex flex-col" onClick={() => category?.subCategories?.length ? {} : dispatch(setCategory([{ path: category?.name, id: category?.id, name: "categoryid" }]))}>
                              <Link
                                to={category?.subCategories?.length ? "" : "/product-category"}
                                className={`group-hover:bg-[#eee] group-hover:border-t-[3px] group-hover:border-[#211c50] py-5 px-[15px] text-sm text-[#211c50] font-normal border-t-[3px] border-transparent ${category?.subCategories?.length && "after:w-[0.35em] after:h-[0.35em] after:border-r-[0.1em] after:border-t-[0.1em] after:rotate-[135deg] after:border-[#211c50] after:ml-[0.5em] hover:visible hover:opacity-[1]"}  flex items-center `}
                              >
                                {category?.name}
                              </Link>

                              {category?.subCategories?.length ? <ul className="group-hover:visible group-hover:opacity-[1] bg-[#eee] min-w-[270px] z-[2147483641] p-0 flex-col whitespace-nowrap invisible opacity-0 flex  absolute top-[100%]">

                                {category?.subCategories?.map((subCategory: subCategory) => {
                                  return (
                                    <li className="flex flex-col list-none relative sub-group" onClick={() => subCategory?.innerCategories?.length ? {} : dispatch(setCategory([{ path: category?.name, id: category?.id, name: "categoryid" }, { description: subCategory?.description, path: subCategory?.name, id: subCategory?.id, name: "subCategoryid" }]))}>
                                      <Link
                                        to={subCategory?.innerCategories?.length ? "" : "/product-category"}
                                        className={`border-0 py-5 px-[15px] text-sm decoration-none flex items-center text-[#211c50] ${subCategory?.innerCategories?.length && "after:w-[0.35em] after:h-[0.35em] after:border-r-[0.1em] after:border-t-[0.1em] after:rotate-[135deg] after:border-[#211c50] after:ml-[0.5em] hover:visible hover:opacity-[1]"}  font-semibold`}
                                      >
                                        <img
                                          src={subCategory?.image?.[0] || CVD}
                                          alt="CVD"
                                          className="w-6 mr-[10px] align-middle"
                                        />{" "}
                                        {subCategory?.name}
                                      </Link>
                                      <ul className={`sub-group-hover:visible sub-group-hover:opacity-[1] bg-[#eee] min-w-[270px] z-[2147483641] p-0 flex-col whitespace-nowrap invisible opacity-0 flex  absolute top-[0] left-[100%]`}>
                                        {subCategory?.innerCategories?.map((innerCategory: subCategory) => {
                                          return (
                                            <li className="flex flex-col list-none relative" onClick={() => dispatch(setCategory([{ path: category?.name, id: category?.id, name: "categoryid" }, { path: subCategory?.name, id: subCategory?.id, name: "subCategoryid" }, { path: innerCategory?.name, id: innerCategory?.id, name: "innerCategoryid ", description: innerCategory?.description, }]))}>
                                              <Link
                                                to={"/product-category"}
                                                className="border-0 py-5 px-[15px] font-semibold text-sm decoration-none flex items-center text-[#211c50]"
                                              >
                                                {innerCategory?.name}
                                              </Link>
                                            </li>

                                          )
                                        })}
                                      </ul>
                                    </li>
                                  )
                                })}

                              </ul> : null}
                            </li>

                          )
                        })}

                        {/* <li className="relative diamond list-none flex flex-col">
                          <Link
                            to={"/jewellery"}
                            className="py-5 px-[15px] text-sm border-t-[3px] border-transparent text-[#211c50] font-normal hover:bg-[#eee] hover:border-t-[3px] hover:border-[#211c50] flex items-center"
                          >
                            Jewellery
                          </Link>
                        </li> */}

                        <li className="relative group diamond list-none flex  flex-col">
                          <Link
                            to={""}
                            className="group-hover:bg-[#eee] group-hover:border-t-[3px] group-hover:border-[#211c50] py-5 px-[15px] text-sm text-[#211c50] font-normal border-t-[3px] border-transparent after:w-[0.35em] after:h-[0.35em] after:border-r-[0.1em] after:border-t-[0.1em] after:rotate-[135deg] flex items-center after:border-[#211c50] after:ml-[0.5em] hover:visible hover:opacity-[1]"
                          >
                            Knowledge
                          </Link>
                          <ul className="sub-menu bg-[#eee] min-w-[270px] z-[2147483641] p-0 flex-col whitespace-nowrap invisible opacity-0 flex  absolute top-[100%] group-hover:visible group-hover:opacity-[1]">
                            <li className="flex flex-col list-none relative">
                              <Link
                                to={"/diamond-price"}
                                className="border-0 py-5 px-[15px] text-sm font-semibold decoration-none flex items-center text-[#211c50]"
                              >
                                Diamond Price
                              </Link>
                            </li>
                            <li className="flex flex-col list-none relative">
                              <Link
                                to={"/diamonds-shapes"}
                                className="border-0 py-5 px-[15px] text-sm font-semibold decoration-none flex items-center text-[#211c50]"
                              >
                                Diamonds Shapes
                              </Link>
                            </li>
                            <li className="flex flex-col list-none relative">
                              <Link
                                to={"/cs-diamond"}
                                className="border-0 py-5 px-[15px] text-sm font-semibold decoration-none flex items-center text-[#211c50]"
                              >
                                7 C’s of Diamond
                              </Link>
                            </li>
                          </ul>
                        </li>

                        <li className="relative group diamond list-none flex  flex-col">
                          <Link
                            to={""}
                            className="group-hover:bg-[#eee] group-hover:border-t-[3px] group-hover:border-[#211c50] py-5 px-[15px] text-sm text-[#211c50] font-normal border-t-[3px] border-transparent after:w-[0.35em] after:h-[0.35em] after:border-r-[0.1em] after:border-t-[0.1em] after:rotate-[135deg] flex items-center after:border-[#211c50] after:ml-[0.5em] hover:visible hover:opacity-[1]"
                          >
                            About
                          </Link>
                          <ul className="sub-menu bg-[#eee] min-w-[270px] z-[2147483641] p-0 flex-col whitespace-nowrap invisible opacity-0 flex  absolute top-[100%] group-hover:visible group-hover:opacity-[1]">
                            <li className="flex flex-col list-none relative">
                              <Link
                                to={"/why-us"}
                                className="border-0 py-5 px-[15px] text-sm font-semibold decoration-none flex items-center text-[#211c50]"
                              >
                                Why Us
                              </Link>
                            </li>
                          </ul>
                        </li>

                        <li className="relative diamond list-none flex flex-col">
                          <Link
                            to={"/shop"}
                            className="py-5 px-[15px] text-sm border-t-[3px] border-transparent font-normal text-[#211c50] hover:bg-[#eee] hover:border-t-[3px] hover:border-[#211c50] flex items-center"
                          >
                            Shop
                          </Link>
                        </li>
                        <li className="relative diamond list-none flex flex-col">
                          <Link
                            to={"/contact"}
                            className="py-5 px-[15px] text-sm border-t-[3px] border-transparent font-normal text-[#211c50] hover:bg-[#eee] hover:border-t-[3px] hover:border-[#211c50] flex items-center"
                          >
                            Contact
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </header>
      )}
    </>
  );
};

export default Header;
