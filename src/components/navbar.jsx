import React from 'react'
import { Link } from 'react-router-dom'
import { FaUser } from 'react-icons/fa'

const Navbar = ({user}) => {
    return (
        <header className="text-white body-font bg-blue-500 px-8">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row justify-center items-center">
                <Link className="flex title-font font-medium items-center mb-4 md:mb-0" to={"/"}>
                    {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg> */}
                    <span className="ml-3 text-2xl font-bold">HBMS</span>
                </Link>
                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                    <Link to={"/dashboard/id"} className="mr-5 hover:text-gray-200">Dashboard</Link>
                    <Link to={"/hospitals"} className="mr-5 hover:text-gray-200">Hospitals</Link>
                    <Link to={"/bookbeds"} className="mr-5 hover:text-gray-200">Book Beds</Link>
                </nav>
                {!localStorage.getItem('token') && <div className="flex justify-center gap-2">
                    <Link to={"/login"}><button className="inline-flex text-white bg-blue-700 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded text-sm font-semibold">Login</button></Link>
                    <Link to={"/signup"}><button className="inline-flex text-black bg-white border-0 py-2 px-4 focus:outline-none hover:bg-gray-300 rounded text-sm font-semibold">Signup</button></Link>
                </div>}
                {localStorage.getItem('token') && <span><FaUser/></span>}
            </div>
        </header>
    )
}

export default Navbar