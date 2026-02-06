import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Globe, MapPin } from 'lucide-react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredSide, setHoveredSide] = useState<'left' | 'right' | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Trigger entrance animations
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen w-full overflow-hidden bg-charcoal-950"
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Desktop Split Screen Layout */}
      <div className="hidden md:flex absolute inset-0">
        {/* Left Side - RIELART */}
        <div
          className={`relative w-1/2 h-full overflow-hidden cursor-pointer transition-all duration-700 ${
            hoveredSide === 'right' ? 'opacity-60' : 'opacity-100'
          }`}
          onMouseEnter={() => setHoveredSide('left')}
          onMouseLeave={() => setHoveredSide(null)}
          onClick={() => window.open('https://rielart.com', '_blank')}
        >
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-charcoal-950 via-[#0a1628] to-charcoal-950" />
          
          {/* Tech Pattern Overlay */}
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `radial-gradient(circle at 30% 70%, rgba(0, 212, 255, 0.15) 0%, transparent 50%)`,
            }}
          />

          {/* Content */}
          <div 
            className={`relative z-10 h-full flex flex-col justify-center px-12 lg:px-20 xl:px-28 transition-all duration-500 ${
              isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            {/* Brand Badge */}
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-rielart/10 border border-rielart/30 rounded-full text-rielart text-sm font-medium">
                <Globe className="w-4 h-4" />
                Digital Agency
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight text-white mb-4">
              <span className="gradient-text-rielart">RIEL</span>
              <span className="text-white">ART</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl lg:text-2xl text-charcoal-300 font-light mb-8">
              Digital Excellence
            </p>

            {/* Services List */}
            <div className="flex flex-wrap gap-3 mb-10">
              {['Web Development', 'Brand Identity', 'Social Media', 'Ads Management'].map((service) => (
                <span
                  key={service}
                  className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-charcoal-300"
                >
                  {service}
                </span>
              ))}
            </div>

            {/* CTA Button */}
            <div>
              <button className="group inline-flex items-center gap-3 px-8 py-4 bg-rielart text-charcoal-950 font-bold rounded-lg transition-all duration-300 hover:bg-rielart-light hover:shadow-[0_0_40px_rgba(0,212,255,0.4)] hover:-translate-y-1">
                Visit RielArt
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>

            {/* Hover Glow Effect */}
            <div 
              className={`absolute inset-0 transition-opacity duration-500 pointer-events-none ${
                hoveredSide === 'left' ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                background: 'radial-gradient(circle at 30% 50%, rgba(0, 212, 255, 0.1) 0%, transparent 60%)',
              }}
            />
          </div>

          {/* Corner Accent */}
          <div className="absolute bottom-8 left-8 flex items-center gap-2 text-charcoal-500 text-sm">
            <div className="w-2 h-2 bg-rielart rounded-full animate-pulse" />
            rielart.com
          </div>
        </div>

        {/* Right Side - SPOTIX */}
        <div
          className={`relative w-1/2 h-full overflow-hidden cursor-pointer transition-all duration-700 ${
            hoveredSide === 'left' ? 'opacity-60' : 'opacity-100'
          }`}
          onMouseEnter={() => setHoveredSide('right')}
          onMouseLeave={() => setHoveredSide(null)}
          onClick={() => window.open('https://myspotix.com', '_blank')}
        >
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-bl from-charcoal-950 via-[#1a1a0a] to-charcoal-950" />
          
          {/* Warm Pattern Overlay */}
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `radial-gradient(circle at 70% 30%, rgba(249, 115, 22, 0.15) 0%, transparent 50)`,
            }}
          />

          {/* Content */}
          <div 
            className={`relative z-10 h-full flex flex-col justify-center items-end text-right px-12 lg:px-20 xl:px-28 transition-all duration-500 ${
              isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            {/* Brand Badge */}
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-spotix/10 border border-spotix/30 rounded-full text-spotix text-sm font-medium">
                <MapPin className="w-4 h-4" />
                Local Marketing
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight text-white mb-4">
              <span className="gradient-text-spotix">SPOT</span>
              <span className="text-white">IX</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl lg:text-2xl text-charcoal-300 font-light mb-8">
              Local Advertising Power
            </p>

            {/* Description */}
            <p className="text-lg text-charcoal-400 mb-10 max-w-md">
              Postcard Marketing for Local Businesses
            </p>

            {/* Features */}
            <div className="flex flex-wrap justify-end gap-3 mb-10">
              {['Direct Mail', 'Local Reach', 'High ROI', 'Targeted Ads'].map((feature) => (
                <span
                  key={feature}
                  className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-charcoal-300"
                >
                  {feature}
                </span>
              ))}
            </div>

            {/* CTA Button */}
            <div>
              <button className="group inline-flex items-center gap-3 px-8 py-4 bg-spotix text-charcoal-950 font-bold rounded-lg transition-all duration-300 hover:bg-spotix-light hover:shadow-[0_0_40px_rgba(255,215,0,0.4)] hover:-translate-y-1">
                Visit Spotix
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>

            {/* Hover Glow Effect */}
            <div 
              className={`absolute inset-0 transition-opacity duration-500 pointer-events-none ${
                hoveredSide === 'right' ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                background: 'radial-gradient(circle at 70% 50%, rgba(249, 115, 22, 0.1) 0%, transparent 60%)',
              }}
            />
          </div>

          {/* Corner Accent */}
          <div className="absolute bottom-8 right-8 flex items-center gap-2 text-charcoal-500 text-sm">
            myspotix.com
            <div className="w-2 h-2 bg-spotix rounded-full animate-pulse" />
          </div>
        </div>


      </div>

      {/* Mobile Layout */}
      <div className="md:hidden flex flex-col min-h-screen pt-24 pb-12">
        {/* RIELART Section */}
        <div 
          className={`flex-1 flex flex-col justify-center px-6 py-12 border-b border-white/10 transition-all duration-700 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="mb-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-rielart/10 border border-rielart/30 rounded-full text-rielart text-xs font-medium">
              <Globe className="w-3 h-3" />
              Digital Agency
            </span>
          </div>

          <h2 className="text-5xl font-black tracking-tight mb-2">
            <span className="gradient-text-rielart">RIEL</span>
            <span className="text-white">ART</span>
          </h2>

          <p className="text-lg text-charcoal-300 mb-4">Digital Excellence</p>

          <p className="text-sm text-charcoal-400 mb-6">
            Web Development • Brand Identity • Social Media • Ads Management
          </p>

          <button
            onClick={() => window.open('https://rielart.com', '_blank')}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-rielart text-charcoal-950 font-bold rounded-lg w-full"
          >
            Visit RielArt
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* SPOTIX Section */}
        <div 
          className={`flex-1 flex flex-col justify-center px-6 py-12 transition-all duration-700 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          <div className="mb-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-spotix/10 border border-spotix/30 rounded-full text-spotix text-xs font-medium">
              <MapPin className="w-3 h-3" />
              Local Marketing
            </span>
          </div>

          <h2 className="text-5xl font-black tracking-tight mb-2">
            <span className="gradient-text-spotix">SPOT</span>
            <span className="text-white">IX</span>
          </h2>

          <p className="text-lg text-charcoal-300 mb-4">Local Advertising Power</p>

          <p className="text-sm text-charcoal-400 mb-6">
            Postcard Marketing for Local Businesses
          </p>

          <button
            onClick={() => window.open('https://myspotix.com', '_blank')}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-spotix text-charcoal-950 font-bold rounded-lg w-full"
          >
            Visit Spotix
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-700 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
        style={{ transitionDelay: '600ms' }}
      >
        <span className="text-xs text-charcoal-500 uppercase tracking-widest">Scroll to explore</span>
        <div className="w-6 h-10 border-2 border-charcoal-600 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-charcoal-400 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
