import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Globe, MapPin } from 'lucide-react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen w-full overflow-hidden bg-charcoal-dark"
    >
      {/* Desktop Diagonal Split Layout */}
      <div className="hidden lg:block relative h-screen w-full">
        {/* RIELART Side - Left */}
        <div
          className={`absolute inset-0 transition-all duration-1000 pointer-events-none ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="absolute left-0 top-0 w-[60%] h-full bg-gradient-to-br from-charcoal-dark via-[hsl(217,50%,12%)] to-charcoal-dark cursor-pointer group pointer-events-auto"
            style={{
              clipPath: 'polygon(0 0, 100% 0, 75% 100%, 0 100%)',
            }}
            onClick={() => window.open('https://rielart.com', '_blank')}
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-20">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `radial-gradient(circle at 30% 50%, hsl(217 91% 60% / 0.15) 0%, transparent 50%)`,
                }}
              />
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `linear-gradient(135deg, transparent 0%, hsl(217 91% 60% / 0.05) 50%, transparent 100%)`,
                }}
              />
            </div>

            {/* Grid Pattern */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
                `,
                backgroundSize: '50px 50px',
              }}
            />

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-center pl-12 xl:pl-24 pr-32">
              <div
                className={`transform transition-all duration-1000 delay-300 ${
                  isLoaded
                    ? 'translate-x-0 opacity-100'
                    : '-translate-x-12 opacity-0'
                }`}
              >
                {/* Brand Icon */}
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-xl bg-rielart/20 border border-rielart/30 flex items-center justify-center group-hover:scale-110 group-hover:bg-rielart/30 transition-all duration-500">
                    <Globe className="w-7 h-7 text-rielart" />
                  </div>
                </div>

                {/* Title */}
                <h1 className="text-6xl xl:text-8xl font-black tracking-tight text-white mb-4 group-hover:text-glow-rielart transition-all duration-500">
                  RIEL<span className="text-rielart">ART</span>
                </h1>

                {/* Subtitle */}
                <p className="text-xl xl:text-2xl font-light text-white/80 mb-6 tracking-wide">
                  Digital Excellence
                </p>

                {/* Services */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {['Web Development', 'Brand Identity', 'Social Media', 'Ads Management'].map(
                    (service, index) => (
                      <span
                        key={service}
                        className="px-4 py-1.5 text-xs font-medium tracking-wider text-rielart-light bg-rielart/10 border border-rielart/20 rounded-full"
                        style={{
                          animationDelay: `${500 + index * 100}ms`,
                        }}
                      >
                        {service}
                      </span>
                    )
                  )}
                </div>

                {/* CTA Button */}
                <button className="group/btn inline-flex items-center gap-3 px-8 py-4 bg-rielart hover:bg-rielart-light text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-glow hover:scale-105">
                  <span>Visit RielArt</span>
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Hover Glow Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
              <div
                className="absolute inset-0"
                style={{
                  background: `radial-gradient(ellipse at 30% 50%, hsl(217 91% 60% / 0.35) 0%, hsl(217 91% 60% / 0.15) 30%, transparent 70%)`,
                }}
              />
              {/* Border Glow */}
              <div 
                className="absolute inset-0"
                style={{
                  boxShadow: 'inset 0 0 80px hsl(217 91% 60% / 0.2)',
                }}
              />
            </div>
          </div>
        </div>

        {/* SPOTIX Side - Right */}
        <div
          className={`absolute inset-0 transition-all duration-1000 delay-200 pointer-events-none ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="absolute right-0 top-0 w-[60%] h-full bg-gradient-to-bl from-charcoal-dark via-[hsl(25,50%,12%)] to-charcoal-dark cursor-pointer group pointer-events-auto"
            style={{
              clipPath: 'polygon(25% 0, 100% 0, 100% 100%, 0 100%)',
            }}
            onClick={() => window.open('https://myspotix.com', '_blank')}
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-20">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `radial-gradient(circle at 70% 50%, hsl(25 95% 53% / 0.15) 0%, transparent 50%)`,
                }}
              />
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `linear-gradient(225deg, transparent 0%, hsl(25 95% 53% / 0.05) 50%, transparent 100%)`,
                }}
              />
            </div>

            {/* Dot Pattern */}
            <div
              className="absolute inset-0 opacity-15"
              style={{
                backgroundImage: `radial-gradient(circle, hsl(25 95% 53% / 0.3) 1px, transparent 1px)`,
                backgroundSize: '30px 30px',
              }}
            />

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-center pl-32 pr-12 xl:pr-24 items-end text-right">
              <div
                className={`transform transition-all duration-1000 delay-500 ${
                  isLoaded
                    ? 'translate-x-0 opacity-100'
                    : 'translate-x-12 opacity-0'
                }`}
              >
                {/* Brand Icon */}
                <div className="mb-6 flex justify-end">
                  <div className="w-14 h-14 rounded-xl bg-spotix/20 border border-spotix/30 flex items-center justify-center group-hover:scale-110 group-hover:bg-spotix/30 transition-all duration-500">
                    <MapPin className="w-7 h-7 text-spotix" />
                  </div>
                </div>

                {/* Title */}
                <h1 className="text-6xl xl:text-8xl font-black tracking-tight text-white mb-4 group-hover:text-glow-spotix transition-all duration-500">
                  SPO<span className="text-spotix">TIX</span>
                </h1>

                {/* Subtitle */}
                <p className="text-xl xl:text-2xl font-light text-white/80 mb-6 tracking-wide">
                  Local Advertising Power
                </p>

                {/* Description */}
                <p className="text-base text-white/60 mb-8 max-w-md">
                  Postcard Marketing for Local Businesses
                </p>

                {/* CTA Button */}
                <button className="group/btn inline-flex items-center gap-3 px-8 py-4 bg-spotix hover:bg-spotix-light text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-glow-spotix hover:scale-105">
                  <span>Visit Spotix</span>
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Hover Glow Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
              <div
                className="absolute inset-0"
                style={{
                  background: `radial-gradient(ellipse at 70% 50%, hsl(25 95% 53% / 0.35) 0%, hsl(25 95% 53% / 0.15) 30%, transparent 70%)`,
                }}
              />
              {/* Border Glow */}
              <div 
                className="absolute inset-0"
                style={{
                  boxShadow: 'inset 0 0 80px hsl(25 95% 53% / 0.2)',
                }}
              />
            </div>
          </div>
        </div>

        {/* Diagonal Divider Line */}
        <div
          className={`absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-white/20 to-transparent transform -translate-x-1/2 rotate-[12deg] origin-center transition-opacity duration-1000 delay-700 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            boxShadow: '0 0 20px rgba(255,255,255,0.1)',
          }}
        />
      </div>

      {/* Mobile/Tablet Stacked Layout */}
      <div className="lg:hidden flex flex-col min-h-screen">
        {/* RIELART - Top Half */}
        <div
          className={`flex-1 relative bg-gradient-to-b from-charcoal-dark via-[hsl(217,50%,10%)] to-charcoal-dark cursor-pointer group py-20 px-6 transition-all duration-700 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          onClick={() => window.open('https://rielart.com', '_blank')}
        >
          {/* Background Glow */}
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `radial-gradient(ellipse at 50% 30%, hsl(217 91% 60% / 0.2) 0%, transparent 60%)`,
            }}
          />

          <div className="relative z-10 flex flex-col items-center text-center">
            {/* Icon */}
            <div className="w-12 h-12 rounded-xl bg-rielart/20 border border-rielart/30 flex items-center justify-center mb-6">
              <Globe className="w-6 h-6 text-rielart" />
            </div>

            {/* Title */}
            <h1 className="text-5xl font-black tracking-tight text-white mb-3">
              RIEL<span className="text-rielart">ART</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg font-light text-white/80 mb-4">
              Digital Excellence
            </p>

            {/* Services */}
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {['Web Dev', 'Branding', 'Social', 'Ads'].map((service) => (
                <span
                  key={service}
                  className="px-3 py-1 text-xs font-medium tracking-wider text-rielart-light bg-rielart/10 border border-rielart/20 rounded-full"
                >
                  {service}
                </span>
              ))}
            </div>

            {/* CTA */}
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-rielart hover:bg-rielart-light text-white font-semibold rounded-lg transition-all duration-300">
              <span>Visit RielArt</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="relative h-px bg-gradient-to-r from-transparent via-white/20 to-transparent">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-charcoal-dark border border-white/20 rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-white/40 rounded-full" />
          </div>
        </div>

        {/* SPOTIX - Bottom Half */}
        <div
          className={`flex-1 relative bg-gradient-to-b from-charcoal-dark via-[hsl(25,50%,10%)] to-charcoal-dark cursor-pointer group py-20 px-6 transition-all duration-700 delay-200 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          onClick={() => window.open('https://myspotix.com', '_blank')}
        >
          {/* Background Glow */}
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `radial-gradient(ellipse at 50% 70%, hsl(25 95% 53% / 0.2) 0%, transparent 60%)`,
            }}
          />

          <div className="relative z-10 flex flex-col items-center text-center">
            {/* Icon */}
            <div className="w-12 h-12 rounded-xl bg-spotix/20 border border-spotix/30 flex items-center justify-center mb-6">
              <MapPin className="w-6 h-6 text-spotix" />
            </div>

            {/* Title */}
            <h1 className="text-5xl font-black tracking-tight text-white mb-3">
              SPO<span className="text-spotix">TIX</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg font-light text-white/80 mb-4">
              Local Advertising Power
            </p>

            {/* Description */}
            <p className="text-sm text-white/60 mb-6">
              Postcard Marketing for Local Businesses
            </p>

            {/* CTA */}
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-spotix hover:bg-spotix-light text-white font-semibold rounded-lg transition-all duration-300">
              <span>Visit Spotix</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Desktop Only */}
      <div className="hidden lg:block absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <div
          className={`flex flex-col items-center gap-2 transition-all duration-1000 delay-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <span className="text-xs tracking-[0.2em] text-white/40 uppercase">
            Scroll to explore
          </span>
          <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
