import { FC, useEffect, useState } from "react";
import K1 from "../../public/assests/Images/k1.png";
import Arrive from "../../public/assests/Images/arrive1.png";
import blackDImg from "../../public/assests/Images/blackD.png";
import neklessImg from "../../public/assests/Images/nekless.png";
import { Button } from "./ui/button";
import useApi from "@/hooks/useApi";
import { apiPath } from "@/lib/api-path";
import { productType } from "@/lib/interfaces/category";

const NewArrivals: FC = () => {
const [latestProducts, setLatestProducts] = useState([])
const { apiAction } = useApi()

useEffect(() => {
  getLatestProduct()
}, [])

const getLatestProduct =async () => {
  const data = await apiAction({ method: "get", url: `${apiPath?.categories?.product}?sort=3` })
  setLatestProducts(data?.data?.product)
  console.log("🚀 ~ file: NewArrivals.tsx:21 ~ getLatestProduct ~ data:", data)
}

  return (
    <section className="w-full">
      <div className="flex flex-col items-center py-[75px] px-[20px] container">
        <div className="px-0 pb-[30px] flex w-full flex-row items-stretch justify-center flex-wrap">
          <div className="w-full flex items-center text-center py-0 px-5 flex-nowrap flex-col">
            <h1 className="font-poppins  w-full text-center text-[#211c50] text-[35px] font-bold">
              <div>New Arrivals</div>
            </h1>
            <img src={K1} alt="k1" className="w-[120px]" />
          </div>
        </div>
        <div className="mb-[45px]">
          <h1 className="font-poppins font-semibold text-[#000] text-2xl text-center mb-2">
            Shop
          </h1>
          <div className="">
            <ul className="p-0 list-none clear-both after:table flex items-center flex-wrap justify-center gap-10 cursor-pointer">
              {latestProducts?.map((product:productType)=>{
                return (
                  <li className="max-w-full lg:w-[25%] md:w-[25%] float-left relative ml-0 bg-[#f1f1f1]  rounded-[20px]">
                    <div className="flex text-center items-center flex-col relative rounded-t-lg overflow-hidden p-0 h-full decoration-none text-[#211c50] font-semibold">
                      <img
                        src={product?.productimage?.[0]||''}
                        alt="Arrive"
                        className="w-full block shadow-none h-[250px]"
                      />
                    </div>
                    <div className="my-3 ml-3">
                      <div className="max-w-full overflow-hidden text-ellipsis whitespace-nowrap">{product?.title}</div>
                      <div className="text-[#211c50] font-medium">
                        <del>$440</del> ${product?.price}
                      </div>
                    </div>
                  </li>
                )
              })}
              {/* <li className="max-w-full lg:w-[25%] md:w-[25%] float-left relative ml-0 bg-[#f1f1f1] rounded-[20px]">
                <div className="flex text-center items-center flex-col relative rounded-t-lg overflow-hidden p-0 h-full decoration-none text-[#211c50] font-semibold">
                  <img
                    src={Arrive}
                    alt="Arrive"
                    className="w-full block shadow-none h-[250px]"
                  />
                </div>
                <div className="my-3 ml-3">
                  <div>Product Name</div>
                  <div className="text-[#211c50] font-medium">
                    <del>$440</del> $420.31
                  </div>
                </div>
              </li>
              <li className="max-w-full lg:w-[25%] md:w-[25%] float-left relative ml-0 bg-[#f1f1f1] rounded-[20px]">
                <div className="flex text-center items-center flex-col relative rounded-t-lg overflow-hidden p-0 h-full decoration-none text-[#211c50] font-semibold">
                  <img
                    src={blackDImg}
                    alt="blackDImg"
                    className="w-full block shadow-none h-[250px]"
                  />
                </div>
                <div className="my-3 ml-3">
                  <div>Product Name</div>
                  <div className="text-[#211c50] font-medium">
                    <del>$440</del> $420.31
                  </div>
                </div>
              </li>
              <li className="max-w-full lg:w-[25%] md:w-[25%] float-left relative ml-0 bg-[#f1f1f1] rounded-[20px]">
                <div className="flex text-center items-center flex-col relative rounded-t-lg overflow-hidden p-0 h-full decoration-none text-[#211c50] font-semibold">
                  <img
                    src={neklessImg}
                    alt="neklessImg"
                    className="w-full block shadow-none h-[250px]"
                  />
                </div>
                <div className="my-3 ml-3">
                  <div>Product Name</div>
                  <div className="text-[#211c50] font-medium">
                    <del>$440</del> $420.31
                  </div>
                </div>
              </li>
              <li className="max-w-full lg:w-[25%] md:w-[25%] float-left relative ml-0 bg-[#f1f1f1] rounded-[20px]">
                <div className="flex text-center items-center flex-col relative rounded-t-lg overflow-hidden p-0 h-full decoration-none text-[#211c50] font-semibold">
                  <img
                    src={Arrive}
                    alt="Arrive"
                    className="w-full block shadow-none h-[250px]"
                  />
                </div>
                <div className="my-3 ml-3">
                  <div>Product Name</div>
                  <div className="text-[#211c50] font-medium">
                    <del>$440</del> $420.31
                  </div>
                </div>
              </li> */}
            </ul>
          </div>
        </div>
        <div className="flex items-center justify-center text-[17px] font-medium font-poppins">
          <Button
            variant={"outline"}
            className="border border-[#211c50] py-[8px] px-[25px] hover:text-[#fff] hover:bg-[#211c50]"
          >
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
