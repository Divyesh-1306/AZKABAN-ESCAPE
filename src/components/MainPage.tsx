import React, { useState, useEffect, useMemo } from 'react';
import { Shield, Users, Clock, MapPin, Code, Lock, Sparkles, Zap, Eye, Globe } from 'lucide-react';
import QRModal from './QRModal';
import HolographicPanel from './HolographicPanel';
import MagicalCursor from './MagicalCursor';
import FloatingOrbs from './FloatingOrbs';
import logoImg from '../assets/logo.jpeg';

const MainPage: React.FC = () => {
  const [showQR, setShowQR] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });


  // Memoize background glitter positions so they don't change on re-render
  const glitterParticles = useMemo(
    () =>
      Array.from({ length: 25 }).map(() => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: `${Math.random() * 8}s`,
        duration: `${6 + Math.random() * 4}s`,
        type: Math.floor(Math.random() * 4),
      })),
    [] // <--- This ensures glitter is static!
  );

  const energyStreams = useMemo(
    () =>
      Array.from({ length: 6 }).map((_, i) => ({
        left: `${15 + i * 15}%`,
        top: `${Math.random() * 70}%`,
        delay: `${i * 1.2}s`,
        rotate: `${Math.random() * 180}deg`,
      })),
    []
  );

  useEffect(() => {
    // Entrance animation
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
      document.body.style.overflow = 'auto';
    }, 1500);

    // Mouse tracking for MagicalCursor only
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const registrationLink = "https://forms.gle/W15XosJ5qzrWvwKG8";

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-100 relative overflow-x-hidden">
      {/* Magical Cursor Effect */}
      <MagicalCursor position={mousePosition} />
      
      {/* Website Logo */}
      <div className="w-full flex justify-center mt-8 mb-6 z-20 relative">
        <img
          src={logoImg}
          alt="Azkaban Escape Logo"
          className="w-28 h-28 rounded-full border-4 border-blue-400 shadow-xl shadow-blue-400/30 bg-slate-900 object-cover animate-borderGlow"
          style={{ boxShadow: '0 0 40px 0 #60a5fa88, 0 0 0 8px #1e293b' }}
        />
      </div>

      {/* Enhanced Background Effects */}
      <div className="fixed inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-radial from-blue-900/20 via-transparent to-purple-900/20"></div>
        
        {/* Animated Magical Grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-12 grid-rows-12 h-full w-full">
            {[...Array(144)].map((_, i) => (
              <div
                key={i}
                className="border border-blue-400/20 animate-pulse"
                style={{
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${3 + Math.random() * 2}s`
                }}
              />
            ))}
          </div>
        </div>

        {/* Enhanced Floating Particles */}
        {glitterParticles.map((p, i) => (
          <div
            key={i}
            className={`absolute rounded-full animate-float opacity-60 ${
              p.type === 0
                ? 'w-2 h-2 bg-blue-400'
                : p.type === 1
                ? 'w-1 h-1 bg-purple-400'
                : p.type === 2
                ? 'w-1 h-1 bg-gold-400'
                : 'w-1 h-1 bg-cyan-400'
            }`}
            style={{
              left: p.left,
              top: p.top,
              animationDelay: p.delay,
              animationDuration: p.duration,
            }}
          />
        ))}

        {/* Magical Energy Streams */}
        {energyStreams.map((s, i) => (
          <div
            key={i}
            className="absolute w-px h-32 bg-gradient-to-t from-transparent via-blue-400/50 to-transparent animate-pulse"
            style={{
              left: s.left,
              top: s.top,
              animationDelay: s.delay,
              transform: `rotate(${s.rotate})`,
            }}
          />
        ))}
      </div>

      {/* Enhanced Header with Magical Effects */}
      <header className="relative z-10 pt-12 pb-20">
        <div className="container mx-auto px-6 text-center">
          <div className="animate-fadeIn">
            {/* Magical Sparkles around Title */}
            <div className="relative inline-block">
              <h1 className="text-6xl md:text-8xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-gold-400 mb-6 tracking-wide relative">
                AZKABAN ESCAPE
                {/* Floating Sparkles */}
                {[...Array(8)].map((_, i) => (
                  <Sparkles
                    key={i}
                    className={`absolute w-4 h-4 text-gold-400 animate-pulse opacity-70`}
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 3}s`
                    }}
                  />
                ))}
              </h1>
            </div>
            
            <div className="relative">
              <p className="text-xl md:text-2xl text-slate-300 font-light tracking-wider mb-4">
                CYBERSECURITY CHALLENGE EVENT
              </p>
              <div className="flex items-center justify-center space-x-2 mb-6">
                <Zap className="w-5 h-5 text-blue-400 animate-pulse" />
                <span className="text-slate-400">Powered by Dark Magic & Advanced Cryptography</span>
                <Zap className="w-5 h-5 text-purple-400 animate-pulse" />
              </div>
            </div>
            
            <div className="mt-8 w-40 h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-gold-400 mx-auto rounded-full relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-gold-400 rounded-full animate-pulse opacity-75"></div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-6 space-y-20">
        {/* Enhanced Event Overview */}
        <HolographicPanel className="animate-slideUp group" delay={0}>
          <div className="flex items-center mb-8">
            <div className="relative">
              <Shield className="w-10 h-10 text-blue-400 mr-4" />
              <div className="absolute inset-0 bg-blue-400/20 rounded-full animate-ping"></div>
            </div>
            <h2 className="text-4xl font-serif text-slate-200">Event Overview</h2>
            <div className="ml-auto">
              <Eye className="w-6 h-6 text-purple-400 animate-pulse" />
            </div>
          </div>
          <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
            <p className="relative">
              Break free from the digital dungeons of Azkaban! Face CTF-style challenges 
              rooted in ethical hacking and cybersecurity.
              <span className="absolute -right-2 -top-2">
                <Sparkles className="w-4 h-4 text-gold-400 animate-pulse" />
              </span>
            </p>
            <p className="relative">
              Only those who can crack enchanted encryptions and bypass spellbound 
              firewalls will escape the confines of this mystical prison.
              <span className="absolute -right-2 -top-2">
                <Zap className="w-4 h-4 text-blue-400 animate-pulse" />
              </span>
            </p>
            <div className="mt-6 p-4 bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-lg border border-blue-400/30">
              <p className="text-blue-300 font-semibold">🔮 Magical Challenge Awaits:</p>
              <p className="text-slate-300 mt-2">Combine your technical prowess with mystical problem-solving to unlock the secrets of Azkaban's digital fortress.</p>
            </div>
          </div>
        </HolographicPanel>

        {/* Enhanced Registration Section */}
        <HolographicPanel className="animate-slideUp group" delay={200}>
          <div className="flex items-center mb-8">
            <div className="relative">
              <Users className="w-10 h-10 text-purple-400 mr-4" />
              <div className="absolute inset-0 bg-purple-400/20 rounded-full animate-ping"></div>
            </div>
            <h2 className="text-4xl font-serif text-slate-200">Registration Portal</h2>
            <div className="ml-auto">
              <Globe className="w-6 h-6 text-gold-400 animate-pulse" />
            </div>
          </div>
          
          <div className="space-y-8">
            {/* Registration Options */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Direct Link Registration */}
              <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/30 border border-blue-400/40 rounded-xl p-6 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/5 to-purple-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <h3 className="text-xl font-semibold text-blue-400 mb-4 flex items-center">
                  <Globe className="w-5 h-5 mr-2" />
                  Direct Registration
                </h3>
                <p className="text-slate-300 mb-4">Click the link below to register directly</p>
                <a
                  href={registrationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg text-center font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/25 relative overflow-hidden"
                >
                  <span className="relative z-10">Register Now</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              </div>

              {/* QR Code Registration */}
              <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/30 border border-purple-400/40 rounded-xl p-6 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400/5 to-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <h3 className="text-xl font-semibold text-purple-400 mb-4 flex items-center">
                  <Sparkles className="w-5 h-5 mr-2" />
                  QR Code Portal
                </h3>
                <p className="text-slate-300 mb-4">Scan the mystical QR code to register</p>
                <button
                  onClick={() => setShowQR(true)}
                  className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/25 relative overflow-hidden"
                >
                  <span className="relative z-10">Open QR Portal</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>
            </div>

            {/* Enhanced Rules Section */}
            <div className="border-t border-slate-600/50 pt-8">
              <button
                onClick={() => setExpandedSection(expandedSection === 'rules' ? null : 'rules')}
                className="flex items-center justify-between w-full text-left text-2xl font-semibold text-slate-200 hover:text-blue-400 transition-all duration-300 group"
              >
                <div className="flex items-center">
                  <Lock className="w-6 h-6 mr-3 group-hover:text-blue-400 transition-colors duration-300" />
                  Enchanted Rules & Regulations
                </div>
                <div className={`transform transition-all duration-300 ${expandedSection === 'rules' ? 'rotate-180 text-blue-400' : ''}`}>
                  <Zap className="w-5 h-5" />
                </div>
              </button>
              
              {expandedSection === 'rules' && (
                <div className="mt-6 space-y-4 text-slate-300 animate-fadeIn">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3 p-3 bg-blue-900/20 rounded-lg">
                      <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                      <span>Each team may have 2-3 members</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-purple-900/20 rounded-lg">
                      <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
                      <span>Laptop is mandatory for participation</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-gold-900/20 rounded-lg">
                      <div className="w-3 h-3 bg-gold-400 rounded-full animate-pulse"></div>
                      <span>The flag format must be strictly followed</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-cyan-900/20 rounded-lg">
                      <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
                      <span>All rounds conducted through provided website</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </HolographicPanel>

        {/* Enhanced Event Structure */}
        <HolographicPanel className="animate-slideUp group" delay={400}>
          <div className="flex items-center mb-8">
            <div className="relative">
              <Code className="w-10 h-10 text-gold-400 mr-4" />
              <div className="absolute inset-0 bg-gold-400/20 rounded-full animate-ping"></div>
            </div>
            <h2 className="text-4xl font-serif text-slate-200">Mystical Event Structure</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {[
                { icon: Users, label: "Event Type", value: "Team-based (2-3 members)", color: "blue" },
                { icon: Shield, label: "Domain", value: "Cybersecurity", color: "purple" },
                { icon: Zap, label: "Format", value: "Mixed logical and technical", color: "gold" }
              ].map((item, index) => (
                <div key={index} className={`flex items-center space-x-4 p-4 bg-gradient-to-r from-${item.color}-900/20 to-${item.color}-800/20 rounded-lg border border-${item.color}-400/30 group hover:border-${item.color}-400/60 transition-all duration-300`}>
                  <div className="relative">
                    <item.icon className={`w-6 h-6 text-${item.color}-400`} />
                    <div className={`absolute inset-0 bg-${item.color}-400/20 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  </div>
                  <div>
                    <span className="text-slate-400 text-sm">{item.label}:</span>
                    <span className="text-slate-200 ml-2 font-semibold">{item.value}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="space-y-6">
              <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-cyan-900/20 to-cyan-800/20 rounded-lg border border-cyan-400/30 group hover:border-cyan-400/60 transition-all duration-300">
                <div className="relative">
                  <Clock className="w-6 h-6 text-cyan-400" />
                  <div className="absolute inset-0 bg-cyan-400/20 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div>
                  <span className="text-slate-400 text-sm">Duration:</span>
                  <span className="text-slate-200 ml-2 font-semibold">90 minutes of intense challenges</span>
                </div>
              </div>
              
              {/* Magical Stats */}
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 border border-slate-600/50 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-gold-400 mb-4 flex items-center">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Challenge Intensity
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">Difficulty Level</span>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className={`w-3 h-3 rounded-full ${i < 4 ? 'bg-gold-400' : 'bg-slate-600'} animate-pulse`} style={{ animationDelay: `${i * 0.2}s` }}></div>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">Magic Required</span>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Sparkles key={i} className={`w-3 h-3 ${i < 5 ? 'text-purple-400' : 'text-slate-600'} animate-pulse`} style={{ animationDelay: `${i * 0.3}s` }} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </HolographicPanel>

        {/* Enhanced Challenge Categories */}
        <HolographicPanel className="animate-slideUp group" delay={600}>
          <div className="flex items-center mb-8">
            <div className="relative">
              <Lock className="w-10 h-10 text-blue-400 mr-4" />
              <div className="absolute inset-0 bg-blue-400/20 rounded-full animate-ping"></div>
            </div>
            <h2 className="text-4xl font-serif text-slate-200">Mystical Challenge Realms</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div 
              className="group cursor-pointer transform transition-all duration-500 hover:scale-105 magical-hover"
              onClick={() => setExpandedSection(expandedSection === 'logical' ? null : 'logical')}
            >
              <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/30 border border-blue-400/30 rounded-xl p-8 transition-all duration-300 group-hover:border-blue-400/60 group-hover:shadow-2xl group-hover:shadow-blue-400/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/5 to-purple-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="relative">
                      <Eye className="w-8 h-8 text-blue-400 mr-3" />
                      <div className="absolute inset-0 bg-blue-400/30 rounded-full animate-pulse"></div>
                    </div>
                    <h3 className="text-2xl font-semibold text-blue-400">Logical Mysteries</h3>
                  </div>
                  {expandedSection === 'logical' ? (
                    <div className="space-y-4 text-slate-300 animate-fadeIn">
                      {[
                        { icon: Lock, text: "Cryptography basics & cipher breaking" },
                        { icon: Eye, text: "Pattern recognition & logical deduction" },
                        { icon: Globe, text: "OSINT investigations & digital forensics" },
                        { icon: Sparkles, text: "Steganography puzzles & hidden messages" }
                      ].map((item, index) => (
                        <div key={index} className="flex items-center space-x-3 p-3 bg-blue-900/20 rounded-lg">
                          <item.icon className="w-4 h-4 text-blue-400" />
                          <span>{item.text}</span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <p className="text-slate-400">Unravel the mysteries of ancient codes and hidden patterns</p>
                      <div className="flex items-center text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                        <span className="mr-2">Click to reveal secrets</span>
                        <Sparkles className="w-4 h-4 animate-pulse" />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            <div 
              className="group cursor-pointer transform transition-all duration-500 hover:scale-105 magical-hover"
              onClick={() => setExpandedSection(expandedSection === 'technical' ? null : 'technical')}
            >
              <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/30 border border-purple-400/30 rounded-xl p-8 transition-all duration-300 group-hover:border-purple-400/60 group-hover:shadow-2xl group-hover:shadow-purple-400/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400/5 to-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="relative">
                      <Zap className="w-8 h-8 text-purple-400 mr-3" />
                      <div className="absolute inset-0 bg-purple-400/30 rounded-full animate-pulse"></div>
                    </div>
                    <h3 className="text-2xl font-semibold text-purple-400">Technical Sorcery</h3>
                  </div>
                  {expandedSection === 'technical' ? (
                    <div className="space-y-4 text-slate-300 animate-fadeIn">
                      {[
                        { icon: Globe, text: "Web security exploitation & vulnerability assessment" },
                        { icon: Zap, text: "Network analysis & packet inspection" },
                        { icon: Code, text: "Reverse engineering & binary analysis" },
                        { icon: Shield, text: "Digital forensics & incident response" }
                      ].map((item, index) => (
                        <div key={index} className="flex items-center space-x-3 p-3 bg-purple-900/20 rounded-lg">
                          <item.icon className="w-4 h-4 text-purple-400" />
                          <span>{item.text}</span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <p className="text-slate-400">Master the dark arts of cybersecurity and digital warfare</p>
                      <div className="flex items-center text-purple-400 group-hover:text-purple-300 transition-colors duration-300">
                        <span className="mr-2">Click to unlock powers</span>
                        <Zap className="w-4 h-4 animate-pulse" />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </HolographicPanel>

        {/* Enhanced Command Center */}
        <HolographicPanel className="animate-slideUp group" delay={800}>
          <div className="flex items-center mb-8">
            <div className="relative">
              <MapPin className="w-10 h-10 text-gold-400 mr-4" />
              <div className="absolute inset-0 bg-gold-400/20 rounded-full animate-ping"></div>
            </div>
            <h2 className="text-4xl font-serif text-slate-200">Mystical Command Center</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { 
                title: "Venue", 
                content: "St. Joseph's College of Engineering\n Reporting Time: 8:00 P.M", 
                icon: MapPin, 
                color: "gold",
                detail: ""
              },
              { 
                title: "Event Faculty", 
                content: "Dr. Ancy.S\nMs. Quba Jaslin C\nMs. Nithya. K", 
                icon: Clock, 
                color: "blue",
                detail: ""
              },
              { 
                title: "Event Coordinators", 
                content: "Jeffrin E\nMail: 22am163@stjosephs.ac.in\nPhone: +91 88709 58636\n\nJagadeeshwaran S\nMail: 22AM103@stjosephs.ac.in\nPhone: +91 72994 15577\n\nYogesh G\nMail: 22AM224@stjosephs.ac.in\nPhone: +91 99404 67122", 
                icon: Zap, 
                color: "purple",
                detail: ""
              }
            ].map((item, index) => (
              <div key={index} className={`bg-gradient-to-br from-${item.color}-900/30 to-${item.color}-800/30 border border-${item.color}-400/30 rounded-xl p-6 group hover:border-${item.color}-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-${item.color}-400/20 relative overflow-hidden`}>
                <div className={`absolute inset-0 bg-gradient-to-r from-${item.color}-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <div className="relative">
                      <item.icon className={`w-6 h-6 text-${item.color}-400 mr-3`} />
                      <div className={`absolute inset-0 bg-${item.color}-400/20 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                    </div>
                    <h4 className={`text-lg font-semibold text-${item.color}-400`}>{item.title}</h4>
                  </div>
                  <p className="text-slate-300 mb-3">{["Venue", "Event Faculty", "Event Coordinators"].includes(item.title)
  ? item.content.split('\n').map((line, i) => (
      <span key={i}>{line}<br /></span>
    ))
  : item.content}</p>
                  <p className="text-slate-400 text-sm italic">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </HolographicPanel>
      </main>

      {/* Enhanced Footer */}
      <footer className="relative z-10 mt-24 py-12 border-t border-slate-700/50">
        <div className="container mx-auto px-6 text-center">
          <div className="space-y-4">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <Sparkles className="w-6 h-6 text-gold-400 animate-pulse" />
              <p className="text-slate-300 text-lg">
                Welcome to Azkaban Escape! Join us for a magical cybersecurity experience.
              </p>
              <Sparkles className="w-6 h-6 text-blue-400 animate-pulse" />
            </div>
            <div className="flex items-center justify-center space-x-8 text-slate-400">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4" />
                <span>Secure</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="w-4 h-4" />
                <span>Magical</span>
              </div>
              <div className="flex items-center space-x-2">
                <Eye className="w-4 h-4" />
                <span>Mysterious</span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* QR Modal */}
      {showQR && <QRModal onClose={() => setShowQR(false)} registrationLink={registrationLink} />}
    </div>
  );
};

export default MainPage;