import React, { useContext } from 'react'
import { PlayerContext } from '../context/PlayerContext'

const SongItem = ({ name, image, desc, id }) => {

  const { playWithId } = useContext(PlayerContext);

  return (
    <div onClick={() => playWithId(id)} className='p-2 sm:p-3 rounded cursor-pointer hover:bg-[#ffffff26] transition-all'>
      <img src={image} className='rounded w-full aspect-square object-cover' alt="" />
      <p className='font-bold mt-2 mb-1 text-sm sm:text-base truncate'>{name}</p>
      <p className='text-slate-200 text-xs sm:text-sm truncate'>{desc}</p>
    </div>
  )
}

export default SongItem