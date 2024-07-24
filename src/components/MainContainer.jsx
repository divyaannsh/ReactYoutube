import React from 'react';
import Buttonlist from './Buttonlist';
import Videocontainer from './Videocontainer';

const MainContainer = () => {
  return (
    <div className='flex-1 p-4 sm:p-8'>
      <Buttonlist />
      <Videocontainer />
    </div>
  );
};

export default MainContainer;
