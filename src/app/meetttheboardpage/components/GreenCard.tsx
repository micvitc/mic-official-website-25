import React from 'react';
import Image from 'next/image';

interface RedCardProps {
  name: string;
  title?: string;
  imageSrc?: string;
}

const RedCard: React.FC<RedCardProps> = ({ name, title, imageSrc }) => {
  // SVG dimensions
  const CARD_WIDTH = 327;
  const CARD_HEIGHT = 279;

  // Positions
  const IMAGE_X = 179;
  const IMAGE_Y = 81;
  const IMAGE_W = 112;
  const IMAGE_H = 118;

  const NAME_X = 40;
  const NAME_Y = 120;

  return (
    <div
      className="relative"
      style={{ width: CARD_WIDTH, height: CARD_HEIGHT }}
    >
      {/* Background SVG */}
      <img
        src="/images/green.svg"
        alt="Vice-President Card Background"
        width={CARD_WIDTH}
        height={CARD_HEIGHT}
        className="absolute top-0 left-0 w-full h-full select-none pointer-events-none"
        draggable="false"
        aria-hidden="true"
      />

      {/* Name */}
      <div
        className="absolute z-10 font-press-start text-[24px] text-black"
        style={{
          left: NAME_X,
          top: NAME_Y,
          width: 120,
          textAlign: 'left',
          lineHeight: 1,
        }}
      >
        {name}
      </div>

      {/* Image Area */}
      <div
        className="absolute z-10"
        style={{
          left: IMAGE_X,
          top: IMAGE_Y,
          width: IMAGE_W,
          height: IMAGE_H,
        }}
      >
        <div
          className="bg-gray-300 rounded-[12px] border border-gray-400 flex items-center justify-center relative"
          style={{
            width: IMAGE_W,
            height: IMAGE_H,
            position: 'relative',
          }}
        >
          {imageSrc && (
            <Image
              src={imageSrc}
              alt="Vice-President Profile"
              width={IMAGE_W}
              height={IMAGE_H}
              className="object-cover rounded-[12px]"
            />
          )}
          {title && (
            <div
              className="absolute font-press-start text-[18px] text-black"
              style={{
                top: -60,
                
                transform: 'translateX(-40%)',
                textAlign: 'center',
                lineHeight: 1,
              
              }}
            >
              {title}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RedCard;
