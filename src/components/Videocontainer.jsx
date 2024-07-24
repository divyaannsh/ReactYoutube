import React, { useEffect, useState } from 'react';
import { YOUTUBE_API } from './utils/constant';
import Videocard from './Videocard';
import { Link } from 'react-router-dom';

const Videocontainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API);
    const json = await data.json();
    setVideos(json.items);
  };

  return (
    <div className='flex flex-wrap justify-center gap-6 p-4'>
      {videos.map((video) => (
        <div key={video.id} className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2'>
          <Link to={'/watch?v=' + video.id}>
            <Videocard info={video} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Videocontainer;
