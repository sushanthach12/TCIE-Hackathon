import React, { useContext, useEffect, useState } from 'react'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import BedContext from '../Context/Bed/BedContext'
import HospitalContext from '../Context/Hospital/HospitalContext'

const BookBeds = () => {

	const hospitalcontext = useContext(HospitalContext)
	const { getHospital, getCities, getHospitalData } = hospitalcontext

	const bedcontext = useContext(BedContext)
	const { getBedsHos } = bedcontext

	const [stateSel, setstateSel] = useState("")
	const [disSel, setDisSel] = useState("")
	const [hosSel, setHosSel] = useState("")
	const [Cities, setCities] = useState([])
	const [isLoading, setisLoading] = useState(false)
	const [Error, setError] = useState(false)
	const [Hospitals, setHospitals] = useState({})
	const [Hospital, setHospital] = useState({})
	const [hosID, setHosID] = useState("")

	const handleChangeDis = async(e) => {
		setDisSel(e.target.value)
		const res = await getHospital(disSel)
		// const res2 = await getBedsHos(res.Hospital[0]._id)
		if (res.Success) {
			setHospitals(res.Hospital)
			setHosID(res.Hospital[0]._id)
			setisLoading(false)
			
		} else {
			setError(true)
		}
	}
	const handleChangeHos = (e) => {
		setHosSel(e.target.value)

	}

	const handleSubmit = async () => {
		setisLoading(true)
		const res2 = await getHospitalData(hosID)
		setHospital(res2.Hospital)
		setisLoading(false)
	}

	useEffect(() => {
		(
			async () => {
				const res = await getCities()
				setCities(res.Cities)
			}
		)()
	}, [])

	return (
		<main className='w-full flex flex-col justify-center '>
			<h2 className='text-3xl text-center pb-8 font-bold'>Book Beds</h2>
			<div className='flex flex-col justify-center py-8  border-2 mx-6 rounded-md'>

				<div className='dropdowns flex flex-row lg:gap-24 justify-center items-center sm:flex-row sm:gap-10 md:flex-row md:gap-10'>
					<div class="relative inline-block text-center">
						<div class="sm:col-span-3">
							<div class="">
								<select id="ward" name="ward" autocomplete="ward" class="bg-white pl-4 block w-full rounded-md border py-2 px-4 text-gray-900 shadow-sm sm:max-w-xs sm:text-sm sm:leading-6 font-semibold">
									<option className='px-4 font-semibold'>--- Select State ---</option>
									<option className='px-4 font-semibold' selected>Karnataka</option>
								</select>
							</div>
						</div>
					</div>
					<div class="relative inline-block text-center">
						<div class="sm:col-span-3">
							<div class="">
								<select id="ward" name="ward" autocomplete="ward" class="bg-white pl-4 block w-full rounded-md border py-2 px-4 text-gray-900 shadow-sm sm:max-w-xs sm:text-sm sm:leading-6 font-semibold" onChange={handleChangeDis}>
									<option className='px-4 font-semibold' selected>--- Select District ---</option>
									{
										Cities.map((item) => {
											return (
												<option key={item} className='px-4 font-semibold' value={item} onClick={handleChangeDis}>{item}</option>
											)
										})
									}

								</select>
							</div>
						</div>


					</div>
					<div class="relative inline-block text-center">
						<div class="sm:col-span-3">
							<div class="">
								<select id="hospital" name="hospital" autocomplete="ward" class="bg-white pl-4 block w-full rounded-md border py-2 px-4 text-gray-900 shadow-sm sm:max-w-xs sm:text-sm sm:leading-6 font-semibold" onChange={handleChangeHos}>
									<option className='px-4 font-semibold' selected>--- Select Hospital ---</option>
									{
										Object.entries(Hospitals).map((key, value) => {
											return (
												<option key={key} className='px-4 font-semibold' value={Hospitals[value].name} onClick={handleChangeHos}>{Hospitals[value].name}</option>
											)
										})
									}


								</select>
							</div>
						</div>
					</div>

				</div>
				<div className='relative inline-block text-center mt-4'>
					<button type='button' className="inline-flex text-white bg-blue-700 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded text-sm font-semibold" onClick={handleSubmit}>Submit</button>
				</div>
			</div>

			<div className='border-2 rounded-md mt-4 mx-6 py-6 pb-8 flex flex-col justify-center items-center'>
				<h2 className='text-xl pb-6 italic text-blue-500'>Results for your selection</h2>
				{isLoading && <h2 className='text-lg pt-6 italic text-blue-500'>Loading...</h2>}
				{Error && <h2 className='text-lg pt-6 italic text-blue-500'>No results found!</h2>}

				<div className='px-4'>
					{hosSel &&

						<div className='w-full'>
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
												<dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
													{/* <span class="flex-grow">{Hospital.name}</span> */}
													{Hospital.name}
													{/* <span class="ml-4 flex-shrink-0">
														<button type="button" name="userName" class="bg-white rounded-md font-semibold text-purple-600 hover:text-purple-500 focus:outline-none ">Update</button>
													</span> */}
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
											{/* <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt class="text-sm font-medium text-gray-500">Aadhar Number</dt>
                                <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">4657****8976</dd>
                            </div> */}

										</dl>
									</div>
								</div>

							</section>
							<div class="flex justify-end mt-7 leading-relaxed w-full">
								<Link to={"/bookbed/hospital/id"}><button class="inline-flex mr-16 text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded-md text-lg shadow-gray-400 shadow-lg">Book Bed Now</button></Link>
							</div>
						</div>
					}
				</div>

			</div>

		</main>
	)
}

export default BookBeds