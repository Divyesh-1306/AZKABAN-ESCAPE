import React, { useEffect, useState } from 'react';
import { X, Sparkles, Zap, ExternalLink } from 'lucide-react';
import qrImg from '../assets/qr scanner.png';
import logoImg from '../assets/logo.jpeg';

interface QRModalProps {
  onClose: () => void;
  registrationLink: string;
}

const QRModal: React.FC<QRModalProps> = ({ onClose, registrationLink }) => {
  const [magicalEffect, setMagicalEffect] = useState(false);

  useEffect(() => {
    setMagicalEffect(true);
    const timer = setTimeout(() => setMagicalEffect(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <div
      className="qr-modal-overlay fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 border border-blue-400/50 rounded-2xl p-8 max-w-lg w-full mx-4 shadow-2xl shadow-blue-400/20 overflow-hidden overflow-y-auto max-h-[90vh]"
        onClick={e => e.stopPropagation()}
      >
        
        {/* Magical Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/5 via-purple-400/5 to-gold-400/5 animate-pulse pointer-events-none"></div>
        
        {/* Floating Sparkles */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 bg-gold-400 rounded-full animate-ping pointer-events-none ${magicalEffect ? 'opacity-100' : 'opacity-30'}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${1 + Math.random()}s`
            }}
          />
        ))}

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-white rounded-full shadow-lg text-slate-700 hover:text-red-500 hover:bg-red-100 transition-all duration-200 z-50 w-12 h-12 flex items-center justify-center cursor-pointer border-2 border-slate-300"
        >
          <div className="relative">
            <X className="w-6 h-6" />
            <div className="absolute inset-0 bg-red-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
          </div>
        </button>

        {/* Header */}
        <div className="text-center mb-8 relative z-10">
          <div className="flex items-center justify-center mb-4">
            <div className="relative">
              <Sparkles className="w-8 h-8 text-gold-400 animate-pulse" />
              <div className="absolute inset-0 bg-gold-400/30 rounded-full animate-ping"></div>
            </div>
            <h3 className="text-3xl font-serif text-slate-200 mx-4">Mystical Registration Portal</h3>
            <div className="relative">
              <Zap className="w-8 h-8 text-blue-400 animate-pulse" />
              <div className="absolute inset-0 bg-blue-400/30 rounded-full animate-ping"></div>
            </div>
          </div>
          <p className="text-slate-400 text-lg">Choose your path to enter Azkaban</p>
        </div>

        {/* Registration Options */}
        <div className="space-y-6 relative z-10">
          
          {/* QR Code Section */}
          <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/30 border border-purple-400/50 rounded-xl p-6">
            <h4 className="text-xl font-semibold text-purple-400 mb-4 flex items-center justify-center">
              <Sparkles className="w-5 h-5 mr-2" />
              Scan the Enchanted QR Code
              <Sparkles className="w-5 h-5 ml-2" />
            </h4>
            {/* QR Code Display - Only the real image! */}
            <div className="flex justify-center mb-4">
              <img src={qrImg} alt="Scan to register QR code" className="w-48 h-48 rounded-lg shadow-lg border-2 border-purple-400 bg-white p-2" />
            </div>
            <p className="text-center text-slate-300 text-sm">
              Point your device's camera at the QR code to access the registration portal
            </p>
          </div>

          {/* Direct Link Section */}
          <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/30 border border-blue-400/50 rounded-xl p-6">
            <h4 className="text-xl font-semibold text-blue-400 mb-4 flex items-center justify-center">
              <img src={logoImg} className="w-7 h-7 rounded-full mr-2 border-2 border-blue-400 shadow-md bg-slate-900 object-cover" alt="Logo" />
              Direct Portal Access
              <img src={logoImg} className="w-7 h-7 rounded-full ml-2 border-2 border-blue-400 shadow-md bg-slate-900 object-cover" alt="Logo" />
            </h4>
            
            <div className="space-y-4">
              <p className="text-center text-slate-300">
                Or click the magical link below to register directly
              </p>
              
              <a
                href={registrationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white font-semibold shadow-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 magical-hover"
              >
                <img src={logoImg} className="w-6 h-6 rounded-full border-2 border-blue-400 shadow bg-slate-900 object-cover" alt="Logo" />
                Register Now
              </a>
              
              <p className="text-center text-slate-400 text-xs">
                Link: {registrationLink}
              </p>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-8 text-center space-y-3 relative z-10">
          <div className="flex items-center justify-center space-x-4 text-slate-300">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <span className="text-sm">Mobile Friendly</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
              <span className="text-sm">Secure Portal</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-gold-400 rounded-full animate-pulse"></div>
              <span className="text-sm">Instant Access</span>
            </div>
          </div>
          <p className="text-slate-400 text-sm italic">
            "The portal awaits those brave enough to enter..."
          </p>
        </div>

        {/* Corner magical effects */}
        <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-blue-400/60 rounded-tl-xl"></div>
        <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-purple-400/60 rounded-tr-xl"></div>
        <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-purple-400/60 rounded-bl-xl"></div>
        <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-gold-400/60 rounded-br-xl"></div>
      </div>
    </div>
  );
};

export default QRModal;