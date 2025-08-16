import React from 'react';

interface HolographicPanelProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const HolographicPanel: React.FC<HolographicPanelProps> = ({ 
  children, 
  className = '', 
  delay = 0 
}) => {
  return (
    <div 
      className={`relative bg-gradient-to-br from-slate-800/20 via-slate-800/10 to-slate-700/20 backdrop-blur-sm border border-slate-600/30 rounded-xl p-8 shadow-2xl transition-all duration-500 hover:border-blue-400/50 hover:shadow-blue-400/10 ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Holographic Border Effect */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400/10 via-purple-400/10 to-gold-400/10 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Corner Accents */}
      <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-blue-400/60 rounded-tl-xl"></div>
      <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-purple-400/60 rounded-tr-xl"></div>
      <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-purple-400/60 rounded-bl-xl"></div>
      <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-gold-400/60 rounded-br-xl"></div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default HolographicPanel;