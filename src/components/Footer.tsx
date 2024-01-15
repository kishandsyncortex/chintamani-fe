import { FC, useEffect, useState } from "react";
import footerLogo from "../../public/assests/Images/LogoFooter.png";
import Payment from "../../public/assests/Images/Payment.png";
import { Link, useNavigate } from "react-router-dom";
import { setCategory } from "@/redux/reducer/category";
import { useDispatch} from "react-redux";
import useApi from "@/hooks/useApi";
import { apiPath } from "@/lib/api-path";

const Footer: FC = () => {
  // const { category } = useSelector((state: any) => state?.category)
  const dispatch = useDispatch()
  const [categories, setCategories] = useState([]);

  const { apiAction } = useApi()
  const navigate = useNavigate()

  useEffect(() => {

    getCategories()

  }, []);

  const getCategories = async () => {
    let data = await apiAction({ method: "get", url: `${apiPath?.categories?.all}?page=1&pageSize=100` })
    setCategories(data?.data?.filter((category: any) => (category?.name === "Diamonds" || category?.name === "Diamond")))
  }
  const handleRoute = (category:any) => {

    dispatch(setCategory(category))
    navigate("/product-category")
  }

  return (
    <>
      <div className="w-full flex items-center text-center flex-nowrap flex-col bg-[#211c50] p-7">
        <div className="flex items-center md:flex-row flex-col">
          <div className="text-[#fff] font-medium text-[20px] md:mr-[130px] text-center w-full md:mb-0 mb-[10px]">
            Sign in for the latest Offer and deals
          </div>
          <div>
            <div className="relative">
              <p className="m-0 block">
                <input
                  type="text"
                  placeholder="Enter your email address"
                  className="bg-[#fff] border-none px-[15px] py-[10px] sm:w-[520px] max-[520px] w-full rounded-[4px]"
                />
              </p>
              <p className="m-0 block">
                <input
                  type="submit"
                  value="Join"
                  className="absolute right-0 top-[50%] translate-y-[-50%] translate-x-[0] bg-[#fff] px-[15px] py-[10px] border-l-[1px] border-[#211c50] text-[#211c50] font-medium font-poppins"
                />
              </p>
            </div>
          </div>
        </div>
      </div>
      <footer className="relative z-0 bg-[url('../../public/assests/Images/BgFooter.png')] after:bg-[#000] after:-z-[1] after:absolute after:top-0 after:left-0 after:opacity-[0.7] after:w-full after:h-full bg-no-repeat w-full bg-cover h-full sm:h-[350px] flex items-center">
        <div className="container mx-auto">
          <div className="flex sm:items-center justify-between md:max-w-[70%] max-w-full md:mx-auto sm:flex-row flex-col items-start mb-6">
            <div>
              <Link to={""}>
                <img src={footerLogo} alt="footerLogo" className="w-[300px]" />
              </Link>
            </div>
            <div className="sm:mb-0 mb-[10px] text-[#fff]">

              {categories?.map((category: any) => {
                return (
                  <div>
                    <h3 className="text-xl font-medium mb-4" onClick={() => handleRoute([{ path: category?.name, id: category?.id, name: "categoryid" }])}>Diamonds</h3>
                    <ul className="text-[15px] flex flex-col gap-1">
                      {category?.subCategories.map((subCategory: any) => {
                        return (
                          <li onClick={() => handleRoute([{ path: category?.name, id: category?.id, name: "categoryid" }, { description: subCategory?.description, path: subCategory?.name, id: subCategory?.id, name: "subCategoryid" }])}>
                            <Link to={""}>{subCategory?.name}</Link>
                          </li>

                        )
                      })}
                    </ul>
                  </div>
                )
              })}
              {/* <ul className="text-[15px] flex flex-col gap-1">
                <li>
                  <Link to={""}>Natural Diamonds</Link>
                </li>
                <li>
                  <Link to={""}>Lab Grown Diamonds</Link>
                </li>
                <li>
                  <Link to={""}>Fancy Diamonds</Link>
                </li>
                <li>
                  <Link to={""}>Maissanite Diamonds</Link>
                </li>
                <li>
                  <Link to={""}>Black Diamonds</Link>
                </li>
              </ul> */}
            </div>
            <div className="text-[#fff]">
              <h3 className="text-xl font-medium mb-4">Others</h3>
              <ul className="text-[15px] flex flex-col gap-1">
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  <Link to={"/faq"}>FAQ</Link>
                </li>
                <li>
                  <Link to={"/blog"}>Blog</Link>
                </li>
                <li>
                  <Link to={"/contact"}>Contact Us</Link>
                </li>
                <li>
                  <Link to={"/terms-condition"}>Terms Conditions</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex sm:items-center sm:flex-row justify-between flex-col md:max-w-[70%] max-w-full md:mx-auto text-[#fff]">
            <div className="text-[15px] font-poppins font-normal mb-3">
              Copy Right 2022 Chintamani Gems
            </div>
            <div>
              <img
                src={Payment}
                alt="Payment"
                className="sm:w-[200px] w-[150px]"
              />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
