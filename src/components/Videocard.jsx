import React from 'react'

const Videocard = ({ info }) => {
    console.log(info);
    const { snippet , statistics } = info;
    const { channelTitle , title, thumbnails } = snippet;
  return ( 
    <div className='p-2 m-2 w-72 shadow-lg'>
     <img className='rounded-lg' alt ="thumnail" src={thumbnails.medium.url}/>
     <ul>
        <li className='font-bold py-3'>{title}</li>
        <li className=''>{channelTitle}</li>
        <li>{statistics.viewCount} Views</li>
     </ul>
    </div>
  )
}

export default Videocard


