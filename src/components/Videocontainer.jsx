import React, { useEffect, useState } from 'react'
import { YOUTUBE_API,  } from './utils/constant';
import Videocard , { RedBORDERVIDEOCARD } from './Videocard';

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
     { videos[0] && <RedBORDERVIDEOCARD info ={videos[0]}/>}
      {videos.map((video) => (

      // eslint-disable-next-line react/jsx-key
     <Link key ={video.id} to = {"/watch?v=" + video.id}>
      <Videocard info= {video} />
      </Link>
    ))}
    
    </div>
  )
}



export default Videocontainer
