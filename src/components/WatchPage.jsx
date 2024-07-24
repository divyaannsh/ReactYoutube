import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { closeMenu } from './utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentsLine from './CommentsLine';
import LiveChat from './LiveChat';

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);

  return (
    <div className='flex flex-col w-full p-4'>
      <div className='flex flex-col lg:flex-row w-full'>
        <div className='w-full lg:w-2/3'>
          <div className='relative pb-[56.25%] h-0'>
            <iframe
              className='absolute top-0 left-0 w-full h-full'
              src={'https://www.youtube.com/embed/' + searchParams.get('v')}
              title='YouTube video player'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              referrerPolicy='strict-origin-when-cross-origin'
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className='w-full lg:w-1/3 lg:pl-5'>
          <LiveChat />
        </div>
      </div>
      <CommentsLine />
    </div>
  );
};

export default WatchPage;
