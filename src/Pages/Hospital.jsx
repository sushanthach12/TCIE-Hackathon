import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import BedContext from '../Context/Bed/BedContext';
import HospitalContext from '../Context/Hospital/HospitalContext';

const Hospital = () => {
    const { id } = useParams();

    const hospitalcontext = useContext(HospitalContext)
    const { getHospitalData, getFacility } = hospitalcontext

    const bedcontext = useContext(BedContext)
    const { getBedsHos } = bedcontext

    const [Hospital, setHospital] = useState({})
    const [Bed, setBed] = useState({})
    const [Facilities, setFacilities] = useState([])

    useEffect(() => {
        (
            async () => {
                const res = await getHospitalData(id)
                const res2 = await getBedsHos(id)
                setHospital(res.Hospital)
                setBed(res2.Beds)
            }
        )()
    },[])
    useEffect(() => {
        (
            async () => {

                const res3 = await getFacility(id)
                setFacilities(res3.Facility[0].name)
            }
        )()
    },[])


    return (
        <div>
            <header class="bg-white shadow">
                <h1 class="text-3xl -mt-4 py-4 px-4 font-bold tracking-tight text-gray-900">{Hospital.name}</h1>
                <p class="px-4 pb-4 max-w-2xl text-sm text-gray-500">{Hospital.city}, {Hospital.state}</p>

            </header>

            <section className='mt-6 py-6'>
                <div className='grid grid-cols-3 gap-x-8 gap-y-4 px-4'>

                    <div class="flex border-2 border-orange-500 rounded-md py-4 px-6">
                        <div className='flex flex-grow flex-row'>
                            <div className='m-2'>
                                <img src='/bed2.png' alt='bed logo' width={70} height={70} />
                            </div>
                            <div className='pl-6'>
                                <h2 class="title-font font-bold text-xl text-gray-900">Beds Booked</h2>
                                <div class="inline-flex gap-6 pt-2 ">
                                    <div class="text-gray-500 text-base">
                                        <p className='text-blue-500'>Total Bed Booked</p>
                                        <span>20</span>
                                    </div>

                                </div>
                            </div>
                            {/* <div className='px-2 pt-2'>
                  <span className='flex justify-end'><HiOutlineArrowNarrowRight size={20} color={"blue"} className="hover:cursor-pointer" /></span>
                </div> */}
                        </div>
                    </div>
                    <div class="flex border-2 border-orange-500 rounded-md py-4 px-6">
                        <div className='flex flex-grow flex-row'>
                            <div className='m-2'>
                                <img src='/healthcare.png' alt='bed logo' width={70} height={70} />
                            </div>
                            <div className='pl-6'>
                                <h2 class="title-font font-bold text-xl text-gray-900">Beds Available</h2>
                                <div class="inline-flex gap-6 pt-2 ">
                                    <div class="text-gray-500 text-base">
                                        <p className='text-blue-500'>Available</p>
                                        <span>20</span>
                                    </div>

                                </div>
                            </div>
                            {/* <div className='px-2 pt-2'>
                  <span className='flex justify-end'><HiOutlineArrowNarrowRight size={20} color={"blue"} className="hover:cursor-pointer" /></span>
                </div> */}
                        </div>
                    </div>
                    <div class="flex border-2 border-orange-500 rounded-md py-4 px-6">
                        <div className='flex flex-grow flex-row'>
                            <div className='m-2'>
                                <img src='/bookbed.png' alt='bed logo' width={70} height={70} />
                            </div>
                            <div className='pl-6'>
                                <h2 class="title-font font-bold text-xl text-gray-900">Occupied</h2>
                                <div class="inline-flex gap-6 pt-2 ">
                                    <div class="text-gray-500 text-base">
                                        <p className='text-blue-500'>Total</p>
                                        <span>20</span>
                                    </div>

                                </div>
                            </div>
                            {/* <div className='px-2 pt-2'>
                  <span className='flex justify-end'><HiOutlineArrowNarrowRight size={20} color={"blue"} className="hover:cursor-pointer" /></span>
                </div> */}
                        </div>
                    </div>
                </div>
            </section>

            <section className='mt-6 px-8 py-6 border-t-2'>
                <div class="overflow-hidden bg-white shadow sm:rounded-lg">
                    <div class="px-4 py-5 sm:px-6">
                        <h3 class="text-base font-semibold leading-6 text-gray-900">Hospital Information</h3>
                    </div>
                    <div class="border-t border-gray-200">
                        <dl>
                            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt class="text-sm font-medium text-gray-500">Full name</dt>
                                <dd class="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    <span class="flex-grow">{Hospital.name}</span>
                                    <span class="ml-4 flex-shrink-0">
                                        <button type="button" name="userName" class="bg-white rounded-md font-semibold text-purple-600 hover:text-purple-500 focus:outline-none ">Update</button>
                                    </span>
                                </dd>
                            </div>

                            {/* <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt class="text-sm font-medium text-gray-500">Email address</dt>
                                <dd class="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    <span class="flex-grow">Johnnny@email.com</span>
                                    <span class="ml-4 flex-shrink-0">
                                        <button type="button" name="userName" class="bg-white rounded-md font-semibold text-purple-600 hover:text-purple-500 focus:outline-none ">Update</button>
                                    </span>
                                </dd>
                            </div> */}
                            <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt class="text-sm font-medium text-gray-500">Phone No</dt>
                                <dd class="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    <span class="flex-grow">+91 9878675678</span>
                                    <span class="ml-4 flex-shrink-0">
                                        <button type="button" name="userName" class="bg-white rounded-md font-semibold text-purple-600 hover:text-purple-500 focus:outline-none ">Update</button>
                                    </span>
                                </dd>
                            </div>
                            <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt class="text-sm font-medium text-gray-500">Address</dt>
                                <dd class="mt-1  text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    {Hospital.address}, {Hospital.city}, {Hospital.state}
                                </dd>
                            </div>
                            <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt class="text-sm font-medium text-gray-500">Medical Facilities</dt>
                                <dd class="mt-1  text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    {
                                        Facilities.map((i) => {
                                            return (
                                                `${i}, `
                                            )
                                        })
                                    }
                                </dd>
                            </div>
                            {/* <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt class="text-sm font-medium text-gray-500">Aadhar Number</dt>
                                <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">4657****8976</dd>
                            </div> */}

                        </dl>
                    </div>
                </div>
                
            </section>
            <div class="flex justify-end mt-7 leading-relaxed w-full">
                <Link to={`/bookbed/hospital/${id}`}> <button class="inline-flex mr-16 text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded-md text-lg shadow-gray-400 shadow-lg">Book Bed Now</button></Link>
            </div>

        </div>
    )
}

export default Hospital