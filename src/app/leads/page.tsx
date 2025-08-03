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
  baseTop: string | number;
  baseLeft: string | number;
  amplitude?: number;
  speed?: number;
  phase?: number;
}
interface CloudFloatOptions {
  baseTop: string | number;
  baseLeft: string | number;
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
      setTop(Number(baseTop) + Math.sin(t * speed + phase) * amplitude);
      if (running) requestAnimationFrame(animate);
    }
    animate();
    return () => {
      running = false;
    };
  }, [baseTop, amplitude, speed, phase]);

  return { top, left: baseLeft };
}

const MeetTheBoardPage: React.FC = () => {
  const [view, setView] = useState<'board' | 'departments'>('board');
  const [isDarkMode, setIsDarkMode] = useState(false);
  
    // Detect system theme preference
    useEffect(() => {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      setIsDarkMode(mediaQuery.matches);
  
      const handleChange = (e: MediaQueryListEvent) => {
        setIsDarkMode(e.matches);
      };
  
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(mediaQuery.matches);
    const handleChange = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches);
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

    useEffect(() => {
    // Set body and html to full height without scroll
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.height = '100vh';
    document.body.style.overflow = 'hidden';
    document.documentElement.style.height = '100vh';
    document.documentElement.style.overflow = 'hidden';

    // Prevent scroll and zoom
    const preventScroll = (e: Event) => e.preventDefault();
    const preventZoom = (e: WheelEvent) => {
      if (e.ctrlKey) {
        e.preventDefault();
      }
    };
    const preventKeyboardZoom = (e: KeyboardEvent) => {
      if (e.ctrlKey && (e.key === '+' || e.key === '-' || e.key === '0')) {
        e.preventDefault();
      }
    };

    document.addEventListener('wheel', preventZoom, { passive: false });
    document.addEventListener('keydown', preventKeyboardZoom);
    document.addEventListener('touchmove', preventScroll, { passive: false });

    return () => {
      document.removeEventListener('wheel', preventZoom);
      document.removeEventListener('keydown', preventKeyboardZoom);
      document.removeEventListener('touchmove', preventScroll);
      document.body.style.overflow = '';
    };
  }, []);

    const getThemeColors = () => {
    if (isDarkMode) {
      return {
        background: "linear-gradient(to bottom, #00040d 0%, #002855 100%)",
        lineColor: "#0B3A79",
        borderColor: "#1e40af", // blue-800
        textColor: "text-white",
        gridOpacity: "rgba(255, 255, 255, 0.1)"
      };
    } else {
      return {
        background: "linear-gradient(to bottom, #e0f2fe 0%, #87ceeb 100%)",
        lineColor: "#1e88e5", // lighter blue for light theme
        borderColor: "#3b82f6", // blue-500
        textColor: "text-gray-900",
        gridOpacity: "rgba(255, 255, 255, 0.3)"
      };
    }
  };

  const themeColors = getThemeColors();

  return (
    <>

    <div className="full-screen-container">
      <div className="content-wrapper">
      <div
        className="min-h-screen flex flex-col items-center p-5 relative "
         style={{
        backgroundImage: `
          linear-gradient(to right, ${themeColors.gridOpacity} 1px, transparent 1px),
          linear-gradient(to bottom, ${themeColors.gridOpacity} 1px, transparent 1px),
          ${themeColors.background}
        `,
        backgroundSize: "30px 30px, 30px 30px, 100% 100%",
        backgroundRepeat: "repeat, repeat, no-repeat",
        backgroundPosition: "top left, top left, center",
        userSelect: "none",
        touchAction: "none",
      }}
      >
      {/* Clouds (absolute, behind content) */}
      {(() => {
        const c1 = useCloudFloat({ baseTop: 154, baseLeft: -12, amplitude: 25, speed: 0.8, phase: 0 });
        const c2 = useCloudFloat({ baseTop: 466, baseLeft: 22, amplitude: 35, speed: 1.1, phase: 1 });
        const c3 = useCloudFloat({ baseTop: 700, baseLeft: 232, amplitude: 30, speed: 0.9, phase: 2 });
        const c4 = useCloudFloat({ baseTop: 790, baseLeft: 1003, amplitude: 28, speed: 1.2, phase: 3 });
        const c5 = useCloudFloat({ baseTop: 604.98, baseLeft: 1331, amplitude: 32, speed: 1.0, phase: 4 });
        const c6 = useCloudFloat({ baseTop: 127.98, baseLeft: 1142, amplitude: 27, speed: 1.3, phase: 5 });
        const c7 = useCloudFloat({ baseTop: -23, baseLeft: 1500, amplitude: 22, speed: 1.05, phase: 6 });
        const c8 = useCloudFloat({ baseTop: 604.98, baseLeft: 1400, amplitude: 32, speed: 1.0, phase: 4 });
        const c9 = useCloudFloat({ baseTop: 127.98, baseLeft: 1600, amplitude: 27, speed: 1.3, phase: 5 });
        const c10 = useCloudFloat({ baseTop: 600, baseLeft: 1600, amplitude: 22, speed: 1.05, phase: 6 });

        
        return <>
          <Image src="/images/cloud1.png" alt="Cloud 1" width={355} height={228} style={{ position: 'absolute', ...c1, zIndex: 2 }} />
          <Image src="/images/cloud2.png" alt="Cloud 2" width={367} height={219} style={{ position: 'absolute', ...c2, zIndex: 2 }} />
          <Image src="/images/cloud1.png" alt="Cloud 3" width={355} height={228} style={{ position: 'absolute', ...c3, zIndex: 2 }} />
          <Image src="/images/cloud3.png" alt="Cloud 4" width={204} height={125} style={{ position: 'absolute', ...c4, zIndex: 2 }} />
          <Image src="/images/cloud3.png" alt="Cloud 5" width={204} height={125} style={{ position: 'absolute', ...c5, zIndex: 2 }} />
          <Image src="/images/cloud2.png" alt="Cloud 6" width={388} height={254} style={{ position: 'absolute', ...c6, zIndex: 2 }} />
          <Image src="/images/cloud1.png" alt="Cloud 7" width={355} height={228} style={{ position: 'absolute', ...c7, zIndex: 2 }} />
          <Image src="/images/cloud3.png" alt="Cloud 8" width={204} height={125} style={{ position: 'absolute', ...c8, zIndex: 2 }} />
          <Image src="/images/cloud2.png" alt="Cloud 9" width={388} height={254} style={{ position: 'absolute', ...c9, zIndex: 2 }} />
          <Image src="/images/cloud1.png" alt="Cloud 10" width={355} height={228} style={{ position: 'absolute', ...c10, zIndex: 2 }} />
        </>;
      })()}


      {/* Main Heading */}
      <h1 className={`${themeColors.textColor} font-press-start z-10 text-center mb-2`}
          style={{ fontSize: "min(6vw, 4rem)" }}>
        Meet the Team
      </h1>

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
            <PresidentCard name="NAME" />
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
      </div>
      </div>
    </>
  );
};

export default MeetTheBoardPage; 

function setIsDarkMode(matches: boolean) {
  throw new Error('Function not implemented.');
}
