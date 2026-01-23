import React from 'react'
import { useNavigate } from 'react-router-dom'

const AlbumItem = ({ image, name, desc, id }) => {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(`/album/${id}`)} className='p-2 sm:p-3 rounded cursor-pointer hover:bg-[#ffffff26] transition-all'>
      <img className='rounded w-full aspect-square object-cover' src={image} alt="" />
      <p className='font-bold mt-2 mb-1 text-sm sm:text-base truncate'>{name}</p>
      <p className='text-slate-200 text-xs sm:text-sm truncate'>{desc}</p>
    </div>
  )
}

export default AlbumItem