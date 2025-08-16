import React from 'react';
import wandImg from '../assets/wand.png';

interface MagicalCursorProps {
  position: { x: number; y: number };
}

const MagicalCursor: React.FC<MagicalCursorProps> = ({ position }) => {
  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      <img
        src={wandImg}
        alt="wand cursor"
        style={{
          position: 'absolute',
          left: position.x,
          top: position.y,
          width: 40,
          height: 40,
          transform: 'translate(-10px, -10px)', // adjust for hotspot
          pointerEvents: 'none',
          userSelect: 'none',
        }}
        draggable={false}
      />
    </div>
  );
};

export default MagicalCursor;