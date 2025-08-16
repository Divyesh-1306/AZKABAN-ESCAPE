import React from 'react';

const FloatingOrbs: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      {/* Large floating orbs */}
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className={`absolute rounded-full animate-float opacity-20 ${
            i % 3 === 0 ? 'w-32 h-32 bg-gradient-radial from-blue-400/30 to-transparent' :
            i % 3 === 1 ? 'w-24 h-24 bg-gradient-radial from-purple-400/30 to-transparent' :
            'w-20 h-20 bg-gradient-radial from-gold-400/30 to-transparent'
          }`}
          style={{
            left: `${10 + i * 20}%`,
            top: `${15 + i * 15}%`,
            animationDelay: `${i * 2}s`,
            animationDuration: `${8 + i * 2}s`
          }}
        >
          {/* Inner glow */}
          <div className={`absolute inset-2 rounded-full ${
            i % 3 === 0 ? 'bg-gradient-radial from-blue-300/40 to-transparent' :
            i % 3 === 1 ? 'bg-gradient-radial from-purple-300/40 to-transparent' :
            'bg-gradient-radial from-gold-300/40 to-transparent'
          } animate-pulse`}></div>
        </div>
      ))}
      
      {/* Medium floating orbs */}
      {[...Array(8)].map((_, i) => (
        <div
          key={`medium-${i}`}
          className={`absolute w-12 h-12 rounded-full animate-float opacity-30 ${
            i % 4 === 0 ? 'bg-gradient-radial from-cyan-400/40 to-transparent' :
            i % 4 === 1 ? 'bg-gradient-radial from-blue-400/40 to-transparent' :
            i % 4 === 2 ? 'bg-gradient-radial from-purple-400/40 to-transparent' :
            'bg-gradient-radial from-pink-400/40 to-transparent'
          }`}
          style={{
            left: `${Math.random() * 90}%`,
            top: `${Math.random() * 90}%`,
            animationDelay: `${i * 1.5}s`,
            animationDuration: `${6 + Math.random() * 4}s`
          }}
        />
      ))}
      
      {/* Small twinkling stars */}
      {[...Array(15)].map((_, i) => (
        <div
          key={`star-${i}`}
          className="absolute w-2 h-2 bg-white rounded-full animate-pulse opacity-60"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 2}s`
          }}
        />
      ))}
    </div>
  );
};

export default FloatingOrbs;