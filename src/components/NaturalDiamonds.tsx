import { FC } from 'react'
import Banner1 from "../../public/assests/Images/diamond-banner1.png"
import LabGrown from "../../public/assests/Images/lab-grown-diamonds.png"
import LabGrown1 from "../../public/assests/Images/lab-grown-diamonds1.png"
import CVD from "../../public/assests/Images/cvd1.png"
import KImg from "../../public/assests/Images/k1.png"
import { Button } from './ui/button'

const NaturalDiamonds: FC = () => {
    return (
        <section className='w-full'>
            <div className='container lg:px-5 md:px-5 sm:px-5 px-0 h-[100%] pb-[54px]'>
                <div className='py-0 flex flex-row items-stretch flex-wrap justify-center'>
                    <div className='lg:pt-0 md:pt-0 lg:pb-[54px] md:pb-[54px] flex flex-col items-start px-0 pb-[10px]'>
                        <div className='w-full flex flex-row items-center justify-center flex-wrap'>
                            <div className='lg:w-[50%] md:w-[50%] w-full p-5 flex flex-nowrap flex-col items-start'>
                                <img src={Banner1} alt="Banner1" className='max-w-[100%] w-full h-auto' />
                                <div className='w-full hidden'></div>
                            </div>
                            <div className='lg:w-[50%] md:w-[50%] w-full p-5 flex flex-nowrap flex-col items-start'>
                                <h4 className='text-[22px] font-poppins text-[#211c50] font-semibold mb-[30px]'>Natural Diamonds</h4>
                                <div className='text-[#000] font-poppins font-normal mb-[30px]'>
                                    Beautiful, rare and formed billions years ago, directs from second generation diamond manufactorer & gemologists.
                                    Calibrated & Assorted Natural diamonds that are perfect match for all kinds of find jewelry. You can be 100% assured of whats going into making your perfect jewelry
                                </div>
                                <Button variant={"secondary"} className='mt-[25px] font-poppins text-[17px] font-medium rounded-[10px] py-2 px-[25px] text-[#ffff] bg-[#211c50] border-[1px] border-[#fff] outline-none hover:text-[#211c50] hover:border-[#211c50]'>Purchase Now</Button>
                            </div>
                        </div>
                    </div>
                    <div className='g:pt-0 md:pt-0 lg:pb-[54px] md:pb-[54px] flex flex-col items-start px-0 pb-[10px]'>
                        <div className='w-full flex lg:flex-row md:flex-row sm:flex-col-reverse flex-col-reverse items-center justify-center flex-wrap'>
                            <div className='lg:w-[50%] md:w-[50%] w-full p-5 flex flex-nowrap flex-col items-start'>
                                <h4 className='text-[22px] font-poppins text-[#211c50] font-semibold mb-[30px]'>Lab Grown Diamonds
                                </h4>
                                <div className='text-[#000] font-poppins font-normal mb-[30px]'>
                                    Laboratory-grown diamonds are a great option if you are looking for an affordable alternative to natural diamonds without compromising on brilliance and quality. Created through an advanced technological process designed to mimic natural conditions, lab-grown diamonds are chemically identical to mined diamonds.
                                </div>
                                <Button variant={"secondary"} className='mt-[25px] font-poppins text-[17px] font-medium rounded-[10px] py-2 px-[25px] text-[#ffff] bg-[#211c50] border-[1px] border-[#fff] outline-none hover:text-[#211c50] hover:border-[#211c50]'>Purchase Now</Button>
                            </div>
                            <div className='lg:w-[50%] md:w-[50%] w-full p-5 flex flex-nowrap flex-col items-start'>
                                <img src={LabGrown} alt="LabGrown" className='max-w-[100%] w-full h-auto' />
                                <div className='w-full hidden'></div>
                            </div>
                        </div>
                    </div>
                    <div className='g:pt-0 md:pt-0 lg:pb-[54px] md:pb-[54px] flex flex-col items-start px-0 pb-[10px]'>
                        <div className='w-full flex flex-row items-center justify-center flex-wrap'>
                            <div className='lg:w-[50%] md:w-[50%] w-full p-5 flex flex-nowrap flex-col items-start'>
                                <img src={CVD} alt="CVD" className='max-w-[100%] w-full h-auto' />
                                <div className='w-full hidden'></div>
                            </div>
                            <div className='lg:w-[50%] md:w-[50%] w-full p-5 flex flex-nowrap flex-col items-start'>
                                <h4 className='text-[22px] font-poppins text-[#211c50] font-semibold mb-[30px]'>Jewellery</h4>
                                <div className='text-[#000] font-poppins font-normal mb-[30px]'>
                                    Diamond jewellery has become a wardrobe staple as it offers a subtle addition of brilliance in everyday life. From finely-crafted pendants to intricately designed cocktail rings, discover the piece that will brighten your day for years to come.
                                </div>
                                <Button variant={"secondary"} className='mt-[25px] font-poppins text-[17px] font-medium rounded-[10px] py-2 px-[25px] text-[#ffff] bg-[#211c50] border-[1px] border-[#fff] outline-none hover:text-[#211c50] hover:border-[#211c50]'>Purchase Now</Button>
                            </div>
                        </div>
                    </div>
                    <div className='g:pt-0 md:pt-0 flex flex-col items-start px-0 pb-[10px]'>
                        <div className='w-full flex lg:flex-row md:flex-row sm:flex-col-reverse flex-col-reverse items-center justify-center flex-wrap'>
                            <div className='lg:w-[50%] md:w-[50%] w-full p-5 flex flex-nowrap flex-col items-start'>
                                <h4 className='text-[22px] font-poppins text-[#211c50] font-semibold mb-[30px]'>Moissanite Diamonds</h4>
                                <div className='text-[#000] font-poppins font-normal mb-[30px]'>
                                    Moissanite is indeed a Natural, Genuine Stone that is so rare in Nature that only a few small pieces still exist. It was first discovered in Canyon Diablo in a Meteorite in 1893, by Dr. Henri Moissan, who at the time mistook the stone for a Diamond.
                                    It is discovered later to be a new mineral similar to Diamonds, but at the same time, awfully different in many
                                </div>
                                <Button variant={"secondary"} className='mt-[25px] font-poppins text-[17px] font-medium rounded-[10px] py-2 px-[25px] text-[#ffff] bg-[#211c50] border-[1px] border-[#fff] outline-none hover:text-[#211c50] hover:border-[#211c50]'>Purchase Now</Button>
                            </div>
                            <div className='lg:w-[50%] md:w-[50%] w-full p-5 flex flex-nowrap flex-col items-start'>
                                <img src={LabGrown1} alt="LabGrown1" className='max-w-[100%] w-full h-auto' />
                                <div className='w-full hidden'></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex w-full flex-row items-stretch justify-center flex-wrap'>
                    <div className='p-5 flex flex-nowrap flex-col items-center'>
                        <h1 className='font-poppins w-full text-center text-[#211c50] text-[35px] font-bold'>Making of Diamonds</h1>
                        <img src={KImg} alt="KImg" className='max-w-[100%] w-full h-auto' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NaturalDiamonds
