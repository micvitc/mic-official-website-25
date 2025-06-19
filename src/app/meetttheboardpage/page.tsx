'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import TeamMemberCard from './components/TeamMemberCard';
import PresidentCard from './components/PresidentCard';
import VicePresidentCard from './components/VicePresidentCard';
import ManagementSecCard from './components/ManagementSecCard';
import TechSecCard from './components/TechSecCard';
import NonTechSecCard from './components/NonTechSecCard';

// Floating cloud animation hook
interface CloudFloatOptions {
  baseTop: number;
  baseLeft: number;
  amplitude?: number;
  speed?: number;
  phase?: number;
}
function useCloudFloat({ baseTop, baseLeft, amplitude = 30, speed = 1, phase = 0 }: CloudFloatOptions) {
  const [top, setTop] = useState(baseTop);
  const frame = useRef(0);

  useEffect(() => {
    let running = true;
    function animate() {
      frame.current += 1;
      const t = frame.current / 60; // 60fps
      setTop(baseTop + Math.sin(t * speed + phase) * amplitude);
      if (running) requestAnimationFrame(animate);
    }
    animate();
    return () => { running = false; };
  }, [baseTop, amplitude, speed, phase]);

  return { top, left: baseLeft };
}

const MeetTheTeamPage: React.FC = () => {
  const [view, setView] = useState<'board' | 'departments'>('board');

  return (
    <>
      <div
        className="min-h-screen flex flex-col items-center p-8 relative font-sans"
      >
      {/* Clouds (absolute, behind content) */}
      {(() => {
        const c1 = useCloudFloat({ baseTop: 154, baseLeft: -12, amplitude: 25, speed: 0.8, phase: 0 });
        const c2 = useCloudFloat({ baseTop: 466, baseLeft: 22, amplitude: 35, speed: 1.1, phase: 1 });
        const c3 = useCloudFloat({ baseTop: 772.98, baseLeft: 232, amplitude: 30, speed: 0.9, phase: 2 });
        const c4 = useCloudFloat({ baseTop: 790, baseLeft: 1003, amplitude: 28, speed: 1.2, phase: 3 });
        const c5 = useCloudFloat({ baseTop: 604.98, baseLeft: 1331, amplitude: 32, speed: 1.0, phase: 4 });
        const c6 = useCloudFloat({ baseTop: 127.98, baseLeft: 1142, amplitude: 27, speed: 1.3, phase: 5 });
        const c7 = useCloudFloat({ baseTop: -23, baseLeft: 847, amplitude: 22, speed: 1.05, phase: 6 });
        return <>
          <Image src="/images/cloud1.png" alt="Cloud 1" width={355} height={228} style={{ position: 'absolute', ...c1, zIndex: 2 }} />
          <Image src="/images/cloud2.png" alt="Cloud 2" width={367} height={219} style={{ position: 'absolute', ...c2, zIndex: 2 }} />
          <Image src="/images/cloud1.png" alt="Cloud 3" width={355} height={228} style={{ position: 'absolute', ...c3, zIndex: 2 }} />
          <Image src="/images/cloud3.png" alt="Cloud 4" width={204} height={125} style={{ position: 'absolute', ...c4, zIndex: 2 }} />
          <Image src="/images/cloud3.png" alt="Cloud 5" width={204} height={125} style={{ position: 'absolute', ...c5, zIndex: 2 }} />
          <Image src="/images/cloud2.png" alt="Cloud 6" width={388} height={254} style={{ position: 'absolute', ...c6, zIndex: 2 }} />
          <Image src="/images/cloud1.png" alt="Cloud 7" width={355} height={228} style={{ position: 'absolute', ...c7, zIndex: 2 }} />
        </>;
      })()}

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
          className={`relative w-[345px] h-[81px] flex items-center justify-center border-none bg-transparent p-0 focus:outline-none transition-all duration-1000`}
          onClick={() => setView('board')}
          aria-pressed={view === 'board'}
        >
          {/* Gold SVG (active) */}
          <img
            src="/images/button-gold.svg"
            alt="Board Button Gold Background"
            className={`absolute inset-0 w-full h-full pointer-events-none select-none transition-opacity duration-1000 ${view === 'board' ? 'opacity-100' : 'opacity-0'}`}
            draggable="false"
            aria-hidden="true"
          />
          {/* Peach SVG (inactive) */}
          <img
            src="/images/button-peach.svg"
            alt="Board Button Peach Background"
            className={`absolute inset-0 w-full h-full pointer-events-none select-none transition-opacity duration-1000 ${view === 'board' ? 'opacity-0' : 'opacity-100'}`}
            draggable="false"
            aria-hidden="true"
          />
          <span
            className="font-press-start text-[24px] leading-[163%] text-black z-10 transition-all duration-1000"
            style={{ fontWeight: 400, letterSpacing: 0 }}
          >
            BOARD
          </span>
        </button>
        <button
          className={`relative w-[345px] h-[81px] flex items-center justify-center border-none bg-transparent p-0 focus:outline-none transition-all duration-1000`}
          onClick={() => setView('departments')}
          aria-pressed={view === 'departments'}
        >
          {/* Gold SVG (active) */}
          <img
            src="/images/button-gold.svg"
            alt="Departments Button Gold Background"
            className={`absolute inset-0 w-full h-full pointer-events-none select-none transition-opacity duration-1000 ${view === 'departments' ? 'opacity-100' : 'opacity-0'}`}
            draggable="false"
            aria-hidden="true"
          />
          {/* Peach SVG (inactive) */}
          <img
            src="/images/button-peach.svg"
            alt="Departments Button Peach Background"
            className={`absolute inset-0 w-full h-full pointer-events-none select-none transition-opacity duration-1000 ${view === 'departments' ? 'opacity-0' : 'opacity-100'}`}
            draggable="false"
            aria-hidden="true"
          />
          <span
            className="font-press-start text-[24px] leading-[163%] text-black z-10 transition-all duration-1000"
            style={{ fontWeight: 400, letterSpacing: 0 }}
          >
            DEPARTMENTS
          </span>
        </button>
      </div>

      {view === 'board' ? (
        <div className="flex flex-col items-center space-y-8 relative z-10">
          {/* President, Vice-President, Management Sec */}
          <div className="flex justify-center space-x-8">
            <PresidentCard name="GALI ANNA" />
            <VicePresidentCard name="NAME" />
            <ManagementSecCard name="NAME" />
          </div>

          {/* Tech Sec, Non-Tech Sec */}
          <div className="flex justify-center space-x-8 relative">
            <TechSecCard name="NAME" />
            <NonTechSecCard name="NAME" />
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
    </>
  );
};

export default MeetTheTeamPage; 