import { breadCrumbType } from '@/lib/interfaces/category';
import { setCategory } from '@/redux/reducer/category';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import BreadCrumb from './BreadCrumb';





const ProductHeader = ({ submitHandler }: any) => {
    const { category } = useSelector((state: any) => state?.category)
    console.log("🚀 ~ file: ProductHeader.tsx:8 ~ ProductHeader ~ category:", category)
    const dispatch = useDispatch()
 

    return (
        <>
            <div className="pl-0 w-full border-b-[1px] border-[#eee] flex items-stretch justify-center flex-wrap mb-[80px]">
                <div className="w-full flex p-[20px] flex-col items-start flex-nowrap pl-[0] ">
                    <div>
                        <BreadCrumb submitHandler={submitHandler}/>
                    </div>
                </div>
            </div>
            <div className='mb-[50px]'>
                <p className="text-base font-normal font-poppins text-[#404040]">{category?.[category?.length - 1]?.description}</p>
            </div>
        </>
    );
}

export default ProductHeader