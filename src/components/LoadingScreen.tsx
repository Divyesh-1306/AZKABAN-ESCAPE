import React, { useState, useEffect } from 'react';

const LoadingScreen: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState(1); // 1: approaching, 2: runes solving, 3: gates opening, 4: portal opening
  const [magicalText, setMagicalText] = useState('Approaching the Fortress of Azkaban...');

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + 1.5;
        
        if (newProgress >= 25 && phase === 1) {
          setPhase(2);
          setMagicalText('Ancient Runes are Awakening...');
        } else if (newProgress >= 60 && phase === 2) {
          setPhase(3);
          setMagicalText('The Enchanted Gates Respond...');
        } else if (newProgress >= 85 && phase === 3) {
          setPhase(4);
          setMagicalText('Portal to the Digital Realm Opens...');
        }
        
        return Math.min(newProgress, 100);
      });
    }, 80);

    return () => clearInterval(timer);
  }, [phase]);

  return (
    <div className="fixed inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center overflow-hidden">
      {/* Enhanced Storm Background */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-blue-900/30 to-slate-900"></div>
        {/* Multiple Lightning Effects */}
        <div className={`absolute inset-0 ${progress > 15 ? 'animate-pulse' : ''}`}>
          <div className="absolute top-1/4 left-1/3 w-1 h-32 bg-gradient-to-b from-blue-300 via-purple-300 to-transparent transform rotate-12 opacity-70 animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-1 h-24 bg-gradient-to-b from-purple-300 via-blue-300 to-transparent transform -rotate-45 opacity-50 animate-pulse"></div>
          <div className="absolute top-1/5 left-1/2 w-1 h-20 bg-gradient-to-b from-gold-300 to-transparent transform rotate-6 opacity-60 animate-pulse"></div>
        </div>
        
        {/* Magical Energy Waves */}
        {phase >= 2 && (
          <div className="absolute inset-0">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full border-2 border-blue-400/30 animate-ping"
                style={{
                  width: `${200 + i * 100}px`,
                  height: `${200 + i * 100}px`,
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                  animationDelay: `${i * 0.5}s`,
                  animationDuration: '3s'
                }}
              ></div>
            ))}
          </div>
        )}
      </div>

      {/* Enhanced Prison Silhouette */}
      <div className={`absolute inset-0 transition-all duration-3000 ${phase >= 3 ? 'scale-110 opacity-90' : 'scale-100 opacity-70'}`}>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-96">
          {/* Enhanced Castle Spires with Magical Glow */}
          <div className={`absolute bottom-0 left-1/4 w-8 h-64 bg-gradient-to-t from-slate-800 via-slate-700 to-slate-600 transform -skew-x-2 ${phase >= 2 ? 'shadow-lg shadow-blue-400/50' : ''}`}></div>
          <div className={`absolute bottom-0 right-1/4 w-8 h-72 bg-gradient-to-t from-slate-800 via-slate-700 to-slate-600 transform skew-x-2 ${phase >= 2 ? 'shadow-lg shadow-purple-400/50' : ''}`}></div>
          <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-80 bg-gradient-to-t from-slate-800 via-slate-700 to-slate-600 ${phase >= 2 ? 'shadow-lg shadow-gold-400/50' : ''}`}></div>
          
          {/* Magical Aura around Castle */}
          {phase >= 2 && (
            <div className="absolute inset-0 bg-gradient-radial from-blue-400/10 via-purple-400/5 to-transparent animate-pulse"></div>
          )}
        </div>
      </div>

      {/* Enhanced Main Gate */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="relative w-80 h-96 mb-8">
          {/* Enhanced Gate Frame with Magical Energy */}
          <div className={`absolute inset-0 border-4 rounded-t-full bg-gradient-to-b from-slate-800 to-slate-900 shadow-2xl transition-all duration-1000 ${
            phase >= 2 ? 'border-blue-400 shadow-blue-400/50' : 'border-slate-600'
          }`}>
            
            {/* Enhanced Mystical Runes */}
            <div className="absolute inset-4 flex flex-wrap justify-center items-center gap-4">
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className={`w-8 h-8 border-2 rounded-full flex items-center justify-center transition-all duration-1000 ${
                    progress > 25 + i * 4 
                      ? 'border-blue-400 bg-blue-400 shadow-lg shadow-blue-400/70 animate-pulse scale-110' 
                      : 'border-slate-500 bg-transparent'
                  }`}
                >
                  <div className={`w-4 h-4 rounded-full transition-all duration-500 ${
                    progress > 25 + i * 4 ? 'bg-white animate-pulse' : 'bg-slate-500'
                  }`}></div>
                  
                  {/* Magical Sparkles */}
                  {progress > 25 + i * 4 && (
                    <div className="absolute inset-0">
                      {[...Array(4)].map((_, j) => (
                        <div
                          key={j}
                          className="absolute w-1 h-1 bg-white rounded-full animate-ping"
                          style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 2}s`
                          }}
                        ></div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Gate Doors with 3D Effect */}
          <div className="absolute inset-0 flex">
            <div
              className={`w-1/2 h-full bg-gradient-to-r from-slate-800 via-slate-700 to-slate-600 border-r-2 border-slate-600 rounded-tl-full transition-all duration-3000 origin-left ${
                phase === 4 ? 'transform -rotate-y-90 opacity-0 scale-x-0' : ''
              }`}
              style={{
                transformStyle: 'preserve-3d',
                transform: phase === 4 ? 'perspective(600px) rotateY(-120deg) translateZ(-100px)' : 'perspective(600px) rotateY(0deg)'
              }}
            >
              {/* Door Details */}
              <div className="absolute inset-4 border border-slate-500 rounded-tl-full opacity-50"></div>
              <div className="absolute top-1/2 left-3/4 w-2 h-2 bg-gold-400 rounded-full transform -translate-y-1/2"></div>
            </div>
            <div
              className={`w-1/2 h-full bg-gradient-to-l from-slate-800 via-slate-700 to-slate-600 border-l-2 border-slate-600 rounded-tr-full transition-all duration-3000 origin-right ${
                phase === 4 ? 'transform rotate-y-90 opacity-0 scale-x-0' : ''
              }`}
              style={{
                transformStyle: 'preserve-3d',
                transform: phase === 4 ? 'perspective(600px) rotateY(120deg) translateZ(-100px)' : 'perspective(600px) rotateY(0deg)'
              }}
            >
              {/* Door Details */}
              <div className="absolute inset-4 border border-slate-500 rounded-tr-full opacity-50"></div>
              <div className="absolute top-1/2 right-3/4 w-2 h-2 bg-gold-400 rounded-full transform -translate-y-1/2"></div>
            </div>
          </div>

          {/* Enhanced Inner Light Portal */}
          {phase === 4 && (
            <div className="absolute inset-0 bg-gradient-radial from-blue-300 via-purple-400 to-gold-500 rounded-t-full animate-pulse opacity-90">
              <div className="absolute inset-0 bg-gradient-radial from-white/50 via-blue-300/70 to-transparent rounded-t-full animate-ping"></div>
              {/* Portal Particles */}
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-white rounded-full animate-bounce opacity-80"
                  style={{
                    left: `${20 + Math.random() * 60}%`,
                    top: `${20 + Math.random() * 60}%`,
                    animationDelay: `${Math.random() * 2}s`,
                    animationDuration: `${1 + Math.random()}s`
                  }}
                ></div>
              ))}
            </div>
          )}
        </div>

        {/* Enhanced Loading Text and Progress */}
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-gold-400 tracking-wide animate-pulse">
            {magicalText}
          </h1>
          
          {/* Enhanced Progress Bar */}
          <div className="w-80 h-3 bg-slate-700 rounded-full overflow-hidden border border-slate-600 shadow-inner">
            <div
              className="h-full bg-gradient-to-r from-blue-400 via-purple-500 to-gold-400 rounded-full transition-all duration-300 shadow-lg relative"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent rounded-full animate-pulse"></div>
              {/* Progress Sparkles */}
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
              </div>
            </div>
          </div>
          
          <div className="space-y-2">
            <p className="text-slate-300 text-xl font-mono font-bold">{Math.round(progress)}%</p>
            <p className="text-slate-400 text-sm">
              {phase === 1 ? 'Detecting magical barriers...' :
               phase === 2 ? 'Deciphering ancient encryptions...' :
               phase === 3 ? 'Bypassing mystical firewalls...' :
               'Entering the digital realm...'}
            </p>
          </div>
        </div>
      </div>

      {/* Enhanced Particle Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full animate-pulse ${
              i % 3 === 0 ? 'w-1 h-1 bg-blue-400' :
              i % 3 === 1 ? 'w-1 h-1 bg-purple-400' :
              'w-1 h-1 bg-gold-400'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          ></div>
        ))}
      </div>

      {/* Magical Energy Streams */}
      {phase >= 3 && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-px h-20 bg-gradient-to-t from-transparent via-blue-400 to-transparent animate-pulse opacity-60"
              style={{
                left: `${10 + i * 10}%`,
                top: `${Math.random() * 80}%`,
                animationDelay: `${i * 0.3}s`,
                transform: `rotate(${Math.random() * 360}deg)`
              }}
            ></div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LoadingScreen;