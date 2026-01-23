import React, { useContext } from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import { assets } from '../assets/assets'
import { PlayerContext } from '../context/PlayerContext'
import { useState } from 'react'
import { useEffect } from 'react'

const DisplayAlbum = ({ album }) => {

    const { id } = useParams();
    const [albumData, setAlbumData] = useState("");
    const { playWithId, albumsData, songsData } = useContext(PlayerContext);

    useEffect(() => {
        albumsData.map((item) => {
            if (item._id === id) {
                setAlbumData(item);
            }
        })
    }, [])

    return albumData ? (
        <>
            <Navbar />
            <div className='mt-6 sm:mt-10 flex gap-4 sm:gap-8 flex-col md:flex-row md:items-end mb-6'>
                <img className='w-40 sm:w-48 md:w-56 rounded shadow-2xl mx-auto md:mx-0' src={albumData.image} alt="" />
                <div className="flex flex-col text-center md:text-left flex-1">
                    <p className='text-xs sm:text-sm font-semibold'>Playlist</p>
                    <h2 className='text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-2 sm:mb-4 mt-2'>{albumData.name}</h2>
                    <h4 className='text-sm sm:text-base text-gray-300 mb-2'>{albumData.desc}</h4>
                    <p className='mt-1 text-xs sm:text-sm flex items-center justify-center md:justify-start gap-1 flex-wrap'>
                        <img className='inline-block w-4 sm:w-5' src={assets.spotify_logo} alt="" />
                        <b>Spotify</b>
                        <span className='hidden sm:inline'>• 1,323,154 likes •</span>
                        <b className='sm:inline'>50 songs</b>
                        <span className='hidden md:inline'>, about 2 hr 30 min</span>
                    </p>
                </div>
            </div>
            <div className='grid grid-cols-3 sm:grid-cols-4 mt-4 mb-2 pl-2 text-[#a7a7a7] text-xs sm:text-sm uppercase tracking-wider border-b border-gray-700 pb-2'>
                <p><b className='mr-2 sm:mr-4'>#</b>Title</p>
                <p className='hidden sm:block'>Album</p>
                <p className='hidden sm:block'>Date Added</p>
                <img className='m-auto w-4' src={assets.clock_icon} alt="" />
            </div>
            {
                songsData.filter((item) => item.album === album.name).map((item, index) => (
                    <div onClick={() => playWithId(item._id)} key={index} className='grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 sm:p-3 items-center text-[#a7a7a7] hover:bg-[#ffffff1a] cursor-pointer rounded transition-colors group'>
                        <p className='text-white flex items-center text-sm sm:text-base overflow-hidden'>
                            <b className='mr-2 sm:mr-4 text-[#a7a7a7] text-xs sm:text-sm min-w-[20px] group-hover:hidden'>{index + 1}</b>
                            <span className='mr-2 sm:mr-4 hidden group-hover:inline min-w-[20px]'>▶</span>
                            <img className='w-8 sm:w-10 mr-2 sm:mr-3 rounded flex-shrink-0' src={item.image} alt="" />
                            <span className='truncate group-hover:text-green-400 transition-colors'>{item.name}</span>
                        </p>
                        <p className='text-xs sm:text-[15px] hidden sm:block truncate'>{albumData.name}</p>
                        <p className='text-xs sm:text-[15px] hidden sm:block'>5 days ago</p>
                        <p className='text-xs sm:text-[15px] text-center'>{item.duration}</p>
                    </div>
                ))
            }
        </>
    ) : null
}

export default DisplayAlbum