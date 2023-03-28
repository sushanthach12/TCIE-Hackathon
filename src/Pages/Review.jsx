import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Review = () => {
    
    const [credentials, setCredentials] = useState({
        first_name: "",
        last_name: "",
        email: "",
        message: ""
    })
    
    const handleChange = (e) => {
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        // const res = await fetch(`${process.env.REACT_APP_HOST}/api/review/postReview`, {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({
        //         first_name: credentials.first_name,
        //         last_name: credentials.last_name,
        //         email: credentials.email,
        //         message:credentials.message 
        //     }),
        // })
        toast.success('Review Posted Successfully!', {
            position: "bottom-left",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        setCredentials({
            first_name: "",
            last_name: "",
            email: "",
            message: ""
        })
    }

    return (
        // <form class="relative text-center w-full max-w-lg" onSubmit={handleSubmit}>
        //     <div class="flex flex-wrap -mx-3 mb-6">
        //         <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        //             <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
        //                 Email ID
        //             </label>
        //             <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane@gmail.com" value={email} onChange={(e)=>setEmail(e.target.value)}></input>

        //         </div>
        //         <div class="w-full md:w-1/2 px-3">
        //             <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
        //                 City
        //             </label>
        //             <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Udupi" value={city} onChange={(e)=>setCity(e.target.value)}></input>
        //         </div>
        //     </div>
        //     <div class="flex flex-wrap -mx-3 mb-2">
        //         <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        //             <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
        //                 State
        //             </label>
        //             <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Karnataka" value={state} onChange={(e)=>setState(e.target.value)}></input>
        //         </div>
        //         <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        //             <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
        //                 ZipCode
        //             </label>
        //             <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="90210" value={zip} onChange={(e)=>setZip(e.target.value)}></input>
        //         </div>
        //         <button type='submit' className='bg-blue-500 hover:bg-blue-700 text-white font-bold  px-4 rounded'>Submit</button>
        //     </div>
        // </form>
        <div class=" bg-white py-10 px-6 sm:py-10 lg:px-8">
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
            <div class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
                <svg class="relative left-1/2 -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-40rem)] sm:h-[42.375rem]" viewBox="0 0 1155 678">
                    <path fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)" fill-opacity=".3" d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z" />
                    <defs>
                        <linearGradient id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533" x1="1155.49" x2="-78.208" y1=".177" y2="474.645" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#9089FC" />
                            <stop offset="1" stop-color="#FF80B5" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
            <div class="mx-auto max-w-2xl text-center">
                <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Post your Reviews</h2>
                <p class="mt-2 text-base leading-8 text-gray-600">Your reviews may help us in reach out maximum needies.</p>
            </div>
            <form class="mx-auto mt-16 max-w-xl sm:mt-20" onSubmit={handleSubmit}>
                <div class="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
                    <div>
                        <label for="first-name" class="block text-sm font-semibold leading-6 text-gray-900">First name</label>
                        <div class="mt-2.5">
                            <input type="text" name="first_name" id="first-name" autocomplete="given-name" class="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" value={credentials.first_name} onChange={handleChange}/>
                        </div>
                    </div>
                    <div>
                        <label for="last-name" class="block text-sm font-semibold leading-6 text-gray-900">Last name</label>
                        <div class="mt-2.5">
                            <input type="text" name="last_name" id="last-name" autocomplete="family-name" class="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" value={credentials.last_name} onChange={handleChange}/>
                        </div>
                    </div>
                    
                    <div class="sm:col-span-2">
                        <label for="email" class="block text-sm font-semibold leading-6 text-gray-900">Email</label>
                        <div class="mt-2.5">
                            <input type="email" name="email" id="email" autocomplete="email" class="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" value={credentials.email} onChange={handleChange}/>
                        </div>
                    </div>
                    
                    <div class="sm:col-span-2">
                        <label for="message" class="block text-sm font-semibold leading-6 text-gray-900">Message</label>
                        <div class="mt-2.5">
                            <textarea name="message" id="message" rows="4" class="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" value={credentials.message} onChange={handleChange}></textarea>
                        </div>
                    </div>
                   
                </div>
                <div class="mt-10">
                    <button type="submit" class="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Post</button>
                </div>
            </form>
        </div>
      
    )
}

export default Review