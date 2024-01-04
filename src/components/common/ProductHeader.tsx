import { breadCrumbType } from '@/lib/interfaces/category';
import { setCategory } from '@/redux/reducer/category';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ProductHeader = ({ submitHandler }: any) => {
    const { category } = useSelector((state: any) => state?.category)
    console.log("🚀 ~ file: ProductHeader.tsx:8 ~ ProductHeader ~ category:", category)
    const dispatch = useDispatch()
    const handleChange = async (item: breadCrumbType, index: number) => {
        dispatch(setCategory(category?.filter((_: any, i: number) => i <= index)))
        submitHandler(item, index)
    }

    return (
        <>
            <div className="pl-0 w-full border-b-[1px] border-[#eee] flex items-stretch justify-center flex-wrap mb-[80px]">
                <div className="w-full flex p-[20px] flex-col items-start flex-nowrap pl-[0] ">
                    <div>
                        <nav className="font-poppins text-[15px] text-[#211c50] font-medium before:table">
                            <Link to={"/"}>Home</Link>
                            {/* &nbsp;/&nbsp;Shapes&nbsp;/&nbsp;OVAL */}
                            {category?.map((item: breadCrumbType, index: number) => {
                                return (
                                    <>
                                        <span className="text-sm text-[#767676]">/</span>{" "}
                                        <button className={`font-poppins text-[15px] text-[#211c50] font-medium before:table ${(category?.length === index + 1 || !item?.id) ? "cursor-default" : "cursor-pointer"}  `} onClick={() =>category?.length === index + 1 || !item?.id ? {}: handleChange(item, index)}>
                                            {/* <Link to={category?.path1 ? "/" : ""}> */}
                                            {item?.path}

                                            {/* </Link> */}
                                        </button>
                                    </>
                                )
                            })}
                        </nav>
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