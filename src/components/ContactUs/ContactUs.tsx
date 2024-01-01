import { Link } from "react-router-dom";

const ContactUs = () => {
  return (
    <section className="w-full">
      <div className="flex flex-col items-start">
        <div className="flex flex-wrap w-full items-stretch justify-center">
          <div className="p-[20px] flex flex-nowrap flex-col items-start">
            <div>
              <div className="px-0 py-[75px] flex w-full flex-row items-stretch flex-wrap border-b-[1px]">
                <button className="text-sm font-poppins text-[#767676] font-semibold mr-1">
                  <Link to={"/"}>Home</Link>
                </button>{" "}
                <span className="text-sm text-[#767676]">/ </span>{" "}
                <button className="text-sm font-poppins text-[#767676] font-normal">
                  Contact
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start py-[75px] px-[20px] container">
        <div className="w-full flex items-stretch justify-center flex-wrap">
          <div className="p-[20px] flex flex-nowrap flex-col items-start">
            <div className="flex flex-nowrap flex-col items-start">
              <h4 className="text-[20px] font-poppins font-bold text-[#404040]">
                ADDRESS
              </h4>
              <div className="text-[#404040] text-base font-normal font-poppins">
                Keas 69 Str. 15234, Chalandri Athens, Greece
              </div>
            </div>
            <div className="flex flex-nowrap flex-col items-start">
              <h4 className="text-[20px] font-poppins font-bold text-[#404040]">
                PHONES
              </h4>
              <div className="text-[#404040] text-base font-normal font-poppins">
                Support: +1 (647) 321-4620
                <br />
                Whatsapp : +44 7425 380174
                <br />
                Contact No : +91 93278 12738
              </div>
            </div>
            <div className="flex flex-nowrap flex-col items-start">
              <h4 className="text-[20px] font-poppins font-bold text-[#404040]">
                EMAIL ADDRESSES
              </h4>
              <Link to={""} className="text-[#000000] font-semibold text-base">
                Support: info@chintamanigems.com
                <br />
              </Link>
              <div className="text-[#404040] font-normal text-base">
                Sales manager: manager@example.com <br />
              </div>
              <div className="text-[#404040] font-normal text-base">
                Director: admin@example.com
              </div>
            </div>
          </div>
          <div className="p-[20px] flex flex-nowrap flex-col items-start">
            <div className="flex flex-nowrap flex-col items-start">
              <h3 className="text-[24px] font-poppins font-bold text-[#404040]">
                QUICK CONTACT <br />
              </h3>
              <div className="flex flex-nowrap flex-col items-start">
                <div>
                  <div>
                    <div className="absolute overflow-hidden h-[1px] w-[1px] m-[-1px] clip-[1px] clip-path-inset-[50%]">
                      <p
                        role="status"
                        aria-live="polite"
                        aria-atomic="true"
                      ></p>
                      <ul></ul>
                    </div>
                    <form action="">
                      <div>
                        <p className="py-[16px]">
                          <label
                            htmlFor=""
                            className="text-[13px] font-semibold text-[#404040]"
                          >
                            {" "}
                            Name: <br />
                          </label>
                          <span className="relative">
                            <input
                              type="text"
                              name="your-name"
                              required
                              className="bg-[#fff] border-[1px] h-[38px] border-[#ccc] rounded-[19px] text-[#777] w-full mt-[8px] outline-none px-[12px]"
                            />
                          </span>
                        </p>
                        <p className="py-[16px]">
                          <label
                            htmlFor=""
                            className="text-[13px] font-semibold text-[#404040]"
                          >
                            {" "}
                            Email Address:
                            <br />
                          </label>
                          <span className="relative">
                            <input
                              type="email"
                              name="your-email"
                              required
                              className="bg-[#fff] border-[1px] h-[38px] border-[#ccc] rounded-[19px] text-[#777] w-full mt-[8px] outline-none px-[12px]"
                            />
                          </span>
                        </p>
                        <p className="py-[16px]">
                          <label
                            htmlFor=""
                            className="text-[13px] font-semibold text-[#404040]"
                          >
                            {" "}
                            Phone Number:
                            <br />
                          </label>
                          <span className="relative">
                            <input
                              type="phone"
                              name="your-phone"
                              required
                              className="bg-[#fff] border-[1px] h-[38px] border-[#ccc] rounded-[19px] text-[#777] w-full mt-[8px] outline-none px-[12px]"
                            />
                          </span>
                        </p>
                        <p className="py-[16px]">
                          <label
                            htmlFor=""
                            className="text-[13px] font-semibold text-[#404040]"
                          >
                            {" "}
                            Comment:
                            <br />
                          </label>
                          <span className="relative">
                            <textarea
                              aria-rowspan={10}
                              aria-colspan={40}
                              name="your-comment"
                              required
                              className="bg-[#fff] shadow-none border-[1px] border-[#ddd] text-[13px] text-[#666] overflow-auto rounded-[19px] outline-none px-[10px] py-[5px] h-[109px] mt-[8px] w-full mb-[5px] "
                            />
                          </span>
                        </p>
                        <p className="py-[16px]">
                          <input
                            type="submit"
                            value="submit"
                            className="bg-[#211c50] text-[#fff] cursor-pointer block font-bold text-[13px] h-[38px] uppercase rounded-[19px] text-center px-[20px]"
                          />
                        </p>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
