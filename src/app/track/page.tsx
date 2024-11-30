"use client"
import React, { useEffect, useState } from 'react'
import { BiSolidPlaylist } from 'react-icons/bi';
import { BsRepeat, BsShuffle } from 'react-icons/bs';
import { FcLikePlaceholder } from 'react-icons/fc';
import { IoPlayCircle, IoVolumeMedium } from 'react-icons/io5';
import { MdMoreHoriz } from 'react-icons/md';
import { PiCaretLineLeftFill, PiCaretLineRightFill, PiDevicesBold } from 'react-icons/pi';

const Track = () => {

    const [tracks, setTracks] = useState([]);
    console.log("tracks", tracks)
  const [recommended, setRecommended] = useState([]);
  const [currentTrack, setCurrentTrack] = useState<any>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Fetch data for Recently Played and Recommendations
  useEffect(() => {
    // Fetch Recently Played tracks
    fetch("https://www.theaudiodb.com/api/v1/json/2/track.php?m=2115888")
      .then((res) => res.json())
      .then((data) => setTracks(data.track));

    // Fetch Recommended tracks
    fetch("https://www.theaudiodb.com/api/v1/json/2/album.php?i=112024")
      .then((res) => res.json())
      .then((data) => setRecommended(data.album || []));
  }, []);

  const playTrack = (track:any) => {
    setCurrentTrack(track);
    setIsPlaying(true);
  };

  const pauseTrack = () => {
    setIsPlaying(false);
  };

  const formatTime = (milliseconds:number) => {
    const totalSeconds = Math.floor(milliseconds / 1000);  // Convert milliseconds to seconds
    const minutes = Math.floor(totalSeconds / 60);  // Get the minutes
    const seconds = totalSeconds % 60;  // Get the remaining seconds
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;  // Format as mm:ss
  };

  return (
//     <div className="min-h-screen bg-gray-100 flex flex-col">
//     {/* Header and Sidebar */}
//     <div className="flex flex-1">
//       {/* Sidebar */}
//       <aside className="w-64 bg-white shadow-md p-6">
//         <div className="flex items-center mb-6">
//           <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
//           <div className="ml-4">
//             <p className="font-bold">Joshua</p>
//             <p className="text-sm text-gray-500">Premium</p>
//           </div>
//         </div>
//         <nav>
//           <ul className="space-y-4">
//             <li className="font-semibold hover:text-blue-500 cursor-pointer">Home</li>
//             <li className="hover:text-blue-500 cursor-pointer">Songs</li>
//             <li className="hover:text-blue-500 cursor-pointer">Playlists</li>
//             <li className="hover:text-blue-500 cursor-pointer">Just for You</li>
//             <li className="hover:text-blue-500 cursor-pointer">Top Charts</li>
//           </ul>
//         </nav>
//         <div className="mt-6">
//           <h2 className="font-bold mb-4">Your Playlists</h2>
//           <ul className="space-y-3">
//             <li className="hover:text-blue-500 cursor-pointer">Workout Mix</li>
//             <li className="hover:text-blue-500 cursor-pointer">Chillin’ at Home</li>
//             <li className="hover:text-blue-500 cursor-pointer">Booping at Adobe</li>
//             <li className="hover:text-blue-500 cursor-pointer">XD 4 Life</li>
//           </ul>
//         </div>
//       </aside>

//       {/* Main Content */}
//       <main className="flex-1 p-6">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {/* Highlight Sections */}
//           <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white p-8 rounded-lg shadow-lg">
//             <h1 className="text-3xl font-bold">GET LOST</h1>
//             <p className="text-sm mt-2">in your music.</p>
//           </div>
//           <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-8 rounded-lg shadow-lg">
//             <h1 className="text-3xl font-bold">MELLOW</h1>
//             <p className="text-sm mt-2">beats.</p>
//           </div>
//         </div>

//         {/* Recently Played */}
//         <div className="mt-6">
//           <h2 className="text-2xl font-bold mb-4">Recently Played</h2>
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//             {tracks.map((track:any) => (
//               <div
//                 key={track.idTrack}
//                 className="bg-white shadow-md p-4 rounded-lg hover:shadow-lg transition"
//               >
//                 <p className="font-bold">{track.strAlbum}</p>
//                 <p className="text-sm text-gray-500">{track.strArtist}</p>
//                 <button
//                   className="mt-2 bg-blue-500 text-white px-3 py-1 rounded"
//                   onClick={() => playTrack(track)}
//                 >
//                   Play
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Recommendations */}
//         <div className="mt-6">
//           <h2 className="text-2xl font-bold mb-4">Recommended For You</h2>
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//             {recommended.map((rec:any) => (
//               <div
//                 key={rec.idAlbum}
//                 className="bg-gray-200 shadow-md p-4 rounded-lg hover:shadow-lg transition"
//               >
//                 <p className="font-bold">{rec.strAlbum}</p>
//                 <p className="text-sm text-gray-500">{rec.strArtist}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </main>
//     </div>

//     {/* Footer: Music Player Controls */}
//     {currentTrack && (
//       <footer className="bg-pink-500 text-white p-4 fixed bottom-0 w-full flex items-center justify-between">
//         <div>
//           <p className="font-bold">{currentTrack.strTrack}</p>
//           <p className="text-sm">{currentTrack.strArtist}</p>
//         </div>
//         <div className="flex items-center space-x-4">
//           <button onClick={pauseTrack} className="px-4 py-2 bg-red-500 rounded">
//             {isPlaying ? "Pause" : "Play"}
//           </button>
//           <input
//             type="range"
//             className="w-48"
//             min="0"
//             max="100"
//             step="1"
//           />
//         </div>
//       </footer>
//     )}
//   </div>
<>

<div className='bg-pink-500 h-[100vh] flex flex-col'>
<div className="flex h-[85%] bg-white overflow-hidden rounded-b-[50px]">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-6">
        <div className="flex items-center mb-6">
          <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
          <div className="ml-4">
            <p className="font-bold">Joshua</p>
            <p className="text-sm text-gray-500">Premium</p>
          </div>
        </div>
        <nav>
          <ul className="space-y-4">
            <li className="font-semibold hover:text-blue-500 cursor-pointer">Home</li>
            <li className="hover:text-blue-500 cursor-pointer">Songs</li>
            <li className="hover:text-blue-500 cursor-pointer">Playlists</li>
            <li className="hover:text-blue-500 cursor-pointer">Just for You</li>
            <li className="hover:text-blue-500 cursor-pointer">Top Charts</li>
          </ul>
        </nav>
        <div className="mt-6">
          <h2 className="font-bold mb-4">Your Playlists</h2>
          <ul className="space-y-3">
            <li className="hover:text-blue-500 cursor-pointer">Workout Mix</li>
            <li className="hover:text-blue-500 cursor-pointer">Chillin’ at Home</li>
            <li className="hover:text-blue-500 cursor-pointer">Booping at Adobe</li>
            <li className="hover:text-blue-500 cursor-pointer">XD 4 Life</li>
          </ul>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Highlight Sections */}
          <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white p-8 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold">GET LOST</h1>
            <p className="text-sm mt-2">in your music.</p>
          </div>
          <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-8 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold">MELLOW</h1>
            <p className="text-sm mt-2">beats.</p>
          </div>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
        <div className="w-full py-10">
      <h1 className="text-2xl font-bold mb-4">Recently Played</h1>
      <div className=" w-full">
        {tracks.map((song:any, index) => (
          <div
            key={index}
            className="grid grid-cols-8 gap-4 items-center  p-4 hover:bg-gray-100 hover:rounded-lg"
            onClick={() => playTrack(song)}
          >
            
              <div className="w-10 h-10 bg-gray-300 rounded">
              <IoPlayCircle size={40} color='white'/>
              </div>
             
                <h2 className="text-sm col-span-2">{song.strTrack}</h2>
                <p className="text-sm col-span-2">{song.strArtist}</p>
             
          
            
              <p className="text-sm font-medium">{formatTime(song.intDuration)}</p>
              <button className="text-gray-500 hover:text-gray-700">
               <FcLikePlaceholder size={20}/>
              </button>
              <button className="text-gray-500 hover:text-gray-700">
                <MdMoreHoriz size={20}/>
              </button>
           
          </div>
        ))}
      </div>
    </div>
                <div className='w-full h-full bg-red-200'>
