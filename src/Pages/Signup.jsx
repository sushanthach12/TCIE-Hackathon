import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import AuthContext from '../Context/Auth/AuthContext'
import 'react-toastify/dist/ReactToastify.css';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode';

const Signup = ({ setKey }) => {

    const navigate = useNavigate()

    const authcontext = useContext(AuthContext)
    const { handleSignin } = authcontext

    const [credentials, setCredentials] = useState({
        name: "",
        email: ""
    })


    const onSignupSuccess = async (credentialResponse) => {
        const decoded = jwt_decode(credentialResponse.credential);
        setCredentials({
            name: decoded.name,
            email: decoded.email
        })
        setTimeout(() => {

        },2000)
        const response = await handleSignin(credentials)

        if (response.Success) {
            setCredentials({ name: "", email: "" })
            localStorage.setItem('token', response.AuthToken)

            toast.success('Logged-In Successfully!', {
                position: "bottom-left",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

            setKey(Math.random)
            setTimeout(() => {
                navigate(`/dashboard/${response.AuthToken}`)
            }, 1000);
        }
    }

    const onErrorSignup = async () => {
        toast.error('Something Went Wrong!', {
            position: "bottom-left",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    return (
        <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <ToastContainer
                position="bottom-left"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            < div className="w-full max-w-md space-y-8">
                <div>
                    {/* <img className="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company"/> */}
                    <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Signup to continue</h2>
                </div>

                {/* <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <input type="hidden" name="remember" value="true" />
                    <div className="-space-y-px rounded-md shadow-sm">
                        <div>
                            <label for="username" className="sr-only">Name</label>
                            <input id="username" name="name" type="text" required className="relative block w-full rounded-t-md border-0 py-1.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 sm:text-sm sm:leading-6" placeholder="Name" value={credentials.name} onChange={handleChange} />
                        </div>
                        <div>
                            <label for="email-address" className="sr-only">Email address</label>
                            <input id="email-address" name="email" type="email" autocomplete="email" required className="relative block w-full  border-0 py-1.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 sm:text-sm sm:leading-6" placeholder="Email address" value={credentials.email} onChange={handleChange} />
                        </div>
                        <div>
                            <label for="phone" className="sr-only">Email address</label>
                            <input id="phone" name="phoneNo" type="text" autocomplete="phone" required className="relative block w-full  border-0 py-1.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 sm:text-sm sm:leading-6" placeholder="Phone Number" value={credentials.phoneNo} onChange={handleChange} />
                        </div>
                        <div>
                            <label for="password" className="sr-only">Password</label>
                            <input id="password" name="password" type="password" autocomplete="current-password" required className="relative block w-full rounded-b-md border-0 py-1.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 sm:text-sm sm:leading-6" placeholder="Password" value={credentials.password} onChange={handleChange} />
                        </div>
                    </div>

                    <div className="flex items-center justify-center">
                       

                        <div className="text-sm">
                            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">Forgot your password?</a>
                        </div>
                    </div>

                    <div>
                        <button type="submit" className="group relative flex w-full justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" >
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clip-rule="evenodd" />
                                </svg>
                            </span>
                            Signup
                        </button>
                    </div> 
                </form> */}
                <div className='w-full'>

                    <GoogleLogin
                        onSuccess={credentialResponse => {
                            onSignupSuccess(credentialResponse)
                        }}
                        onError={() => {
                            onErrorSignup()
                        }}
                        style={{ width: 70 }}
                    />
                </div>
            </div>
        </div>
    )
}

export default Signup