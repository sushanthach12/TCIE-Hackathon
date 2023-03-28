import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import AuthContext from '../Context/Auth/AuthContext'
import BedContext from '../Context/Bed/BedContext'
import HospitalContext from '../Context/Hospital/HospitalContext'

const BookingForm = () => {
    const navigate = useNavigate()
    const { id } = useParams()

    const authcontext = useContext(AuthContext)
    const { getUser } = authcontext

    const hospitalcontext = useContext(HospitalContext)
    const { getHospitalData} = hospitalcontext

	const bedcontext = useContext(BedContext)
	const { getBedsHos, BookBed } = bedcontext

    const [Hospital, setHospital] = useState({})
    const [Bed, setBed] = useState([])
    const [User, setUser] = useState({})
    const [UID, setUID] = useState("")

    const [bedID, setBedID] = useState("")

    useEffect(() => {
      const token = localStorage.getItem('token')
      if(!token){
        navigate('/login')
      }

    }, [])

    useEffect(() => {
      (
        async() => {
            const res = await getHospitalData(id)
            setHospital(res.Hospital)
            const res2 = await getBedsHos(id)
            setBed(res2.Beds)
        }
      )()
    }, [])

    useEffect(() => {
      (
        async () => {
            const token = localStorage.getItem('token')
            const res = await getUser(token)
            setUser(res)
        }
      )()
    }, [])

    const handleSubmit = async(e) => {
        e.preventDefault()
        if(!(/^\d+$/.test(UID))){
            alert("Please enter correct Aaddhar")
        }

        const res = await BookBed(id, bedID, UID)
        console.log(res)
    }
    console.log(bedID)

    return (
        <div className='mx-6 px-20 pt-6'>
            <form onSubmit={handleSubmit}>
                <div class="space-y-12">
                    <div class="border-b border-gray-900/10 pb-12">
                        <h2 class="text-2xl font-semibold leading-7 text-gray-900">Booking Form</h2>

                        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div class="sm:col-span-4">
                                <label for="username" class="block text-sm font-medium leading-6 text-gray-900">Username</label>
                                <div class="mt-2">
                                    <input id="username" name="username" type="text" autocomplete="username" class="px-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" readOnly placeholder={User.name}/>
                                </div>
                            </div>

                            <div class="sm:col-span-4">
                                <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                                <div class="mt-2">
                                    <input id="email" name="email" type="email" autocomplete="email" class="px-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder={User.email} readOnly/>
                                </div>

                            </div>

                            <div class="sm:col-span-4">
                                <label for="aadhar" class="block text-sm font-medium leading-6 text-gray-900">Aaddhar Number</label>
                                <div class="mt-2">
                                    <input id="aadhar" name="aadhar" type="text" class="px-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder='Enter Aadhar Number' value={UID} onChange={(e)=> setUID(e.target.value)}/>
                                </div>
                            </div>

                            <div class="sm:col-span-4">
                                <label for="hospital" class="block text-sm font-medium leading-6 text-gray-900">Hospital</label>
                                <div class="mt-2">
                                    <input id="hospital" name="hospital" type="text" autocomplete="email" class=" px-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder={`${Hospital.name}, ${Hospital.city}, ${Hospital.state}`} readOnly/>
                                </div>
                            </div>

                            <div class="sm:col-span-3 col-start-1">
                                <label for="ward" class="pl-3 block text-sm font-medium leading-6 text-gray-900">Select Ward</label>
                                <div class="mt-2">
                                    <select id="ward" name="ward" autocomplete="ward" class="pl-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                                        <option className='pl-4' selected>--- Select ---</option>
                                        {
                                            Object.keys(Bed).map((value) => {
                                                return (
                                                    <option key={value} className='pl-4 text-black' value={Bed[value].bedId} onClick={(e)=> setBedID(e.target.value)}>{Bed[value].roomtype}</option> 
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                            </div>
                            {/* <div class="sm:col-span-2">
                                <label for="ward" class="pl-3 block text-sm font-medium leading-6 text-gray-900">Select Bed</label>
                                <div class="mt-2">
                                    <select id="ward" name="ward" autocomplete="ward" class="pl-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                                        <option className='pl-4'>United States</option>
                                        <option className='pl-4'>Canada</option>
                                        <option className='pl-4'>Mexico</option>
                                    </select>
                                </div>
                            </div> */}

                        </div>
                    </div>
                </div>

                <div class="mt-6 flex items-center justify-start gap-x-6">
                    <button type="button" class="text-sm font-semibold leading-6 text-red-700">Cancel</button>
                    <button type="submit" class={`rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:bg-indigo-300 disabled:hover:cursor-not-allowed` } disabled={!bedID || !UID} >Book Now</button>
                </div>
            </form>

        </div>
    )
}

export default BookingForm