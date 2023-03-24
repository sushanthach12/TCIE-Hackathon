import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const BookingForm = () => {
    const navigate = useNavigate()

    useEffect(() => {
      const token = localStorage.getItem('token')
      if(!token){
        navigate('/login')
      }
    }, [])
    

    return (
        <div className='mx-6 px-20 pt-6'>
            <form>
                <div class="space-y-12">
                    <div class="border-b border-gray-900/10 pb-12">
                        <h2 class="text-2xl font-semibold leading-7 text-gray-900">Booking Form</h2>

                        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div class="sm:col-span-4">
                                <label for="username" class="block text-sm font-medium leading-6 text-gray-900">Username</label>
                                <div class="mt-2">
                                    <input id="username" name="username" type="text" autocomplete="username" class="px-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>

                            <div class="sm:col-span-4">
                                <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                                <div class="mt-2">
                                    <input id="email" name="email" type="email" autocomplete="email" class="px-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>

                            <div class="sm:col-span-4">
                                <label for="aadhar" class="block text-sm font-medium leading-6 text-gray-900">Aaddhar Number</label>
                                <div class="mt-2">
                                    <input id="aadhar" name="aadhar" type="text" class="px-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>

                            <div class="sm:col-span-4">
                                <label for="hospital" class="block text-sm font-medium leading-6 text-gray-900">Hospital</label>
                                <div class="mt-2">
                                    <input id="hospital" name="hospital" type="text" autocomplete="email" class=" px-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>

                            <div class="sm:col-span-3 col-start-1">
                                <label for="ward" class="pl-3 block text-sm font-medium leading-6 text-gray-900">Select Ward</label>
                                <div class="mt-2">
                                    <select id="ward" name="ward" autocomplete="ward" class="pl-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                                        <option className='pl-4'>United States</option>
                                        <option className='pl-4'>Canada</option>
                                        <option className='pl-4'>Mexico</option>
                                    </select>
                                </div>
                            </div>
                            <div class="sm:col-span-2">
                                <label for="ward" class="pl-3 block text-sm font-medium leading-6 text-gray-900">Select Bed</label>
                                <div class="mt-2">
                                    <select id="ward" name="ward" autocomplete="ward" class="pl-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                                        <option className='pl-4'>United States</option>
                                        <option className='pl-4'>Canada</option>
                                        <option className='pl-4'>Mexico</option>
                                    </select>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div class="mt-6 flex items-center justify-start gap-x-6">
                    <button type="button" class="text-sm font-semibold leading-6 text-red-700">Cancel</button>
                    <button type="submit" class="rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Book Now</button>
                </div>
            </form>

        </div>
    )
}

export default BookingForm