import React, { useContext, useEffect, useState } from 'react'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import { Link, useParams } from 'react-router-dom'
import AuthContext from '../Context/Auth/AuthContext'

const Dashboard = () => {

	const { id } = useParams()

	const authcontext = useContext(AuthContext)
	const { getUser } = authcontext

	const [User, setUser] = useState({})

	useEffect(() => {
		(
			async() => {
				const token = localStorage.getItem('token')
				const user = await getUser(token)
				setUser(user)
			}
		)()
	}, [])


	return (
		<div>
			<header class="bg-white shadow">
				<h1 class="text-3xl -mt-4 py-4 px-4 font-bold tracking-tight text-gray-900">Dashboard</h1>
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
									<h2 class="title-font font-bold text-xl text-gray-900">Opted Medical Facility</h2>
									<div class="inline-flex gap-6 pt-2 ">
										<div class="text-gray-500 text-base">
											<p className='text-blue-500'>Opted In total</p>
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
						<Link to={"/bookbed/hospital/id"}>
							<div className='flex flex-grow flex-row'>
								<div className='m-2'>
									<img src='/bookbed.png' alt='bed logo' width={70} height={70} />
								</div>
								<div className='pl-6'>
									<h2 class="title-font font-bold text-xl text-gray-900">Recent Booking Status</h2>
									<div class="inline-flex gap-6 pt-2 ">
										<div class="text-gray-500 text-base">
											<p className='text-blue-500'>Status</p>
											<span>20</span>
										</div>

									</div>
								</div>
								{/* <div className='px-2 pt-2'>
                  <span className='flex justify-end'><HiOutlineArrowNarrowRight size={20} color={"blue"} className="hover:cursor-pointer" /></span>
                </div> */}
							</div>
						</Link>
					</div>
				</div>
			</section>

			<section className='mt-6 px-8 py-6 border-t-2'>
				<div class="overflow-hidden bg-white shadow sm:rounded-lg">
					<div class="px-4 py-5 sm:px-6">
						<h3 class="text-base font-semibold leading-6 text-gray-900">User Information</h3>
						<p class="mt-1 max-w-2xl text-sm text-gray-500">Personal details and application.</p>
					</div>
					<div class="border-t border-gray-200">
						<dl>
							<div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
								<dt class="text-sm font-medium text-gray-500">Full name</dt>
								<dd class="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
									<span class="flex-grow">{User.name}</span>
									<span class="ml-4 flex-shrink-0">
										<button type="button" name="userName" class="bg-white rounded-md font-semibold text-purple-600 hover:text-purple-500 focus:outline-none ">Update</button>
									</span>
								</dd>
							</div>

							<div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
								<dt class="text-sm font-medium text-gray-500">Email address</dt>
								<dd class="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
									<span class="flex-grow">{User.email}</span>
									<span class="ml-4 flex-shrink-0">
										<button type="button" name="userName" class="bg-white rounded-md font-semibold text-purple-600 hover:text-purple-500 focus:outline-none ">Update</button>
									</span>
								</dd>
							</div>
							<div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
								<dt class="text-sm font-medium text-gray-500">Phone No</dt>
								<dd class="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
									<span class="flex-grow">+91 {User.phoneNo}</span>
									<span class="ml-4 flex-shrink-0">
										<button type="button" name="userName" class="bg-white rounded-md font-semibold text-purple-600 hover:text-purple-500 focus:outline-none ">Update</button>
									</span>
								</dd>
							</div>
							<div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
								<dt class="text-sm font-medium text-gray-500">Aadhar Number</dt>
								<dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">4657****8976</dd>
							</div>

						</dl>
					</div>
				</div>

			</section>
		</div>
	)
}

export default Dashboard