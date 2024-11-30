"use client"
import React, { useEffect, useState } from 'react'
import { BiSolidPlaylist } from 'react-icons/bi';
import { BsRepeat, BsShuffle } from 'react-icons/bs';
import { FcLikePlaceholder } from 'react-icons/fc';
import { IoPlayCircle, IoTrendingDownOutline, IoTrendingUpOutline, IoVolumeMedium } from 'react-icons/io5';
import { MdLibraryMusic, MdMoreHoriz } from 'react-icons/md';
import { PiCaretLineLeftFill, PiCaretLineRightFill, PiDevicesBold } from 'react-icons/pi';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GoHomeFill } from 'react-icons/go';
import { ImProfile } from 'react-icons/im';
import { CgPlayList } from 'react-icons/cg';

const Track = () => {

  const [tracks, setTracks] = useState([]);
  const [recommended, setRecommended] = useState([]);
  const [currentTrack, setCurrentTrack] = useState<any>(null);
  const [isPlaying, setIsPlaying] = useState(false);


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };

  // Fetch data for Recently Played and Recommendations
  useEffect(() => {
    // Fetch Recently Played tracks
    fetch("https://www.theaudiodb.com/api/v1/json/2/track.php?m=2115888")
      .then((res) => res.json())
      .then((data) => setTracks(data.track));

    // Fetch Recommended tracks
    fetch("https://www.theaudiodb.com/api/v1/json/2/album.php?i=112024")
      .then((res) => res.json())
      .then((data) => setRecommended(data.album));
  }, []);

  const playTrack = (track: any) => {
    setCurrentTrack(track);
    setIsPlaying(true);
  };

  const pauseTrack = () => {
    setIsPlaying(false);
  };

  const formatTime = (milliseconds: number) => {
    const totalSeconds = Math.floor(milliseconds / 1000);  // Convert milliseconds to seconds
    const minutes = Math.floor(totalSeconds / 60);  // Get the minutes
    const seconds = totalSeconds % 60;  // Get the remaining seconds
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;  // Format as mm:ss
  };

  return (
    <>

      <div className='bg-pink-600 h-[100vh] flex flex-col'>
        <div className="flex h-[85%] bg-white overflow-hidden rounded-b-[50px] shadow-sm">
          {/* Sidebar */}
          <aside className="w-64 bg-white shadow-md p-6">
            <div className="flex items-center mb-6">
              <img
                src="https://i.pinimg.com/736x/98/19/f3/9819f3a65f5b30caa531f01dd9f334eb.jpg"
                alt="Hero"
                className="w-[30px] h-[30px] rounded-full object-cover"
              />
              <div className="ml-4">
                <p className="font-bold">Joshua</p>
                <p className="text-sm text-gray-500">Premium</p>
              </div>
            </div>
            <nav>
              <h2 className='text-gray-400 font-bold py-4'>BROWSE</h2>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 font-semibold hover:text-pink-500 cursor-pointer"><GoHomeFill /><span>Home</span></li>
                <li className="flex items-center gap-3 font-normal hover:text-pink-500 cursor-pointer"><MdLibraryMusic /><span>Songs</span></li>
                <li className="flex items-center gap-3 font-normal hover:text-pink-500 cursor-pointer"> <BiSolidPlaylist /><span>Playlists</span></li>
                <li className="flex items-center gap-3 font-normal hover:text-pink-500 cursor-pointer"> <ImProfile /><span>Just For You</span></li>
                <li className="flex items-center gap-3 font-normal hover:text-pink-500 cursor-pointer"> <IoTrendingUpOutline /><span>Top Charts</span></li>
              </ul>
            </nav>
            <div className="mt-6">
              <h2 className='text-gray-400 font-bold py-4'>YOUR PLAYLISTS</h2>

              <ul className="space-y-4">
                <li className="flex items-center gap-3 font-normal hover:text-pink-500 cursor-pointer"><CgPlayList /><span>Workout</span></li>
                <li className="flex items-center gap-3 font-normal hover:text-pink-500 cursor-pointer"><CgPlayList /><span>Chillin’ at Home</span></li>
                <li className="flex items-center gap-3 font-normal hover:text-pink-500 cursor-pointer"> <CgPlayList /><span>Booping at Adobe</span></li>
                <li className="flex items-center gap-3 font-normal hover:text-pink-500 cursor-pointer"> <CgPlayList /><span>XD 4 Life</span></li>
              </ul>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 px-10 py-5">
            <div className="h-[35%] grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              {/* Highlight Sections */}
              <div className="group bg-gradient-to-b from-pink-500 to-purple-500 text-white p-4 rounded-lg shadow-lg relative transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
                <h1 className="text-[40px] font-extrabold transition-all duration-300 ease-in-out group-hover:text-[50px]">GET LOST</h1>
                <p className="text-sm  transition-all duration-300 ease-in-out group-hover:text-base">in your music.</p>
                <IoPlayCircle size={50} className="absolute bottom-0 left-0 m-2" />
              </div>


              <div className="group bg-gradient-to-b from-blue-500 to-cyan-500 text-white p-4 rounded-lg shadow-lg relative transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
                <h1 className="text-[40px] font-extrabold transition-all duration-300 ease-in-out group-hover:text-[50px]">MELLOW</h1>
                <p className="text-sm  transition-all duration-300 ease-in-out group-hover:text-base">beats.</p>
                <IoPlayCircle size={50} className="absolute bottom-0 left-0 m-2" />
              </div>

            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 h-[65%]'>
              <div className="w-full py-10 overflow-auto">
                <h1 className="text-2xl font-bold mb-4">Recently Played</h1>
                <div className=" w-full">
                  {tracks.map((song: any, index) => (
                    <div
                      key={index}
                      className="group grid grid-cols-8 gap-4 items-center  p-4 hover:bg-gray-100 hover:rounded-lg"
                      onClick={() => playTrack(song)}
                    >

                      <div className="relative w-10 h-10 bg-gray-300 rounded">
                        <IoPlayCircle size={40} color='white' className="absolute inset-0 m-auto opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
                        />
                      </div>

                      <h2 className="text-sm col-span-2">{song.strTrack}</h2>
                      <p className="text-sm col-span-2">{song.strArtist}</p>



                      <p className="text-sm font-medium">{formatTime(song.intDuration)}</p>
                      <button className="text-gray-500 hover:text-gray-700">
                        <FcLikePlaceholder size={20} />
                      </button>
                      <button className="text-gray-500 hover:text-gray-700">
                        <MdMoreHoriz size={20} />
                      </button>

                    </div>
                  ))}
                </div>
              </div>
              <div className="w-full py-10 overflow-auto">
                <h1 className="text-2xl font-bold mb-4">Recommended For You</h1>
                <div className=" w-full">
                  <Slider {...settings}>
                    {recommended.map((song: any, index) => (
                      <div
                        key={index}
                        className="group flex flex-col p-4"
                      >

                        <div className="relative w-[150px] h-[150px] rounded-lg" style={{
                          backgroundImage: `url(${song.strAlbumThumb})`,
                        }} onClick={() => playTrack(song)}>
                          {/* Icon, initially hidden */}
                          <IoPlayCircle
                            size={100}
                            color="white"
                            className="absolute inset-0 m-auto opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
                          />
                        </div>

                        <h2 className="text-sm py-2 ">{song.strAlbum}</h2>
                        <p className="text-sm" >{song.strArtist}</p>
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </div>


          </main>
        </div>
        <div className="bg-pink-600 text-white  w-full h-auto  px-10 py-4 flex flex-wrap items-center justify-around gap-4">
          <div className='flex gap-5 items-center'>
            {/* Album Artwork */}
            <div className="w-16 h-16 rounded-full bg-pink-700" style={{
              backgroundImage: `url(${currentTrack ? currentTrack.strAlbumThumb : ''})`,
            }} ></div>

            {/* Song Info */}
            <div className="flex flex-col w-auto ">
              <h3 className="text-lg font-semibold">{currentTrack ? currentTrack.strTrack : 'Empty'}</h3>
              <p className="text-sm opacity-75">{currentTrack ? currentTrack.strArtist : 'Empty'}</p>
            </div>
          </div>

          {/* Player Controls */}
          <div className="flex items-center gap-6">
            {/* Shuffle */}
            <button className="opacity-50 hover:opacity-100">
              <BsShuffle size={20} />
            </button>
            {/* Previous */}
            <button>
              <PiCaretLineLeftFill size={30} />
            </button>
            {/* Play */}
            <button >
              <IoPlayCircle size={50} />
            </button>
            {/* Next */}
            <button>
              <PiCaretLineRightFill size={30} />
            </button>
            {/* Repeat */}
            <button className="opacity-50 hover:opacity-100">
              <BsRepeat size={20} />
            </button>
            {/* Progress Bar */}
            <div className="flex  items-center gap-1">

              <span className='text-xs opacity-75 flex'>{formatTime(0)}</span>
              <div className="relative w-40 h-1 bg-pink-300 rounded-full">
                <div className="absolute top-0 left-0 w-1/4 h-full bg-white rounded-full" ></div>
              </div>
              <span className='text-xs opacity-75 flex '>{currentTrack ? formatTime(currentTrack.intDuration ? currentTrack.intDuration : 0) : formatTime(0)}</span>
            </div>
          </div>



          {/* Volume */}
          <div className="flex items-center gap-2">
            <button>
              <BiSolidPlaylist size={20} />
            </button>
            <button>
              <PiDevicesBold size={18} />
            </button>
            <button>
              <IoVolumeMedium size={20} />
            </button>
            <input type="range" className="w-28 h-1 bg-pink-300 rounded-lg" />
          </div>
        </div>
      </div>

    </>
  )
}

export default Track