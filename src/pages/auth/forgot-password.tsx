import AuthWrapper from '@/components/auth/AuthWrapper'
import useApi from '@/hooks/useApi'
import { apiPath } from '@/lib/api-path'
import { EMAIL_REGEX } from '@/lib/constant'
import React, { ChangeEvent, useState } from 'react'

interface IError {
    email?: string
    password?: string

}

interface IForm {
    email?: string
    password?: string
    new_pass?: string
    confirm_pass?: string
    otp?: string

}
const Forgotpassword = () => {
    const [formData, setFormData] = useState<IForm>({})
 
    const [showOTPField, setShowOTPField] = useState<boolean>(false)

    const [error, setError] = useState<IForm>({})
    const {apiAction} = useApi()

const onForgotPassword = async () => {
    let err: IError = {}

    if (!formData?.email) {
        err = { ...err, email: "Email is required" }
    }
    if (formData?.email && !EMAIL_REGEX.test(formData?.email)) {
        err = { ...err, email: "Email is not valid" }
    }


    if (Object.keys(err).length > 0) {
        setError(err)
        return
    }
    const data = await apiAction({ method: "post", url: `${apiPath?.auth?.forgotPassword}`, data: { email:formData?.email } })
    if (data?.otp) {
        setShowOTPField(true)
        // showToast("Login  successfully!")

        // dispatch(handleLogin(data?.data))
        // navigate("/")

    }
}
const VerifyOtp = async () => {
    let err: IError = {}

    // if (!formData?.otp) {
    //     err = { ...err, email: "OTP is required" }
    // }
 
    if (!formData?.email) {
        err = { ...err, email: "Email is required" }
    }
    if (formData?.email && !EMAIL_REGEX.test(formData?.email)) {
        err = { ...err, email: "Email is not valid" }
    }

    if (Object.keys(err).length > 0) {
        setError(err)
        return
    }
    const data = await apiAction({ method: "post", url: `${apiPath?.auth?.verifyOTP}`, data: { email:formData?.email ,otp:formData?.otp} })
    if (data?.otp) {
        setShowOTPField(true)
        // showToast("Login  successfully!")

        // dispatch(handleLogin(data?.data))
        // navigate("/")

    }
}

const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setError({ ...error, [e.target.name]: "" })
}
    return (
        <AuthWrapper>
            <div className="row-span-4 row-start-2 text-4xl">
                Sign In
                <div className="pt-10 pr-20">
                    <label className="text-sm font-sans font-medium">
                        Email
                    </label>
                    <div className='relative'>
                        <input
                            type="text"
                            name="email"
                            onChange={(e) => handleOnChange(e)}
                            placeholder="Enter your email"
                            className="w-full bg-[#211c50] py-3 px-6 border hover: border-gray-500 rounded shadow text-base font-sans" />
                        {formData?.email ? <div className='absolute top-3 right-4 text-[14px]   '>
                            <button onClick={() => onForgotPassword()} className='text-center  px-3 bg-[#605b98] flex items-center h-[30px] hover:bg-[#393376] rounded-md text-white'>Send OTP</button>
                        </div> : null}
                    </div>
                    {error?.email && <p className="text-red-500 text-xs mt-2">{error?.email}</p>}
                </div>
                {showOTPField ? <div className=" pr-20">
                    <label className="text-sm font-sans font-medium">
                        OTP
                    </label>
                    <div className='relative'>
                    <input
                        type="text"
                        name="otp"
                        onChange={(e) => handleOnChange(e)}
                        placeholder="Enter your otp"
                        className="w-full bg-[#211c50] py-3 px-6 border hover: border-gray-500 rounded shadow text-base font-sans" />
                    {error?.otp && <p className="text-red-500 text-xs mt-2">{error?.otp}</p>}
                    {formData?.otp ? <div className='absolute top-3 right-4 text-[14px]   '>
                            <button onClick={() => VerifyOtp()} className='text-center  px-3 bg-[#605b98] flex items-center h-[30px] hover:bg-[#393376] rounded-md text-white'>Send OTP</button>
                        </div> : null}

                    </div>
                </div> : null}

            </div>
        </AuthWrapper>
    )
}

export default Forgotpassword