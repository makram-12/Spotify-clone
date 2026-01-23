import React from 'react'
import Navbar from './Navbar'
import AlbumItem from './AlbumItem'
import SongItem from './SongItem'
import { useContext } from 'react'
import { PlayerContext } from '../context/PlayerContext'
const DisplayHome = () => {

    const { songsData, albumsData } = useContext(PlayerContext);

    return (
        <>
            <Navbar />
            <div className='mb-6 sm:mb-8'>
                <h1 className='my-5 font-bold text-xl sm:text-2xl'>Featured Charts</h1>
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4'>
                    {albumsData.map((item, index) => (<AlbumItem key={index} name={item.name} desc={item.desc} id={item._id} image={item.image} />))}
                </div>
            </div>
            <div className='mb-6 sm:mb-8'>
                <h1 className='my-5 font-bold text-xl sm:text-2xl'>Today's biggest hits</h1>
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4'>
                    {songsData.map((item, index) => (<SongItem key={index} name={item.name} desc={item.desc} id={item._id} image={item.image} />))}
                </div>
            </div>
        </>
    )
}

export default DisplayHome