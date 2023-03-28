import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaUser } from 'react-icons/fa'
import AuthContext from '../Context/Auth/AuthContext'

const Navbar = ({ user, setKey, key }) => {

    const navigate = useNavigate()

    const authcontext = useContext(AuthContext)
    const { getUser } = authcontext

    const [UserLog, setUserLog] = useState({})
    const [userDrop, setUserDrop] = useState(false)

    useEffect(() => {
        (
            async () => {
                const token = localStorage.getItem('token')
                if (token) {
                    const response = await getUser(token)
                    setUserLog(response)
                }
            }
        )()
    }, [key])

    const handleLogout = () => {
        localStorage.removeItem('token')
        setKey(Math.random)
        navigate('/')
    }
    
    const handleDropUser = () => {
        setUserDrop(!userDrop)
    }

    return (
        <header className="text-white body-font bg-blue-500 px-8">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row justify-center items-center">
                <Link className="flex title-font font-medium items-center mb-4 md:mb-0" to={"/"}>
                    <img src='/bed.png' alt='logo' className='w-8'/>
                    <span className="ml-3 text-2xl font-bold">HospoFriend</span>
                </Link>
                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                    {localStorage.getItem("token") ? <Link to={`/dashboard/${localStorage.getItem('token')}`} className="mr-5 hover:text-gray-200">Dashboard</Link> :
                        <Link to={"/login"} className="mr-5 hover:text-gray-200">Dashboard</Link>}
                    <Link to={"/hospitals"} className="mr-5 hover:text-gray-200">Hospitals</Link>
                    <Link to={"/bookbeds"} className="mr-5 hover:text-gray-200">Book Beds</Link>
                    <Link to={"/reviews"} className="mr-5 hover:text-gray-200">Reviews</Link>
                </nav>
                {!localStorage.getItem('token') && <div className="flex justify-center gap-2">
                    {/* <Link to={"/login"}><button className="inline-flex text-white bg-blue-700 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded text-sm font-semibold">Login</button></Link> */}
                    <Link to={"/signup"}><button className="inline-flex text-black bg-white border-0 py-2 px-4 focus:outline-none hover:bg-gray-300 rounded text-sm font-semibold">Signin</button></Link>
                </div>}
                {localStorage.getItem('token') && <div className='flex flex-row justify-start items-center gap-x-2 hover:cursor-pointer' onClick={handleDropUser}>
                    <span><FaUser size={14} /></span>
                    <span className='text-lg'>{UserLog.name}</span>
                </div>}
            </div>
            {userDrop && <div class="absolute right-12 z-10 -mt-2 w-44 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                <div class="py-1" role="none">
                    <button type="submit" class="text-red-700 block w-full px-4 py-4 text-left text-sm hover:cursor-pointer" role="menuitem" tabindex="-1" id="menu-item-3" onClick={handleLogout}>Log out</button>
                </div>
            </div>}
        </header>
    )
}

export default Navbar