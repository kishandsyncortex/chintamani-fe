// import useApi from "@/hooks/useApi";
// import { apiPath } from "@/lib/api-path";
// import React, { useCallback } from "react";
// import useRazorpay from "react-razorpay";
// import { useSelector } from "react-redux";

// const VITE_RAZORPAY_KEY_ID = import.meta.env.VITE_RAZORPAY_KEY_ID 
// const VITE_RAZORPAY_KEY_SECRET = import.meta.env.VITE_RAZORPAY_KEY_SECRET 

// const PaymentComponent = ({ totalPrice }) => {

//   const [Razorpay] = useRazorpay();

//   const {
//     auth: { token, user },
//   } = useSelector((state: { auth: any }) => state);
//   const { apiAction } = useApi();

//   const createOrder = async (params: any) => {
//     try {
//       const data = await apiAction({
//         method: "post",
//         url: `${apiPath?.checkOut?.createOrder}`,
//         data: { userid: params?.userid, totalprice: params?.totalprice },
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       return data;
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handlePayment = useCallback(async () => {
//     // const params = { userid: user?.id, totalprice: totalPrice };
//     // const order = await createOrder(params);
//     // console.log("🚀 ~ file: PaymentComponent.tsx:handlePayment ~ order:", order, order.data, totalPrice)
//     // const options = {
//     //   key: VITE_RAZORPAY_KEY_ID,
//     //   secret: VITE_RAZORPAY_KEY_SECRET,
//     //   amount: order.data.orderDetails.totalPrice,
//     //   currency: "USD",
//     //   name: "Acme Corp",
//     //   description: "Test Transaction",
//     //   order_id: order.data.orderDetails.id,
//     //   handler: (res) => {
//     //     console.log(res);
//     //   },
//     //   prefill: {
//     //     name: "Piyush Garg",
//     //     email: "youremail@example.com",
//     //     contact: "9999999999",
//     //   },
//     //   notes: {
//     //     address: "Razorpay Corporate Office",
//     //   },
//     //   theme: {
//     //     color: "#3399cc",
//     //   },
//     // };

//     // const rzpay = new Razorpay(options);
//     // rzpay.open();
//   }, []);
//   return (
//     <div>
//       <div className="">
//         <button onClick={handlePayment}>Click</button>
//       </div>
//     </div>
//   );
// };

// export default PaymentComponent;
