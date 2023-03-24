import React, { useEffect } from 'react'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import { Link, useParams } from 'react-router-dom'

const Dashboard = () => {

  const { id } = useParams()

  useEffect(() => {
    console.log(id);
  }, [])


  return (
    <div>
      <header class="bg-white shadow">
          <h1 class="text-3xl -mt-4 py-4 px-4 font-bold tracking-tight text-gray-900">Dashboard</h1>
      </header>

      <section>
      <div class="flex border-2 rounded-md py-4 px-6">
									<Link to={"/bookbed/hospital/id"}>
										<div className='flex-grow'>
											<h2 class="title-font font-medium text-lg text-gray-900">Name</h2>
											<h3 class="text-gray-500 mb-3">loc</h3>
											<div class="inline-flex gap-6 pt-2 ">
												<div class="text-gray-500 text-base">
													<p className='text-blue-500'>Total Bed</p>
													<span>20</span>
												</div>
												<div class="text-gray-400">
													<p className='text-green-500'>Bed Vacant</p>
													<span>Total</span>
												</div>
												<div class="text-gray-700">
													<p className='text-red-500'>Bed Occupied</p>
													<span>Total</span>
												</div>
											</div>
											<div className='px-2 pt-2'>
												<span className='flex justify-end'><HiOutlineArrowNarrowRight size={20} color={"blue"} className="hover:cursor-pointer" /></span>
											</div>
										</div>
									</Link>
								</div>
      </section>
    </div>
  )
}

export default Dashboard