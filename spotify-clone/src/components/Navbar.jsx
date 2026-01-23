import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className='w-full flex justify-between items-center font-semibold'>
                <div className='flex items-center gap-2'>
                    <img onClick={() => navigate(-1)} className='w-6 sm:w-8 bg-black p-2 rounded-2xl cursor-pointer' src={assets.arrow_left} alt="" />
                    <img onClick={() => navigate(1)} className='w-6 sm:w-8 bg-black p-2 rounded-2xl cursor-pointer' src={assets.arrow_right} alt="" />
                </div>
                <div className='flex items-center gap-2 sm:gap-4'>
                    <p className='bg-white text-black text-xs sm:text-[15px] px-2 sm:px-4 py-1 rounded-2xl hidden md:block cursor-pointer'>Explore Premium</p>
                    <p className='bg-black py-1 px-2 sm:px-3 rounded-2xl text-xs sm:text-[15px] cursor-pointer hidden sm:block'>Install App</p>
                    <p className='bg-purple-500 text-black w-7 h-7 rounded-full flex items-center justify-center text-sm'>A</p>
                </div>
            </div>
            <div className='flex items-center gap-2 mt-4 overflow-x-auto'>
                <p className='bg-white text-black px-3 sm:px-4 py-1 rounded-2xl cursor-pointer text-sm whitespace-nowrap'>All</p>
                <p className='bg-black px-3 sm:px-4 py-1 rounded-2xl cursor-pointer text-sm whitespace-nowrap'>Music</p>
                <p className='bg-black px-3 sm:px-4 py-1 rounded-2xl cursor-pointer text-sm whitespace-nowrap'>Podcasts</p>
            </div>
        </>
    )
}

export default Navbar