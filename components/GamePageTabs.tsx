"use client";

import React, { useState } from 'react';

function GamePageTabs({Desc}:any) {
  // Initialize state to track the active tab
  const [activeTab, setActiveTab] = useState('description');

  // Define the content for each tab
  const tabContent:any = {
    description: (
      <div dangerouslySetInnerHTML={{ __html: Desc }}></div>
    ),
    specifications: (
      <div>
        <div>
  <h4 className='my-2'>Game Specifications</h4>
  <ul>
    <li>Genre: Action-adventure</li>
    <li>Platform: PlayStation 4, Xbox One, PC</li>
    <li>Release Date: October 26, 2018</li>
    <li>Developer: Rockstar Studios</li>
    <li>Publisher: Rockstar Games</li>
    <li>Single Player: Yes</li>
    <li>Multiplayer: Yes (Red Dead Online)</li>
    <li>Minimum System Requirements (PC):</li>
    <ul>
      <br/>
      <li>OS: Windows 7, Windows 8, Windows 10</li>
      <li>Processor: Intel Core i5-2500K / AMD FX-6300</li>
      <li>Memory: 8 GB RAM</li>
      <li>Graphics: Nvidia GeForce GTX 770 2GB / AMD Radeon R9 280 3GB</li>
      <li>Storage: 150 GB available space</li>
    </ul>
  </ul>
</div>

      </div>
    ),
    faq: (
      <div>
       <div>
  <h4 className='my-2'>Frequently Asked Questions</h4>
  <h5>Q: Is Red Dead Redemption 2 available on other platforms besides PC?</h5>
  <p>A: Yes, Red Dead Redemption 2 is available on PlayStation 4 and Xbox One in addition to PC.</p>
  <br/>

  <h5>Q: Can I play Red Dead Redemption 2 offline?</h5>
  <p>A: Yes, the game includes a single-player Story Mode that can be played offline. However, for the online multiplayer mode, Red Dead Online, an internet connection is required.</p><br/>

  <h5>Q: Are there any expansions or DLCs available for the game?</h5>
  <p>A: Yes, Rockstar Games has released additional content and updates for Red Dead Online, including new missions, items, and events. These are often provided as free updates to the game.</p><br/>

  <h5>Q: What is the gameplay like in Red Dead Redemption 2?</h5>
  <p>A: Red Dead Redemption 2 offers a rich and immersive open-world experience set in the late 1800s. Players can engage in various activities, including exploration, hunting, fishing, and engaging in the main story as Arthur Morgan, an outlaw.</p><br/>

  <h5>Q: Can I customize my character in Red Dead Online?</h5>
  <p>A: Yes, in Red Dead Online, you can customize your character's appearance, clothing, and equipment to create a unique cowboy or cowgirl persona.</p><br/>

  <h5>Q: Are there any microtransactions in the game?</h5>
  <p>A: Yes, Red Dead Online includes microtransactions that allow players to purchase in-game currency (Gold Bars) for real money. These can be used to acquire various in-game items and cosmetics, but the game also provides opportunities to earn Gold Bars through gameplay.</p><br/>
</div>

      </div>
    ),
  };


  const handleTabClick = (tab:any) => {
    setActiveTab(tab);
  };

  return (
    <div className='text-white/60 bg-[#201f1fa7] p-5'>
      <div className='flex gap-10 text-2xl font-medium text-white select-none my-10'>
        <div
          className={`cursor-pointer ${activeTab === 'description' ? 'text-red-500' : ''}`}
          onClick={() => handleTabClick('description')}
        >
          Description
        </div>
        <div
          className={`cursor-pointer ${activeTab === 'specifications' ? 'text-red-500' : ''}`}
          onClick={() => handleTabClick('specifications')}
        >
          Specifications
        </div>
        <div
          className={`cursor-pointer ${activeTab === 'faq' ? 'text-red-500' : ''}`}
          onClick={() => handleTabClick('faq')}
        >
          FAQ
        </div>
      </div>
      {tabContent[activeTab] as any}
    </div>
  );
}

export default GamePageTabs;
