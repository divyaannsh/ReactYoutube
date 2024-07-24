import React from 'react';

const Videocard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  const truncate = (str, n) => {
    return str.length > n ? str.substr(0, n - 1) + '...' : str;
  };

  return (
    <div className='p-4 m-2 shadow-lg rounded-lg bg-white'>
      <img className='rounded-lg w-full' alt='thumbnail' src={thumbnails.medium.url} />
      <ul className='mt-2'>
        <li className='font-bold py-1'>{title}</li>
        <li>{truncate(channelTitle, 20)}</li>
        <li>{statistics.viewCount} Views</li>
      </ul>
    </div>
  );
};

export default Videocard;
