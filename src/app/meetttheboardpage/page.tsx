'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import TeamMemberCard from './components/TeamMemberCard';

const MeetTheTeamPage: React.FC = () => {
  const [view, setView] = useState<'board' | 'departments'>('board');

  return (
    <div
      className="min-h-screen flex flex-col items-center p-8 relative overflow-hidden font-sans"
      style={{
        backgroundImage: 'url(/images/cloud2.png)',
        backgroundRepeat: 'repeat',
        backgroundColor: '#a7e5ff', // A light blue color to match the sky background
      }}
    >
      <h1 className="text-5xl font-extrabold text-gray-800 mb-8 relative z-10" style={{ textShadow: '2px 2px 0px rgba(0,0,0,0.2)' }}>Meet the Team</h1>

      <div className="flex space-x-4 mb-8 relative z-10">
        <button
          className={`w-[343px] h-[79px] flex items-center justify-center rounded-xl border-2 border-black text-lg font-bold shadow-lg transform transition-transform duration-200
            ${view === 'board' ? 'bg-[#FFE396] text-gray-700 scale-105' : 'bg-yellow-300 text-gray-700'}
          `}
          onClick={() => setView('board')}
        >
          BOARD
        </button>
        <button
          className={`w-[343px] h-[79px] flex items-center justify-center rounded-xl border-2 border-black text-lg font-bold shadow-lg transform transition-transform duration-200
            ${view === 'departments' ? 'bg-[#C0F3F9] text-gray-700 scale-105' : 'bg-green-300 text-gray-700'}
          `}
          onClick={() => setView('departments')}
        >
          DEPARTMENTS
        </button>
      </div>

      {view === 'board' ? (
        <div className="flex flex-col items-center space-y-8 relative z-10">
          {/* President, Vice-President, Management Sec */}
          <div className="flex justify-center space-x-8">
            <TeamMemberCard role="President" name="NAME" color="bg-pink-300" />
            <TeamMemberCard role="Vice-President" name="NAME" color="bg-blue-300" />
            <TeamMemberCard role="Management Sec" name="NAME" color="bg-green-300" />
          </div>

          {/* Tech Sec, Non-Tech Sec */}
          <div className="flex justify-center space-x-8 relative">
            <TeamMemberCard role="Tech Sec" name="NAME" color="bg-yellow-300" />
            <Image src="/images/cloud1.png" alt="Small Cloud" width={100} height={50} className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 z-0" />
            <TeamMemberCard role="Non-Tech Sec" name="NAME" color="bg-pink-300" />
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center space-y-8 relative z-10">
          <h2 className="text-3xl font-bold text-gray-700">Departments View</h2>
          <p className="text-lg text-gray-600">This is a placeholder for the Departments content.</p>
          {/* Add more department-specific content here later */}
        </div>
      )}
    </div>
  );
};

export default MeetTheTeamPage; 