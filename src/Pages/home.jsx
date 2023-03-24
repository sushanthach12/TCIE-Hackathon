import React from 'react'
import { RiHotelBedFill } from 'react-icons/ri'
import { MdLocalHospital } from 'react-icons/md'
import { FaBriefcaseMedical} from 'react-icons/fa'

const Home = () => {
    return (
        <div>
            <section class="text-gray-600 body-font">
                <div class="container mx-auto flex px-8 md:flex-row flex-col items-center">
                    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h2 className='text-sm text-indigo-500 tracking-widest font-bold title-font mb-2 pl-4'>Adding Care to your Life.</h2>
                        <h1 class="title-font sm:text-5xl text-3xl mb-4 font-bold tracking-wider text-blue-900">Protecting and Taking Care to
                            <br class="hidden lg:inline-block" />Of your Health
                        </h1>
                        <div class="flex justify-end mt-7 leading-relaxed w-full">
                            <button class="inline-flex mr-16 text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded-md text-lg shadow-gray-400 shadow-lg">Book Bed Now</button>
                        </div>
                    </div>
                    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img class="object-cover object-center rounded bg-white" alt="hero" src="/h2.png" />
                    </div>
                </div>
            </section>

            <section className='mt-24 py-6 px-4 bg-purple-100'>
                <div class="flex flex-wrap -m-2 px-6">
                    <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div class="h-full flex items-center  p-4 rounded-lg">
                            {/* <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/80x80" /> */}
                            <RiHotelBedFill size={60} color={"orange"}/> 
                            <div class="flex-grow ml-5">
                                <h2 class="text-gray-900 text-2xl font-semibold italic">Total Beds</h2>
                                <p class="text-gray-500 text-lg">2000+</p>
                            </div>
                        </div>
                    </div>
                    <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div class="h-full flex items-center  p-4 rounded-lg">
                            <MdLocalHospital size={60} color={"red"}/>
                            <div class="flex-grow ml-5">
                                <h2 class="text-gray-900 text-2xl font-semibold italic">Total Hospitals</h2>
                                <p class="text-gray-500 text-lg">200+</p>
                            </div>
                        </div>
                    </div>
                    <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div class="h-full flex items-center p-4 rounded-lg">
                            <FaBriefcaseMedical size={60} color={"green"}/>
                            <div class="flex-grow ml-5">
                                <h2 class="text-gray-900 text-2xl font-semibold italic">Medical Facilities</h2>
                                <p class="text-gray-500 text-lg">200+</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home