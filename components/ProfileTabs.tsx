"use client";

import React, { useState } from 'react';
import AboutProfile from './profile-tabs/AboutProfile';
import CommunityProfile from './profile-tabs/CommunityProfile';

function ProfileTabs({gamerData}:any) {
    
  const [activeTab, setActiveTab] = useState('about');

  const tabContent:any = {
    about: (
      <AboutProfile aboutData={gamerData?.bio}/>
    ),
    stats: (
      <div>
        Stats
      </div>
    ),
    friends: (
      <div>
        Friends
      </div>
    ),
    community: (
      <CommunityProfile CommunityData={gamerData?.socialHandles}/>
        
      ),
  };


  const handleTabClick = (tab:any) => {
    setActiveTab(tab);
  };

  return (
    <div >
        <div className=' bg-[#222020] px-5 py-4 uppercase my-4'>
        <div className='flex gap-5 font-medium text-white/60 select-none'>
        <div
          className={`cursor-pointer ${activeTab === 'about' ? 'text-red-500' : ''}`}
          onClick={() => handleTabClick('about')}
        >
          About
        </div>
        <div
          className={`cursor-pointer ${activeTab === 'stats' ? 'text-red-500' : ''}`}
          onClick={() => handleTabClick('stats')}
        >
          Stats
        </div>
        <div
          className={`cursor-pointer ${activeTab === 'friends' ? 'text-red-500' : ''}`}
          onClick={() => handleTabClick('friends')}
        >
          Friends
        </div>
        <div
          className={`cursor-pointer ${activeTab === 'community' ? 'text-red-500' : ''}`}
          onClick={() => handleTabClick('community')}
        >
          Community
        </div>
      </div>
        </div>
      <div className='bg-[#222020] px-5 py-4 min-h-[20vh]'>{tabContent[activeTab] as any}</div>
    </div>
  );
}

export default ProfileTabs;
