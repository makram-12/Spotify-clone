import React from 'react'
import { assets } from "../assets/assets"
import { useNavigate } from 'react-router-dom'

const Sidebar = () => {

  const navigate = useNavigate();

  return (
    <div className='w-full lg:w-[25%] h-auto lg:h-full p-2 flex-col gap-2 text-white flex'>
      <div className='bg-[#121212] rounded flex flex-row lg:flex-col justify-center lg:justify-around gap-4 lg:gap-0 py-3 lg:h-[15%]'>

        <div onClick={() => navigate('/')} className='flex items-center gap-3 lg:pl-8 cursor-pointer hover:opacity-75 transition-opacity'>
          <img className="w-5 sm:w-6" src={assets.home_icon} alt="" />
          <p className="font-bold text-sm sm:text-base">Home</p>
        </div>

        <div className='flex items-center gap-3 lg:pl-8 cursor-pointer hover:opacity-75 transition-opacity'>
          <img className="w-5 sm:w-6" src={assets.search_icon} alt="" />
          <p className="font-bold text-sm sm:text-base">Search</p>
        </div>
      </div>
      <div className='bg-[#121212] h-auto lg:h-[85%] rounded hidden lg:block overflow-y-auto'>
        <div className='p-4 flex items-center justify-between'>
          <div className='flex items-center gap-3'>
            <img className='w-8' src={assets.stack_icon} alt="" />
            <p className='font-semibold'>Your Library</p>
          </div>
          <div className='flex items-center gap-3'>
            <img className='w-5' src={assets.arrow_icon} alt="" />
            <img className='w-5' src={assets.plus_icon} alt="" />
          </div>
        </div>
        <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4'>
          <h1>Create your first playlist</h1>
          <p className='font-light'>it's easy we will help you</p>
          <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>Create Playlist</button>
        </div>
        <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4 mt-4'>
          <h1>Let's findsome podcasts to follow</h1>
          <p className='font-light'>we'll keep you update on new episodes</p>
          <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>Browse podcasts</button>
        </div>
      </div>
    </div>
  )
}

export default Sidebar