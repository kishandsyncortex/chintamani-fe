import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import RoundedDiamond from "../../../public/assests/Images/roundedDiamon.png";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import api from '@/services/api';
import { apiPath } from '@/lib/api-path';
import { useSelector } from 'react-redux';

const ProductList = ({ products = [], fetchProducts }: any) => {
    const { user ,token} = useSelector((state: { auth: any; }) => state.auth)
    const addToWishList = async (id: string) => {
        const data = await api({ method: "post", url: `${apiPath?.product?.addWishlist}`, data: { userid: user?.id, productid: id },headers:{"Authorization":`Bearer ${token}`} })
        fetchProducts()
        console.log("🚀 ~ file: ProductList.tsx:12 ~ addToWishList ~ data:", data)
    }

    const addToCart = async (id: string) => {
        const data = await api({ method: "post", url: `${apiPath?.product?.addToCart}`, data: { userid: user?.id, productid: id },headers:{"Authorization":`Bearer ${token}`} })
        console.log("🚀 ~ file: ProductList.tsx:18 ~ addToCart ~ data:", data)
        fetchProducts()
    }



    return (<ul className="p-0 list-none clear-both after:table flex items-center flex-wrap gap-[3.5rem] cursor-pointer mb-[75px]">
        {products?.length ? products?.map((product: any) => {
            return <li className="max-w-full sm:max-w-[30%] float-left relative ml-0 bg-[#f1f1f1] rounded-[20px]">
                <div className="flex text-center items-center flex-col relative rounded-t-lg overflow-hidden p-0 h-full decoration-none text-[#211c50] font-semibold">
                    <img src={RoundedDiamond} alt="RoundedDiamond" className=" block shadow-none min-w-[250px]  h-[250px]" />
                </div>
                <div className="my-3 ml-3 border-b-[1px]">
                    <div className="text-[16px] font-bold text-[#211c50]">
                        {product?.title}
                    </div>
                    <div className="text-yellow-800">${product?.price}</div>
                </div>
                <div className="mb-3 mx-3 flex items-center justify-between">
                    <FontAwesomeIcon icon={faHeart} onClick={() => addToWishList(product?.id)} />
                    <button onClick={() => addToCart(product?.id)}>add to cart</button>
                </div>
            </li>;
        }) : <div className="flex justify-center w-full mt-14">No Products Found</div>}

    </ul>);
}

export default ProductList