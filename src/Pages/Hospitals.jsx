import React, { useContext, useEffect, useState } from 'react'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import HospitalContext from '../Context/Hospital/HospitalContext'

const Hospitals = () => {

	const [showStateDrop, setShowStateDrop] = useState(false)
	const [showDisDrop, setShowDisDrop] = useState(false)

	const hospitalcontext = useContext(HospitalContext)
	const { getHospitals } = hospitalcontext

	const [hospitals, setHospitals] = useState({})

	const [stateSel, setstateSel] = useState("Select State")

	useEffect(() => {
		(
			async () => {
				const res = await getHospitals()
				console.log(res);
			}
		)()
	}, [])

	const onChangeState = (e) => setstateSel(e.target.value)


	return (
		<main className='w-full flex flex-col justify-center '>
			<h2 className='text-3xl text-center pb-8 font-bold'>Find Hospitals</h2>
			<div className='py-8  border-2 mx-6 rounded-md'>

				<div className='dropdowns flex flex-row lg:gap-24 justify-center items-center sm:flex-row sm:gap-10 md:flex-row md:gap-10'>
					<div>
						<div class="relative mt-2">
							<button type="button" class="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-16 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6" aria-haspopup="listbox" aria-expanded="true" aria-labelledby="listbox-label">
								<span class="flex items-center">
									<span class="ml-3 block truncate">{stateSel}</span>
								</span>
								<span class="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
									<svg class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
										<path fill-rule="evenodd" d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z" clip-rule="evenodd" />
									</svg>
								</span>
							</button>


							<ul class="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm" tabindex="-1" role="listbox" aria-labelledby="listbox-label" aria-activedescendant="listbox-option-3">

								<li class="text-gray-900 relative cursor-default select-none py-2 pl-3 pr-9" id="listbox-option-0" role="option">
									<div class="flex items-center">
										<span class="font-normal ml-3 block truncate" value="Karnataka" onClick={onChangeState}>Karnataka</span>
									</div>
								</li>

							</ul>
						</div>
					</div>

					<div class="relative inline-block text-center">
						<div>
							<button type="button" class="inline-flex w-full justify-center gap-x-6 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true" name='disDrop' onClick={() => { setShowDisDrop(!showDisDrop) }}>
								Select District
								<svg class="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
									<path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
								</svg>
							</button>
						</div>

						{showDisDrop && <div class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
							<div class="py-1" role="none">
								<a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Account settings</a>
								<a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Support</a>
								<a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">License</a>

							</div>
						</div>}
					</div>

				</div>
			</div>

			<div className='border-2 rounded-md mt-4 mx-6 py-6 pb-8 flex flex-col justify-center items-center'>
				<h2 className='text-xl pb-6 italic text-blue-500'>Results for your selection</h2>

				<div className='grid grid-cols-3 gap-x-8 gap-y-4 px-4'>

					<div class="flex border-2 rounded-md py-4 px-6 w-full">
						<Link to={"/hospital/id"}>
							<div className='flex-grow'>
								<h2 class="title-font font-medium text-lg text-gray-900">Hospital Title</h2>
								<h3 class="text-gray-500 mb-3">Location/Address</h3>
								<div class="inline-flex gap-6 pt-2 ">
									<div class="text-gray-500 text-base">
										<p className='text-blue-500'>Medical Facility</p>
										<span>20</span>
									</div>
									<div class="text-gray-500 text-base">
										<p className='text-red-600'>Blood Bank</p>
										<span>20</span>
									</div>
									<div class="text-gray-500 text-base">
										<p className='text-yellow-500'>Beds</p>
										<span>Available</span>
									</div>

								</div>
								<div className='px-2 pt-2'>
									<span className='flex justify-end'><HiOutlineArrowNarrowRight size={20} color={"blue"} className="hover:cursor-pointer" /></span>
								</div>
							</div>
						</Link>
					</div>
					<div class="flex border-2 rounded-md py-4 px-6 w-full">
						<Link to={"/hospital/id"}>
							<div className='flex-grow'>
								<h2 class="title-font font-medium text-lg text-gray-900">Hospital Title</h2>
								<h3 class="text-gray-500 mb-3">Location/Address</h3>
								<div class="inline-flex gap-6 pt-2 ">
									<div class="text-gray-500 text-base">
										<p className='text-blue-500'>Medical Facility</p>
										<span>20</span>
									</div>
									<div class="text-gray-500 text-base">
										<p className='text-red-600'>Blood Bank</p>
										<span>20</span>
									</div>
									<div class="text-gray-500 text-base">
										<p className='text-yellow-500'>Beds</p>
										<span>Available</span>
									</div>

								</div>
								<div className='px-2 pt-2'>
									<span className='flex justify-end'><HiOutlineArrowNarrowRight size={20} color={"blue"} className="hover:cursor-pointer" /></span>
								</div>
							</div>
						</Link>
					</div>
					<div class="flex border-2 rounded-md py-4 px-6 w-full">
						<Link to={"/hospital/id"}>
							<div className='flex-grow'>
								<h2 class="title-font font-medium text-lg text-gray-900">Hospital Title</h2>
								<h3 class="text-gray-500 mb-3">Location/Address</h3>
								<div class="inline-flex gap-6 pt-2 ">
									<div class="text-gray-500 text-base">
										<p className='text-blue-500'>Medical Facility</p>
										<span>20</span>
									</div>
									<div class="text-gray-500 text-base">
										<p className='text-red-600'>Blood Bank</p>
										<span>20</span>
									</div>
									<div class="text-gray-500 text-base">
										<p className='text-yellow-500'>Beds</p>
										<span>Available</span>
									</div>

								</div>
								<div className='px-2 pt-2'>
									<span className='flex justify-end'><HiOutlineArrowNarrowRight size={20} color={"blue"} className="hover:cursor-pointer" /></span>
								</div>
							</div>
						</Link>
					</div>
					<div class="flex border-2 rounded-md py-4 px-6 w-full">
						<Link to={"/hospital/id"}>
							<div className='flex-grow'>
								<h2 class="title-font font-medium text-lg text-gray-900">Hospital Title</h2>
								<h3 class="text-gray-500 mb-3">Location/Address</h3>
								<div class="inline-flex gap-6 pt-2 ">
									<div class="text-gray-500 text-base">
										<p className='text-blue-500'>Medical Facility</p>
										<span>20</span>
									</div>
									<div class="text-gray-500 text-base">
										<p className='text-red-600'>Blood Bank</p>
										<span>20</span>
									</div>
									<div class="text-gray-500 text-base">
										<p className='text-yellow-500'>Beds</p>
										<span>Available</span>
									</div>

								</div>
								<div className='px-2 pt-2'>
									<span className='flex justify-end'><HiOutlineArrowNarrowRight size={20} color={"blue"} className="hover:cursor-pointer" /></span>
								</div>
							</div>
						</Link>
					</div>



				</div>

			</div>

		</main>
	)
}

export default Hospitals