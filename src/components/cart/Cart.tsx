import { addQuantity } from '@/redux/reducer/cart'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Index = ({ openCart, setOpenCart }: any) => {
  const { cartProduct } = useSelector((state: { cart: any }) => state.cart)
  const dispatch = useDispatch()
  const handleProductQuantity = (id: string, quantity: number) => {
    console.log("🚀 ~ handleProductQuantity ~ id:", id)
    console.log("🚀 ~ handleProductQuantity ~ quantity:", quantity)
    dispatch(addQuantity({ id, quantity }))
  }

  return (
    <div className="min:w-[200px] relative ">
      {/* <label htmlFor="drawer-toggle" className="absolute top-0 left-0 inline-block p-4 transition-all duration-500 bg-indigo-500 rounded-lg peer-checked:rotate-180 peer-checked:left-64">
        <div className="w-6 h-1 mb-3 -rotate-45 bg-white rounded-lg">hello</div>
        <div className="w-6 h-1 rotate-45 bg-white rounded-lg"></div>
  
    
    </label> */}
      {openCart ? <div className="fixed top-0 right-0  z-20  h-full shadow-lg bg-white">
        <div className='flex mt-4 mx-5 items-end justify-start'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" className="h-7 w-7 cursor-pointer duration-150 hover:text-red-500">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
        <div className="mx-auto max-w-5xl justify-center px-6 h-[100vh] md:space-x-6 xl:px-0 overflow-y-auto">
          <div className="px-6 py-4">
            <div className="rounded-lg md:w-full">
              {cartProduct?.map((product) => {
                console.log("🚀 ~ {cartProduct?.map ~ product:", product)
                return <div className="justify-between mb-6 rounded-lg bg-white p-4 shadow-md sm:flex sm:justify-start">
                  <img src={product?.product?.productimage} alt="product-image" className="w-[100px] rounded-lg " />
                  <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                    <div className="mt-5 sm:mt-0">
                      <h2 className="text-lg font-bold text-gray-900">{product?.product?.title}</h2>
                      <p className="text-sm">${product?.product?.price}</p>
                      <div className="flex items-center border-gray-100 justify-start my-2">
                        <button   onClick={()=>handleProductQuantity(product?.product?.id,product?.quantity-1)} disabled={product?.quantity === "undefined" || !product?.quantity ? true : false} className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"> - </button>
                        <input className="h-8 w-8 border bg-white text-center text-xs outline-none" type="number" value={product?.quantity === "undefined" ? 0 : product?.quantity || 0} min="0" />
                        <button onClick={()=>handleProductQuantity(product?.product?.id,(product?.quantity === "undefined" ? 0 : product?.quantity)+1)} className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"> + </button>
                      </div>
                    </div>
                    <div className="mt-1 ml-2 flex justify-between sm:space-y-6  sm:block sm:space-x-6">
                      <div className="flex items-center space-x-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

              })}

            </div>
            <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
              <div className="mb-2 flex justify-between">
                <p className="text-gray-700">Subtotal</p>
                <p className="text-gray-700">$129.99</p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-700">Shipping</p>
                <p className="text-gray-700">$4.99</p>
              </div>
              <hr className="my-4" />
              <div className="flex justify-between">
                <p className="text-lg font-bold">Total</p>
                <div className="">
                  <p className="mb-1 text-lg font-bold">$134.98 USD</p>
                  <p className="text-sm text-gray-700">including VAT</p>
                </div>
              </div>
              <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">Check out</button>
            </div>
          </div>
          <h2 className="text-lg font-semibold">Drawer</h2>
          <p className="text-gray-500">This is a drawer.</p>
        </div>
      </div> : null}
    </div>
  )
}

export default Index