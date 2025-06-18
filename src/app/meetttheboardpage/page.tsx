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
        backgroundImage: 'linear-gradient(180deg, #B3D9FF 0%, #B3E5FF 34%, #B1F0FC 71%, #B0F9FA 100%)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      {/* Grid SVG overlay (above gradient, below content) */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1,
          pointerEvents: 'none',
          backgroundImage: 'url(/images/grid-bg.svg)',
          backgroundRepeat: 'repeat',
          backgroundSize: 'auto',
        }}
        aria-hidden="true"
      />

      {/* Clouds (absolute, behind content) */}
      <Image src="/images/cloud1.png" alt="Cloud 1" width={355} height={228} style={{ position: 'absolute', top: 154, left: -12, zIndex: 2 }} />
      <Image src="/images/cloud2.png" alt="Cloud 2" width={367} height={219} style={{ position: 'absolute', top: 466, left: 22, zIndex: 2 }} />
      <Image src="/images/cloud1.png" alt="Cloud 3" width={355} height={228} style={{ position: 'absolute', top: 772.98, left: 232, zIndex: 2 }} />
      <Image src="/images/cloud3.png" alt="Cloud 4" width={204} height={125} style={{ position: 'absolute', top: 790, left: 1003, zIndex: 2 }} />
      <Image src="/images/cloud3.png" alt="Cloud 5" width={204} height={125} style={{ position: 'absolute', top: 604.98, left: 1331, zIndex: 2 }} />
      <Image src="/images/cloud2.png" alt="Cloud 6" width={388} height={254} style={{ position: 'absolute', top: 127.98, left: 1142, zIndex: 2 }} />
      <Image src="/images/cloud1.png" alt="Cloud 7" width={355} height={228} style={{ position: 'absolute', top: -23, left: 847, zIndex: 2 }} />

      {/* Dots (stars) as a single SVG */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: 1154, height: 364, zIndex: 2 }}>
        <svg width="1154" height="364" viewBox="0 0 1154 364" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="1150.02" cy="55" rx="3.98274" ry="4" fill="white"/>
          <ellipse cx="949.885" cy="19" rx="3.98274" ry="4" fill="white"/>
          <ellipse cx="203.119" cy="4" rx="3.98274" ry="4" fill="white"/>
          <ellipse cx="134.418" cy="211" rx="3.98274" ry="4" fill="white"/>
          <ellipse cx="3.98274" cy="360" rx="3.98274" ry="4" fill="white"/>
          <ellipse cx="486.891" cy="95" rx="3.98274" ry="4" fill="white"/>
          <ellipse cx="677.067" cy="47" rx="3.98274" ry="4" fill="white"/>
          <ellipse cx="1084.3" cy="299" rx="3.98274" ry="4" fill="white"/>
        </svg>
      </div>

      <div className="mb-8 relative z-10">
        <svg width="824" height="56" viewBox="0 0 824 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-auto h-16">
          <path d="M0 56V0H16V8H24V16H32V8H40V0H56V56H40V24H32V40H24V24H16V56H0ZM72 56V48H64V24H72V16H112V24H120V40H80V48H112V56H72ZM80 32H104V24H80V32ZM136 56V48H128V24H136V16H176V24H184V40H144V48H176V56H136ZM144 32H168V24H144V32ZM216 56V24H200V16H216V0H232V16H248V24H232V56H216ZM344 56V24H328V16H344V0H360V16H376V24H360V56H344ZM384 56V0H400V16H432V24H440V56H424V24H400V56H384ZM456 56V48H448V24H456V16H496V24H504V40H464V48H496V56H456ZM464 32H488V24H464V32ZM600 56V8H584V0H632V8H616V56H600ZM648 56V48H640V24H648V16H688V24H696V40H656V48H688V56H648ZM656 32H680V24H656V32ZM712 56V48H704V40H712V32H744V24H712V16H752V24H760V56H712ZM720 48H744V40H720V48ZM768 56V16H816V24H824V56H808V24H800V56H784V24H776V56H768Z" fill="black"/>
        </svg>
      </div>

      <div className="flex space-x-4 mb-8 relative z-10">
        <button
          className={`font-press-start w-[343px] h-[79px] flex items-center justify-center rounded-xl border-2 border-black text-[24px] leading-[163%] shadow-lg transform transition-transform duration-200
            ${view === 'board' ? 'bg-[#FFE396] text-black scale-105' : 'bg-yellow-300 text-black'}
          `}
          style={{ fontWeight: '400', letterSpacing: 0 }}
          onClick={() => setView('board')}
        >
          BOARD
        </button>
        <button
          className={`font-press-start w-[343px] h-[79px] flex items-center justify-center rounded-xl border-2 border-black text-[24px] leading-[163%] shadow-lg transform transition-transform duration-200
            ${view === 'departments' ? 'bg-[#C0F3F9] text-black scale-105' : 'bg-green-300 text-black'}
          `}
          style={{ fontWeight: '400', letterSpacing: 0 }}
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