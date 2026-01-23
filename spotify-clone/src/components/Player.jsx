import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { PlayerContext } from '../context/PlayerContext'

const Player = () => {

    const { track, seekBar, seekBg, playStatus, play, pause, time, previous, next, seekSong } = useContext(PlayerContext)

    return track ? (
        <div className='h-auto sm:h-[10%] bg-black flex flex-col sm:flex-row justify-between items-center text-white px-2 sm:px-4 py-2 gap-2 sm:gap-0'>
            <div className="hidden lg:flex items-center gap-4 w-full sm:w-auto min-w-[180px]">
                <img className='w-12 rounded' src={track.image} alt="" />
                <div className='overflow-hidden'>
                    <p className='text-sm truncate'>{track.name}</p>
                    <p className='text-xs text-gray-400 truncate'>{track.desc.slice(0, 12)}</p>
                </div>
            </div>
            <div className='flex flex-col items-center gap-2 w-full sm:flex-1'>
                <div className="flex gap-4 sm:gap-6 items-center">
                    <img className='w-3 sm:w-4 cursor-pointer hover:scale-110 transition-transform' src={assets.shuffle_icon} alt="" />
                    <img onClick={previous} className='w-3 sm:w-4 cursor-pointer hover:scale-110 transition-transform' src={assets.prev_icon} alt="" />
                    {playStatus ?
                        <img onClick={pause} className='w-4 cursor-pointer' src={assets.pause_icon} alt="" />
                        : <img onClick={play} className='w-4 cursor-pointer' src={assets.play_icon} alt="" />
                    }
                    <img onClick={next} className='w-3 sm:w-4 cursor-pointer hover:scale-110 transition-transform' src={assets.next_icon} alt="" />
                    <img className='w-3 sm:w-4 cursor-pointer hover:scale-110 transition-transform' src={assets.loop_icon} alt="" />
                </div>
                <div className='flex items-center gap-2 sm:gap-5 w-full max-w-[500px]'>
                    <p className='text-xs sm:text-sm min-w-[35px] text-gray-400'>{time.currentTime.minute}:{time.currentTime.second}</p>
                    <div ref={seekBg} onClick={seekSong} className='flex-1 h-1 bg-gray-600 rounded-full cursor-pointer hover:bg-gray-500 transition-colors'>
                        <hr ref={seekBar} className='h-1 border-none bg-green-500 rounded-full hover:bg-green-400 transition-colors' style={{ width: '0%' }} />
                    </div>
                    <p className='text-xs sm:text-sm min-w-[35px] text-gray-400'>{time.totalTime.minute}:{time.totalTime.second}</p>
                </div>
            </div>
            <div className='hidden lg:flex items-center gap-2 opacity-75 min-w-[180px] justify-end'>
                <img className='w-4 cursor-pointer hover:opacity-100 transition-opacity' src={assets.plays_icon} alt="" />
                <img className='w-4 cursor-pointer hover:opacity-100 transition-opacity' src={assets.mic_icon} alt="" />
                <img className='w-4 cursor-pointer hover:opacity-100 transition-opacity' src={assets.queue_icon} alt="" />
                <img className='w-4 cursor-pointer hover:opacity-100 transition-opacity' src={assets.speaker_icon} alt="" />
                <img className='w-4 cursor-pointer hover:opacity-100 transition-opacity' src={assets.volume_icon} alt="" />
                <div className='w-20 bg-gray-600 h-1 rounded hover:bg-gray-500 transition-colors'>
                    <div className='w-16 bg-white h-1 rounded'></div>
                </div>
                <img className='w-4 cursor-pointer hover:opacity-100 transition-opacity hidden xl:block' src={assets.mini_player_icon} alt="" />
                <img className='w-4 cursor-pointer hover:opacity-100 transition-opacity hidden xl:block' src={assets.zoom_icon} alt="" />
            </div>
        </div>
    ) : null
}

export default Player