hello
                </div>
        </div>

        {/* Recently Played */}
        {/* <div className="mt-6">
          <h2 className="text-2xl font-bold mb-4">Recently Played</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {tracks.map((track:any) => (
              <div
                key={track.idTrack}
                className="bg-white shadow-md p-4 rounded-lg hover:shadow-lg transition"
              >
                <p className="font-bold">{track.strAlbum}</p>
                <p className="text-sm text-gray-500">{track.strArtist}</p>
                <button
                  className="mt-2 bg-blue-500 text-white px-3 py-1 rounded"
                  onClick={() => playTrack(track)}
                >
                  Play
                </button>
              </div>
            ))}
          </div>
        </div> */}

        {/* Recommendations */}
        {/* <div className="mt-6">
          <h2 className="text-2xl font-bold mb-4">Recommended For You</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {recommended.map((rec:any) => (
              <div
                key={rec.idAlbum}
                className="bg-gray-200 shadow-md p-4 rounded-lg hover:shadow-lg transition"
              >
                <p className="font-bold">{rec.strAlbum}</p>
                <p className="text-sm text-gray-500">{rec.strArtist}</p>
              </div>
            ))}
          </div>
        </div> */}
      </main>
    </div>
    <div className="bg-pink-500 text-white  w-full h-auto  p-10 flex flex-wrap items-center justify-around gap-4">
     <div className='flex gap-5 items-center'>
         {/* Album Artwork */}
      <div className="w-16 h-16 rounded-full bg-pink-700"></div>
      
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
          <BsShuffle size={20}/>
        </button>
        {/* Previous */}
        <button>
          <PiCaretLineLeftFill size={30}/>
        </button>
        {/* Play */}
        <button >
          <IoPlayCircle size={50}/>
        </button>
        {/* Next */}
        <button>
        <PiCaretLineRightFill size={30}/>
        </button>
        {/* Repeat */}
        <button className="opacity-50 hover:opacity-100">
        <BsRepeat size={20}/>
        </button>
         {/* Progress Bar */}
      <div className="flex  items-center gap-1">
        {/* <div className="text-xs opacity-75 flex justify-between w-full">
          <span>0:00</span>
          <span>9:10</span>
        </div> */}
          <span className='text-xs opacity-75 flex'>{formatTime(0)}</span>
        <div className="relative w-40 h-1 bg-pink-300 rounded-full">
          <div className="absolute top-0 left-0 w-1/4 h-full bg-white rounded-full"></div>
        </div>
        <span className='text-xs opacity-75 flex '>{currentTrack ? formatTime(currentTrack.intDuration): formatTime(0)}</span>
      </div>
      </div>
      
     
      
      {/* Volume */}
      <div className="flex items-center gap-2">
      <button>
         <BiSolidPlaylist size={20}/>
        </button>
      <button>
         <PiDevicesBold size={18}/>
        </button>
        <button>
         <IoVolumeMedium size={20}/>
        </button>
        <input type="range" className="w-28 h-1 bg-pink-300 rounded-lg" />
      </div>
    </div>
</div>

</>
  )
}

export default Track