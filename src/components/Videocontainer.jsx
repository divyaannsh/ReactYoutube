import React, { useEffect, useState } from 'react'
import { YOUTUBE_API,  } from './utils/constant';
import Videocard from './Videocard';
import { Link } from 'react-router-dom';

const Videocontainer = () => {
  const[videos, setVideos] = useState([]);


  useEffect(() =>{
    getVideos();


  },[]);

  const getVideos = async()=>{
    const data = await fetch(YOUTUBE_API );
    const json = await data.json();
 
    setVideos(json.items)
  }
  return (
    <div className='flex flex-wrap'>
      {videos.map((video) => (

      // eslint-disable-next-line react/jsx-key
      <Link to= {"/watch?v=" + video.id}>
      
      <Videocard key={video.id} info={video}/> 
      </Link>
    ))}
    
    </div>
  )
}

export default Videocontainer
