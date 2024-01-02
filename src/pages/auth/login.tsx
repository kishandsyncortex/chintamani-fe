import { apiPath } from '@/lib/api-path'
import { EMAIL_REGEX } from '@/lib/constant'
import { handleLogin } from '@/redux/reducer/auth'
import api from '@/services/api'
import React, { ChangeEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

interface IError {
    email?: string
    password?: string

}

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState<IError>({})
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleSubmit = async () => {
        let err: IError = {}
        if (!email) {
            err = { ...err, email: "Email is required" }
        }
        if (!password) {
            err = { ...err, password: "Password is required" }
        }
        if (email && !EMAIL_REGEX.test(email)) {
            err = { ...err, email: "Email is not valid" }
        }

        if (Object.keys(err).length > 0) {
            setError(err)
            return
        }
        const data = await api({ method: "post", url: `${apiPath?.auth?.login}`, data: { email, password } })
        if (data) {
            dispatch(handleLogin(data?.data))
            navigate("/")

        }
        console.log("🚀 ~ file: login.tsx:29 ~ handleSubmit ~ data:", data)
    }

    return (
        <div className="bg-gray-100  bg-[#211c50] flex justify-center items-center h-screen">
            <div className="w-1/2 h-screen hidden lg:block">
                <img src="/assests/Images/BgFooter.png" alt="Placeholder Image" className="object-cover w-full h-full" />
            </div>
            <div className="lg:p-36 text-white md:p-52 sm:20 p-8 h-full w-full bg-[#211c50] lg:w-1/2">
                <div className="row-span-4 row-start-2 text-4xl">
                    Sign In
                    <div className="pt-10 pr-20">
                        <label className="text-sm font-sans font-medium">
                            Email
                        </label>
                        <input
                            type="text"
                            name="username"
                            onChange={(e) => {
                                setError({ ...error, email: "" }); setEmail(e.target.value)
                            }}
                            placeholder="Enter your email"
                            className="w-full bg-[#211c50] py-3 px-6 border hover: border-gray-500 rounded shadow text-base font-sans" />
                        {error?.email && <p className="text-red-500 text-xs mt-2">{error?.email}</p>}
                    </div>
                    <div className="pt-2 pr-20">
                        <label className="text-sm font-sans font-medium">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            onChange={(e) => {
                                setError({ ...error, password: "" }); setPassword(e.target.value)
                            }}
                            placeholder="Enter your password"
                            className=" w-full bg-[#211c50] py-3 px-6 border hover: border-gray-500 rounded shadow text-base font-sans" />
                        {error?.password && <p className="text-red-500 text-xs mt-2">{error?.password}</p>}

                        <a href="" className="text-sm font-sans font-medium text-gray-600 underline">
                            Forgot password?
                        </a>
                    </div>
                    <div className="text-sm font-sans font-medium w-full pr-20 pt-10">
                        <button
                            onClick={handleSubmit}
                            type="button"
                            className="text-center w-full py-4 bg-[#605b98] hover:bg-[#393376] rounded-md text-white">
                            SIGN IN
                        </button>
                    </div>
                </div>
                <a href="" className="text-sm font-sans font-medium text-gray-400 underline">
                    Don´t have an account? Sign up
                </a>
            </div>
        </div>
    )
}

export default Login